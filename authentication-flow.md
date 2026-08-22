# Authentication Flow Diagram

```text
                    ┌─────────────────┐
                    │     Frontend    │
                    └────────┬────────┘
                             │
                 ┌───────────┴───────────┐
                 │                       │
              Register                  Login
                 │                       │
                 ▼                       ▼
        ┌─────────────────┐      ┌─────────────────┐
        │ Hash Password   │      │ Verify Password │
        │     bcrypt      │      │     bcrypt      │
        └────────┬────────┘      └────────┬────────┘
                 │                       │
                 ▼                       ▼
        ┌─────────────────────────────────────┐
        │          Supabase Database           │
        │              users                   │
        └──────────────────┬──────────────────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │   JWT Token     │
                  │  id/email/role  │
                  └────────┬────────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │    Frontend     │
                  │ Store JWT Token  │
                  └────────┬────────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │ Protected API   │
                  │  /api/profile   │
                  └────────┬────────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │ Verify JWT      │
                  └────────┬────────┘
                           │
                    ┌──────┴──────┐
                    │             │
                  Valid         Invalid
                    │             │
                    ▼             ▼
              ┌──────────┐   ┌──────────┐
              │Role Check│   │  401/403 │
              └────┬─────┘   └──────────┘
                   │
              ┌────┴─────┐
              │          │
             user       admin
              │          │
              ▼          ▼
          User Access  Admin Access
```

## Authentication Process

1. User registers with name, email and password.
2. Password is hashed using bcrypt before being stored.
3. User logs in with email and password.
4. Password is verified using bcrypt.
5. Server generates a JWT containing user ID, email and role.
6. Frontend stores the JWT token.
7. Protected API requests send the JWT as a Bearer token.
8. Server verifies the JWT.
9. Role-based middleware controls user and admin access.
10. Invalid or expired tokens are rejected.
