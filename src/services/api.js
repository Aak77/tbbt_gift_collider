import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  serverTimestamp,
  where,
} from 'firebase/firestore';
import { db } from './firebase';
import { ensureAnonymousAuth } from './anonAuth';

export async function verifyManualUser(researcherId, accessCode) {
  await ensureAnonymousAuth();
  const q = query(
    collection(db, 'users'),
    where('researcherId', '==', researcherId),
    where('accessCode', '==', accessCode),
  );
  const snap = await getDocs(q);
  if (snap.empty) return null;
  const data = snap.docs[0].data();
  return { id: snap.docs[0].id, name: data.name, researcherId: data.researcherId };
}

export async function getMyGifts(userId) {
  await ensureAnonymousAuth();
  const q = query(collection(db, 'selfGifts'), where('ownerId', '==', userId));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function addMyGift(userId, payload) {
  await ensureAnonymousAuth();
  await addDoc(collection(db, 'selfGifts'), {
    ...payload,
    ownerId: userId,
    createdAt: serverTimestamp(),
  });
}

export async function getOthersGifts(userId) {
  await ensureAnonymousAuth();
  const q = query(collection(db, 'othersGifts'), where('ownerId', '==', userId));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function addOthersGift(userId, payload) {
  await ensureAnonymousAuth();
  await addDoc(collection(db, 'othersGifts'), {
    ...payload,
    ownerId: userId,
    createdAt: serverTimestamp(),
  });
}

export async function removeGift(collectionName, id) {
  await ensureAnonymousAuth();
  await deleteDoc(doc(db, collectionName, id));
}

export async function listUsers() {
  await ensureAnonymousAuth();
  const snap = await getDocs(collection(db, 'users'));
  const users = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  users.sort((a, b) => String(a.name || a.researcherId || '').localeCompare(String(b.name || b.researcherId || '')));
  return users;
}
