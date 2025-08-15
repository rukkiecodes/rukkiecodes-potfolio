import { defineStore } from "pinia";

export const useKitchenStore = defineStore("kitchen", {
  state: () => ({
    kitchenList: [
      {
        id: 1,
        name: "Firebase Setup for Expo Projects",
        description: "A ready-to-use boilerplate for initializing Firebase (Auth + Firestore) with persistence in Expo React Native apps",
        installation: `// Install Firebase and dependencies
npm install firebase /*Or*/ yarn add firebase
npx npm install @react-native-async-storage/async-storage`,
        code: `import { initializeApp, FirebaseApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  onAuthStateChanged,
  Auth,
} from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: ''
};

// Initialize Firebase app
const app: FirebaseApp = initializeApp(firebaseConfig);

// Firebase Auth initialization with persistence for React Native
const auth: Auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore
const db: Firestore = getFirestore(app);

// Firebase state persistence: Check if user is already logged in
const setupAuthStatePersistence = (onUserChange: (user: any) => void) => {
  onAuthStateChanged(auth, (user) => {
    onUserChange(user);
  });
};

export { auth, db, setupAuthStatePersistence, onAuthStateChanged, firebaseConfig };`,
        usage: `import { setupAuthStatePersistence } from '@/fb';
setupAuthStatePersistence((user) => {
  if (user) {
    console.log("User logged in:", user.uid);
  } else {
    console.log("No user logged in");
  }
});`,
        documentation: `# 🍳 Firebase Setup for Expo Projects

This snippet bootstraps **Firebase Authentication** and **Firestore** for Expo-based React Native apps.
It also ensures **auth persistence** using \`AsyncStorage\`, so users stay logged in across sessions.

---

## 🧾 Dependencies

\`\`\`bash
npm install firebase
npx expo install @react-native-async-storage/async-storage`,
        configuration: `// .env
EXPO_PUBLIC_apiKey=your-api-key
EXPO_PUBLIC_authDomain=your-auth-domain
EXPO_PUBLIC_projectId=your-project-id
EXPO_PUBLIC_storageBucket=your-storage-bucket
EXPO_PUBLIC_messagingSenderId=your-messaging-sender-id
EXPO_PUBLIC_appId=your-app-id
EXPO_PUBLIC_measurementId=your-measurement-id`
      }
    ],
  }),
});
