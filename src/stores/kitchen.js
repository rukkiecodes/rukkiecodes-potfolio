import { defineStore } from "pinia";

export const useKitchenStore = defineStore("kitchen", {
  state: () => ({
    kitchenList: [
      {
        id: 1,
        name: "Firebase Setup for Expo Projects",
        description: "Complete Firebase Authentication & Firestore setup with persistent sessions for Expo React Native apps. Includes user state management and automatic reconnection across app restarts.",
        installation: `# Install Firebase SDK and AsyncStorage for persistence
npm install firebase
npx expo install @react-native-async-storage/async-storage

# Alternative with Yarn
yarn add firebase
npx expo install @react-native-async-storage/async-storage

# Verify installation
npx expo doctor`,
        code: `import { initializeApp, FirebaseApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  onAuthStateChanged,
  Auth,
  User
} from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Firebase configuration object
 * Replace with your actual Firebase project credentials
 * Get these values from Firebase Console > Project Settings > General
 */
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_apiKey || '',
  authDomain: process.env.EXPO_PUBLIC_authDomain || '',
  projectId: process.env.EXPO_PUBLIC_projectId || '',
  storageBucket: process.env.EXPO_PUBLIC_storageBucket || '',
  messagingSenderId: process.env.EXPO_PUBLIC_messagingSenderId || '',
  appId: process.env.EXPO_PUBLIC_appId || '',
  measurementId: process.env.EXPO_PUBLIC_measurementId || ''
};

/**
 * Initialize Firebase application instance
 * This creates the main Firebase app object
 */
const app: FirebaseApp = initializeApp(firebaseConfig);

/**
 * Initialize Firebase Auth with React Native persistence
 * Uses AsyncStorage to persist user sessions across app restarts
 * Users will stay logged in even after closing the app
 */
const auth: Auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

/**
 * Initialize Cloud Firestore database
 * Provides real-time NoSQL database functionality
 */
const db: Firestore = getFirestore(app);

/**
 * Setup authentication state persistence and monitoring
 * Automatically detects when user login state changes
 *
 * @param onUserChange - Callback function that receives user object or null
 * @returns Unsubscribe function to stop listening to auth changes
 */
const setupAuthStatePersistence = (onUserChange: (user: User | null) => void) => {
  return onAuthStateChanged(auth, (user) => {
    onUserChange(user);
  });
};

/**
 * Get current authenticated user
 * @returns Current user object or null if not authenticated
 */
const getCurrentUser = (): User | null => {
  return auth.currentUser;
};

/**
 * Check if user is currently authenticated
 * @returns Boolean indicating authentication status
 */
const isAuthenticated = (): boolean => {
  return !!auth.currentUser;
};

// Export Firebase services and utilities
export {
  auth,
  db,
  setupAuthStatePersistence,
  getCurrentUser,
  isAuthenticated,
  onAuthStateChanged,
  firebaseConfig
};`,
        usage: `// Basic usage in your main App.tsx or authentication component
import { setupAuthStatePersistence, getCurrentUser, isAuthenticated } from '@/config/firebase';
import { useEffect, useState } from 'react';

export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Setup auth state listener
    const unsubscribe = setupAuthStatePersistence((user) => {
      setUser(user);
      setIsLoading(false);

      if (user) {
        console.log("✅ User logged in:", user.email);
        console.log("🆔 User ID:", user.uid);
      } else {
        console.log("❌ No user logged in");
      }
    });

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, []);

  // Check current auth status immediately
  const checkAuthStatus = () => {
    const currentUser = getCurrentUser();
    const authStatus = isAuthenticated();

    console.log('Current user:', currentUser?.email || 'None');
    console.log('Is authenticated:', authStatus);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return user ? <AuthenticatedApp user={user} /> : <LoginScreen />;
}`,
        documentation: `# 🍳 Firebase Setup for Expo Projects

This recipe provides a **complete Firebase setup** for Expo React Native applications with Authentication and Firestore database. Features persistent user sessions that survive app restarts and device reboots.

---

## ✨ What You Get

- 🔐 **Firebase Authentication** - Email/password, social logins, phone auth
- 📱 **Session Persistence** - Users stay logged in across app restarts
- 🗄️ **Cloud Firestore** - Real-time NoSQL database with offline support
- 🔧 **Environment Variables** - Secure configuration management
- 📦 **TypeScript Ready** - Full type safety and IntelliSense
- ⚡ **Expo Compatible** - Works with managed and bare workflows

---

## 🧾 Installation

\`\`\`bash
# Install Firebase SDK
npm install firebase

# Install AsyncStorage for session persistence
npx expo install @react-native-async-storage/async-storage

# Verify your Expo setup
npx expo doctor
\`\`\`

---

## 🔑 Firebase Project Setup

1. **Create Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Create a project" or "Add project"
   - Follow the setup wizard

2. **Add Web App**
   - Click "Web" icon (</>) in project overview
   - Register your app with a nickname
   - Copy the configuration object

3. **Enable Authentication**
   - Go to Authentication > Sign-in method
   - Enable desired providers (Email/Password, Google, etc.)

4. **Setup Firestore**
   - Go to Firestore Database
   - Click "Create database"
   - Choose security rules (start in test mode for development)

---

## ⚙️ Environment Setup

Create a \`.env\` file in your project root:

\`\`\`bash
# Firebase Configuration
EXPO_PUBLIC_apiKey=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXX
EXPO_PUBLIC_authDomain=your-project.firebaseapp.com
EXPO_PUBLIC_projectId=your-project-id
EXPO_PUBLIC_storageBucket=your-project.appspot.com
EXPO_PUBLIC_messagingSenderId=123456789012
EXPO_PUBLIC_appId=1:123456789012:web:abcdef123456789abc
EXPO_PUBLIC_measurementId=G-XXXXXXXXXX
\`\`\`

> **🔒 Security Note**: The \`EXPO_PUBLIC_\` prefix makes these variables accessible in your Expo app. Firebase config values are safe to expose in client-side code.

---

## 🚀 Quick Start Example

\`\`\`typescript
// Example: Authentication flow
import { auth } from '@/config/firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth';

// Sign up new user
const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('✅ User created:', userCredential.user.email);
    return userCredential.user;
  } catch (error) {
    console.error('❌ Sign up error:', error.message);
    throw error;
  }
};

// Sign in existing user
const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('✅ User signed in:', userCredential.user.email);
    return userCredential.user;
  } catch (error) {
    console.error('❌ Sign in error:', error.message);
    throw error;
  }
};

// Sign out user
const handleSignOut = async () => {
  try {
    await signOut(auth);
    console.log('✅ User signed out');
  } catch (error) {
    console.error('❌ Sign out error:', error.message);
  }
};
\`\`\`

---

## 🗄️ Firestore Usage Example

\`\`\`typescript
// Example: Basic Firestore operations
import { db } from '@/config/firebase';
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc
} from 'firebase/firestore';

// Create/Update document
const saveUserProfile = async (userId: string, profileData: any) => {
  try {
    await setDoc(doc(db, 'users', userId), {
      ...profileData,
      updatedAt: new Date(),
    }, { merge: true });
    console.log('✅ Profile saved');
  } catch (error) {
    console.error('❌ Save error:', error);
  }
};

// Read document
const getUserProfile = async (userId: string) => {
  try {
    const docSnap = await getDoc(doc(db, 'users', userId));
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log('📄 No profile found');
      return null;
    }
  } catch (error) {
    console.error('❌ Read error:', error);
    return null;
  }
};
\`\`\`

---

## 🛠️ Troubleshooting

**Common Issues:**

1. **"No Firebase App" Error**
   - Make sure Firebase is initialized before importing auth/db
   - Check your environment variables are properly set

2. **Persistence Not Working**
   - Verify AsyncStorage is properly installed
   - Check Metro bundler is recognizing AsyncStorage

3. **Environment Variables Not Loading**
   - Restart your Expo development server
   - Make sure variables start with \`EXPO_PUBLIC_\`
   - Verify \`.env\` file is in project root

4. **Authentication Errors**
   - Enable your desired sign-in methods in Firebase Console
   - Check network connectivity
   - Verify API keys are correct

---

## 📚 Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Expo AsyncStorage](https://docs.expo.dev/versions/latest/sdk/async-storage/)
- [Firebase Auth Methods](https://firebase.google.com/docs/auth/web/start)
- [Firestore Guides](https://firebase.google.com/docs/firestore)`,
        configuration: `# Firebase Project Configuration
# Get these values from Firebase Console > Project Settings > General > Your apps

# 🔑 API Configuration
EXPO_PUBLIC_apiKey=your-web-api-key-here
EXPO_PUBLIC_authDomain=your-project-id.firebaseapp.com
EXPO_PUBLIC_projectId=your-project-id

# 📦 Storage & Messaging
EXPO_PUBLIC_storageBucket=your-project-id.appspot.com
EXPO_PUBLIC_messagingSenderId=your-sender-id-number
EXPO_PUBLIC_appId=1:sender-id:web:app-id

# 📊 Analytics (Optional)
EXPO_PUBLIC_measurementId=G-MEASUREMENT-ID

# 🌍 Environment Settings
NODE_ENV=development

# 🔧 App Configuration
EXPO_PUBLIC_APP_NAME=Your App Name
EXPO_PUBLIC_APP_VERSION=1.0.0`
      },
    ],
  }),
});
