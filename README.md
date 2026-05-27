# Gift Collider (React + Firebase)

This project converts your Stitch HTML design into a working React app with Firestore backend.

## What is implemented

- React pages based on your screens:
  - Login
  - Home
  - My Gifts (acceptable gifts for yourself)
  - Gifts for Others
- Firebase Firestore backend for app data.
- Manual-user access only:
  - No Firebase Auth signup/login
  - Login form checks Firestore `users` collection (`researcherId` + `accessCode`)

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env` from `.env.example` and fill Firebase values.

Optional: set demo credentials shown on the Login screen (`VITE_DEMO_RESEARCHER_ID`, `VITE_DEMO_ACCESS_CODE`).

3. In Firestore, manually add users in collection `users`:

```json
{
  "name": "Lab Chief",
  "researcherId": "COLLIDER_ADMIN_01",
  "accessCode": "123456"
}
```

4. Run app:

```bash
npm run dev
```

## Firestore collections

- `users` (manual seeded users)
- `selfGifts` (user's own gifts)
- `othersGifts` (gifts for others)

Each gift document stores `ownerId` to scope data to the currently checked-in manual user.

## Notes

- This is an app-level access gate, not secure authentication.
- For production, move to Firebase Auth and secure Firestore rules.
