require("dotenv").config();

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const bcrypt = require("bcrypt");
const supabase = require("./src/supabaseClient");
const supabaseAdmin = require("./src/supabaseAdmin");
const authenticateToken = require("./src/middleware/authMiddleware");
const requireRole = require("./src/middleware/roleMiddleware");

app.use(express.json());
app.use(express.static("public"));

app.post("/api/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Name, email and password are required"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const { error } = await supabase
        .from("users")
        .insert([
            {
                name,
                email,
                password: hashedPassword,
                role: "user"
            }
        ]);

        if (error) {
            return res.status(400).json({
                message: error.message
            });
        }

        res.status(201).json({
            message: "Registration successful"
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
});

app.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const { data: user, error } = await supabaseAdmin
            .from("users")
            .select("*")
            .eq("email", email)
            .single();

            if (error || !user) {
                
            
                return res.status(401).json({
                    message: "Invalid email or password"
                });
            }

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );
        
        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        res.json({
            message: "Login successful",
            token
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
});

app.get("/api/profile", authenticateToken, (req, res) => {
    res.json({
        message: "Protected route accessed successfully",
        user: req.user
    });
});
app.get("/api/admin", authenticateToken, requireRole("admin"), (req, res) => {
    res.json({
        message: "Admin access granted",
        user: req.user
    });
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});


const PORT = process.env.PORT || 3000;

console.log("JWT_SECRET loaded:", !!process.env.JWT_SECRET);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
