import { onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { auth } from './firebase';

let inflight;

export function ensureAnonymousAuth() {
  if (inflight) return inflight;

  inflight = new Promise((resolve, reject) => {
    const unsub = onAuthStateChanged(
      auth,
      async (user) => {
        try {
          if (user) {
            unsub();
            resolve(user);
            return;
          }
          await signInAnonymously(auth);
          // onAuthStateChanged will fire again with a user
        } catch (err) {
          unsub();
          reject(err);
        }
      },
      (err) => {
        unsub();
        reject(err);
      },
    );
  });

  return inflight;
}

