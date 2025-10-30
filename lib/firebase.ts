/**
 * Placeholder Firebase init.
 * Quando tiver o firebaseConfig, chame initFirebase({ apiKey: ..., authDomain: ..., ... })
 * Este ficheiro exporta auth/db para uso futuro.
 */

import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;

export function initFirebase(config: Record<string, any>) {
    if (!app) {
        app = initializeApp(config);
        auth = getAuth(app);
        db = getFirestore(app);
    }
    return { app, auth, db };
}

export { auth, db };