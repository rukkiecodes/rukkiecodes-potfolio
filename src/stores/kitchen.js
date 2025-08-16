import { defineStore } from "pinia";

export const useKitchenStore = defineStore("kitchen", {
  state: () => ({
    kitchenList: [
      {
        id: 1,
        height: 250,
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

      // Add this to your kitchenList array
      {
        id: 2,
        height: 250,
        name: "Expo Push Notifications with React Context",
        description: "Complete push notification system for Expo apps with React Context, Firebase integration, and automatic token management. Handles foreground/background notifications and navigation routing.",
        installation: `# Install required Expo notification packages
npx expo install expo-notifications expo-device expo-constants

# Install Firebase for token storage (if not already installed)
npm install firebase @react-native-async-storage/async-storage

# Install development client (recommended for testing)
npx expo install expo-dev-client

# Test on physical device (simulators don't support push notifications)
npx expo run:android
npx expo run:ios`,
        code: `// context/notification.tsx
import React, { createContext, useState, useEffect, useRef, useContext, ReactNode } from 'react';
import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync } from '@/libraries/registerForPushNotificationAsync';
import { router } from 'expo-router';

// Configure notification behavior
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

interface NotificationContextProps {
  expoPushToken: string | null;
  notification: Notifications.Notification | null;
  error: Error | null;
  scheduleNotification: (
    to?: string,
    title?: string,
    body?: string,
    data?: any
  ) => Promise<void>;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

export const useNotification = (): NotificationContextProps => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [expoPushToken, setExpoPushToken] = useState<string | null>(null);
  const [notification, setNotification] = useState<Notifications.Notification | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const notificationListener = useRef<Notifications.Subscription | null>(null);
  const responseListener = useRef<Notifications.Subscription | null>(null);

  // Handle notification taps (background -> foreground)
  useEffect(() => {
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      const data = response?.notification?.request?.content?.data;

      // Navigate based on notification data
      if (data?.type === 'call' && data?.route) {
        router.push({
          pathname: data.route,
          params: {
            chatId: data.chatId,
            callType: data.callType,
            caller: JSON.stringify(data.caller),
          }
        });
      }
    });

    return () => {
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  // Initialize notifications and handle foreground notifications
  useEffect(() => {
    let isMounted = true;

    const initializeNotifications = async () => {
      try {
        const token = await registerForPushNotificationsAsync();
        if (isMounted) {
          setExpoPushToken(token || null);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err);
        }
      }

      // Handle notifications received while app is in foreground
      notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
        const data = notification.request.content.data;
        setNotification(notification);

        // Auto-navigate for certain notification types
        if (data?.type === 'call' && data?.route) {
          router.push({
            pathname: data.route,
            params: {
              chatId: data.chatId,
              callType: data.callType,
              caller: JSON.stringify(data.caller),
            }
          });
        }
      });
    };

    initializeNotifications();

    return () => {
      isMounted = false;
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current);
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  // Send push notification via Expo's API
  const scheduleNotification = async (
    token: string = expoPushToken || '',
    title: string = '',
    body: string = '',
    data: any = null
  ) => {
    if (!token) {
      console.warn('No push token available');
      return;
    }

    const message = {
      to: token,
      sound: 'notification',
      title,
      body,
      data: { ...data, meta: { source: 'app', timestamp: Date.now() } }
    };

    try {
      const response = await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });

      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }

      console.log('✅ Notification sent successfully');
    } catch (error) {
      console.error('❌ Failed to send notification:', error);
      throw error;
    }
  };

  return (
    <NotificationContext.Provider
      value={{
        expoPushToken,
        notification,
        error,
        scheduleNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};`,
        usage: `// How to use in your components
import { useNotification } from '@/context/notification';

const MessageScreen = ({ chatId }: { chatId: string }) => {
  const { scheduleNotification, expoPushToken } = useNotification();

  const sendCallNotification = async (userData: any, callType: 'video' | 'voice') => {
    try {
      await scheduleNotification(
        userData?.expoPushNotificationToken, // Recipient's token
        '📞 Incoming Call',
        \`You have a \${callType} call from Dr. Smith\`,
        {
          chatId,
          type: 'call',
          callType,
          route: '/call-screen',
          caller: {
            id: 'doctor123',
            name: 'Dr. Smith',
            avatar: 'https://example.com/avatar.jpg'
          }
        }
      );

      console.log('Call notification sent!');
    } catch (error) {
      console.error('Failed to send notification:', error);
    }
  };

  const sendMessageNotification = async (recipientToken: string, message: string) => {
    await scheduleNotification(
      recipientToken,
      '💬 New Message',
      message,
      {
        chatId,
        type: 'message',
        route: '/chat',
        timestamp: Date.now()
      }
    );
  };

  return (
    <View>
      <Text>Push Token: {expoPushToken}</Text>
      <Button
        title="Send Test Call"
        onPress={() => sendCallNotification(userData, 'video')}
      />
    </View>
  );
};

// Wrap your app in _layout.tsx
export default function RootLayout() {
  return (
    <NotificationProvider>
      <ThemeProvider>
        <Slot />
      </ThemeProvider>
    </NotificationProvider>
  );
}`,
        documentation: `# 📱 Expo Push Notifications with React Context

A complete push notification system for Expo React Native apps featuring React Context state management, Firebase token storage, automatic navigation routing, and support for foreground/background notifications.

---

## ✨ What You Get

- 🔔 **Push Notification Context** - Global notification state management
- 📱 **Device Registration** - Automatic push token generation and storage
- 🚀 **Auto Navigation** - Route users based on notification data
- 🔄 **Background Handling** - Works when app is backgrounded or closed
- 💾 **Firebase Integration** - Store tokens in Firestore for easy retrieval
- 🎯 **TypeScript Ready** - Full type safety and IntelliSense
- ⚡ **Real-time Updates** - Instant notification delivery

---

## 🧾 Installation & Setup

\`\`\`bash
# Install Expo notification packages
npx expo install expo-notifications expo-device expo-constants

# Install dependencies for token storage
npm install firebase @react-native-async-storage/async-storage

# Install development client (recommended for testing)
npx expo install expo-dev-client
\`\`\`

---

## 📋 Prerequisites

1. **EAS Project Setup**
   - Configure your \`app.config.js\` with EAS project ID
   - Push notifications require EAS Build or Expo Go on physical device

2. **Firebase Project** (for token storage)
   - Setup Firestore database
   - Configure authentication (optional but recommended)

---

## ⚙️ Configuration

### App Config (app.config.js)
\`\`\`javascript
export default {
  expo: {
    name: "Your App",
    slug: "your-app",
    extra: {
      eas: {
        projectId: "your-eas-project-id" // Required for push tokens
      }
    },
    plugins: [
      [
        "expo-notifications",
        {
          icon: "./assets/notification-icon.png", // Optional
          color: "#ffffff", // Optional
          sounds: ["./assets/notification-sound.wav"] // Optional
        }
      ]
    ]
  }
};
\`\`\`

### Registration Helper (libraries/registerForPushNotificationAsync.ts)
\`\`\`typescript
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import { Platform, Alert } from 'react-native';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '@/utils/firebase';

export async function registerForPushNotificationsAsync(): Promise<string | undefined> {
  let token: string | undefined;

  // Configure Android notification channel
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  // Check if running on physical device
  if (!Device.isDevice) {
    Alert.alert('Error', 'Push notifications require a physical device');
    return;
  }

  try {
    // Request permissions
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      Alert.alert('Error', 'Push notification permission denied');
      return;
    }

    // Get Expo project ID
    const projectId = Constants?.expoConfig?.extra?.eas?.projectId ??
                     Constants?.easConfig?.projectId;

    if (!projectId) {
      throw new Error('Missing Expo project ID');
    }

    // Generate push token
    token = (await Notifications.getExpoPushTokenAsync({ projectId })).data;

    // Save token to Firebase (optional)
    const userId = auth.currentUser?.uid;
    if (userId && token) {
      await updateDoc(doc(db, 'users', userId), {
        expoPushNotificationToken: token,
        tokenUpdatedAt: new Date()
      });
    }

    return token;
  } catch (error) {
    console.error('Push notification registration failed:', error);
    throw error;
  }
}
\`\`\`

---

## 🚀 Usage Examples

### Basic Notification
\`\`\`typescript
const { scheduleNotification } = useNotification();

// Simple text notification
await scheduleNotification(
  userToken,
  'Hello!',
  'This is a test notification',
  { type: 'test' }
);
\`\`\`

### Call Notification with Auto-Navigation
\`\`\`typescript
const sendCallNotification = async (recipientToken: string) => {
  await scheduleNotification(
    recipientToken,
    '📞 Incoming Video Call',
    'Dr. Smith is calling you',
    {
      type: 'call',
      callType: 'video',
      route: '/call-screen',
      chatId: 'chat_123',
      caller: {
        id: 'doctor_456',
        name: 'Dr. Smith',
        specialty: 'Cardiology'
      }
    }
  );
};
\`\`\`

### Message Notification
\`\`\`typescript
const sendMessageNotification = async (recipientToken: string, message: string) => {
  await scheduleNotification(
    recipientToken,
    '💬 New Message',
    message.substring(0, 50) + '...',
    {
      type: 'message',
      route: '/chat',
      chatId: 'chat_123',
      senderId: 'user_789'
    }
  );
};
\`\`\`

---

## 🎯 Navigation Routing

The context automatically handles navigation based on notification data:

\`\`\`typescript
// When user taps notification, automatically navigates to:
router.push({
  pathname: data.route, // '/call-screen', '/chat', etc.
  params: {
    chatId: data.chatId,
    callType: data.callType,
    caller: JSON.stringify(data.caller)
  }
});
\`\`\`

---

## 🛠️ Troubleshooting

**Common Issues:**

1. **"Must use physical device" Error**
   - Push notifications don't work in iOS Simulator
   - Use Expo Go on physical device or create development build

2. **No Push Token Generated**
   - Check EAS project ID in app config
   - Verify permissions are granted
   - Ensure running on physical device

3. **Notifications Not Received**
   - Check token is valid and not expired
   - Verify Expo push service status
   - Test with Expo Push Tool: https://expo.io/notifications

4. **Firebase Integration Issues**
   - Ensure user is authenticated before saving token
   - Check Firestore security rules allow token updates
   - Verify Firebase project configuration

---

## 🧪 Testing Push Notifications

### Using Expo Push Tool
1. Go to https://expo.io/notifications
2. Enter your push token
3. Add title, message, and JSON data
4. Send test notification

### Programmatic Testing
\`\`\`typescript
// Test component
const TestNotifications = () => {
  const { expoPushToken, scheduleNotification } = useNotification();

  const sendTestNotification = async () => {
    if (expoPushToken) {
      await scheduleNotification(
        expoPushToken,
        '🧪 Test Notification',
        'This is a test from your app!',
        { type: 'test', timestamp: Date.now() }
      );
    }
  };

  return (
    <Button title="Send Test" onPress={sendTestNotification} />
  );
};
\`\`\`

---

## 📚 Additional Resources

- [Expo Notifications Documentation](https://docs.expo.dev/versions/latest/sdk/notifications/)
- [Push Notification Setup Guide](https://docs.expo.dev/push-notifications/overview/)
- [Expo Push Tool](https://expo.io/notifications)
- [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging)
- [EAS Build Setup](https://docs.expo.dev/build/introduction/)`,
        configuration: `# Environment Configuration for Push Notifications

# Expo EAS Configuration (required)
EXPO_PUBLIC_EAS_PROJECT_ID=your-eas-project-id

# Firebase Configuration (for token storage)
EXPO_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your-firebase-project-id

# App Configuration
EXPO_PUBLIC_APP_NAME=Your App Name
EXPO_PUBLIC_NOTIFICATION_ICON=./assets/notification-icon.png

# Development Settings
EXPO_PUBLIC_ENABLE_NOTIFICATION_LOGS=true
EXPO_PUBLIC_AUTO_NAVIGATE_ON_NOTIFICATION=true

# Production Settings (optional)
EXPO_PUBLIC_NOTIFICATION_SOUND=default
EXPO_PUBLIC_VIBRATION_PATTERN=[0,250,250,250]`
      },

      // Add this as item #4 in your kitchenList array
      {
        id: 3,
        height: 50,
        name: "Simple Blob Converter for File Uploads",
        description: "A simple function that converts mobile files (photos, videos, documents) into blobs that can be uploaded to cloud storage. Takes a file path and returns upload-ready blob data.",
        installation: `# No special packages needed - works with vanilla React Native/Expo
# Just save the function and use it`,
        code: `// utils/blobConverter.js
/**
 * Simple Blob Converter
 * Converts mobile file paths to uploadable blobs
 *
 * @param file - Local file path (file://path/to/file.jpg)
 * @returns Promise<Blob> - Blob ready for upload
 */
export default async (file) => {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.onload = () => resolve(xhr.response)
    xhr.responseType = 'blob'
    xhr.open('GET', file, true)
    xhr.send(null)
  })
  return blob
}`,
        usage: `// How to use the blob converter
import blobConverter from './utils/blobConverter';

// Basic usage
const uploadPhoto = async () => {
  try {
    // 1. Get photo path (from camera/gallery picker)
    const photoPath = 'file://path/to/your/photo.jpg';

    // 2. Convert to blob
    const photoBlob = await blobConverter(photoPath);

    // 3. Now upload the blob to any service
    console.log('Blob ready for upload!', photoBlob);

    // Upload to your preferred service (Firebase, AWS, etc.)
    // const uploadResult = await yourUploadService.upload(photoBlob);

  } catch (error) {
    console.log('Conversion failed:', error);
  }
};

// Works with any file type
const convertAnyFile = async (filePath) => {
  const blob = await blobConverter(filePath);
  return blob; // Ready to upload
};

// Example with different file types
const handleDifferentFiles = async () => {
  // Photo
  const photoBlob = await blobConverter('file://path/photo.jpg');

  // Video
  const videoBlob = await blobConverter('file://path/video.mp4');

  // Document
  const docBlob = await blobConverter('file://path/document.pdf');

  // All ready for upload!
};`,
        documentation: `# Simple Blob Converter Guide

## What is a Blob?

A **Blob** is like a container that holds file data in a format that can be uploaded to the internet.

Think of it like this:
- Your phone has a photo → **Blob converter** → Ready to upload

## What This Function Does

1. **Takes a file path** - You give it the location of your file
2. **Reads the file** - Opens and reads the file data
3. **Converts to blob** - Turns it into upload-ready format
4. **Returns the blob** - Gives you back the blob

## How to Use It

### Step 1: Save the function
Create \`utils/blobConverter.js\` and put the function in it.

### Step 2: Use it in your app
\`\`\`javascript
import blobConverter from './utils/blobConverter';

// Convert any file to blob
const filePath = 'file://path/to/your/file.jpg';
const fileBlob = await blobConverter(filePath);

// Now fileBlob is ready to upload anywhere
\`\`\`

### Step 3: Upload the blob
\`\`\`javascript
const uploadFile = async (filePath) => {
  // Convert file to blob first
  const blob = await blobConverter(filePath);

  // Upload the blob (works with any upload service)
  const result = await someUploadService.upload(blob);
};
\`\`\`

## Why Do You Need This?

- Mobile files can't be uploaded directly
- Blob format is what upload services expect
- This converter makes your file upload-ready

## That's It!

Give it a file path → Get back an upload-ready blob. Simple!`,
        configuration: `# No configuration needed
# Just import and use the function

# Works with any file type:
# - Photos: .jpg, .png, .gif
# - Videos: .mp4, .mov, .avi
# - Documents: .pdf, .doc, .txt
# - Any file type your app supports`
      },

      // Add this as item #5 in your kitchenList array
      {
        id: 4,
        height: 100,
        name: "Distance Calculator Between Two Users",
        description: "Calculate the approximate distance between two users using their GPS coordinates. Works with Expo Location to show distance in meters or kilometers with proper formatting.",
        installation: `# Install Expo Location for GPS coordinates
npx expo install expo-location

# No other packages needed - uses built-in Math functions`,
        code: `// utils/distance.ts
/**
 * Calculate distance between two GPS coordinates
 * Uses Haversine formula for accurate Earth distance calculation
 */

/**
 * Get distance between two coordinates in kilometers
 * @param lat1 - First location latitude
 * @param lon1 - First location longitude
 * @param lat2 - Second location latitude
 * @param lon2 - Second location longitude
 * @returns Distance in kilometers
 */
export function getDistanceFromLatLonInKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Radius of Earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(deg2rad(lat1)) *
    Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
}

/**
 * Convert degrees to radians
 * @param deg - Degrees to convert
 * @returns Radians
 */
function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}

/**
 * Format distance with proper units (meters or kilometers)
 * @param lat1 - First location latitude
 * @param lon1 - First location longitude
 * @param lat2 - Second location latitude
 * @param lon2 - Second location longitude
 * @returns Formatted distance string (e.g., "500 m" or "2.5 km")
 */
export function formatDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): string {
  const distanceInKm = getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2);
  if (distanceInKm < 1) {
    const meters = distanceInKm * 1000;
    return \`\${meters.toFixed(0)} m\`;
  }
  return \`\${distanceInKm.toFixed(2)} km\`;
}`,
        usage: `// How to use distance calculator
import * as Location from 'expo-location';
import { getDistanceFromLatLonInKm, formatDistance } from './utils/distance';

// Basic distance calculation
const calculateDistance = () => {
  // Example coordinates (Lagos, Nigeria)
  const user1Lat = 6.5244;
  const user1Lon = 3.3792;

  // Example coordinates (Abuja, Nigeria)
  const user2Lat = 9.0579;
  const user2Lon = 7.4951;

  // Get distance in kilometers
  const distanceKm = getDistanceFromLatLonInKm(user1Lat, user1Lon, user2Lat, user2Lon);
  console.log('Distance:', distanceKm, 'km');

  // Get formatted distance string
  const formattedDistance = formatDistance(user1Lat, user1Lon, user2Lat, user2Lon);
  console.log('Formatted:', formattedDistance); // "482.84 km"
};

// Real example with Expo Location
const findNearbyUsers = async () => {
  try {
    // Get current user location
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Location permission denied');
      return;
    }

    const currentLocation = await Location.getCurrentPositionAsync({});
    const { latitude: myLat, longitude: myLon } = currentLocation.coords;

    // Example: Check distance to other users
    const otherUsers = [
      { id: 1, name: 'John', lat: 6.5244, lon: 3.3792 },
      { id: 2, name: 'Mary', lat: 6.4474, lon: 3.3903 },
      { id: 3, name: 'David', lat: 6.6018, lon: 3.3515 }
    ];

    // Calculate distance to each user
    otherUsers.forEach(user => {
      const distance = formatDistance(myLat, myLon, user.lat, user.lon);
      console.log(\`\${user.name} is \${distance} away\`);
    });

  } catch (error) {
    console.log('Location error:', error);
  }
};

// Filter users within certain distance
const getNearbyUsers = (myLat, myLon, allUsers, maxDistanceKm = 5) => {
  return allUsers.filter(user => {
    const distance = getDistanceFromLatLonInKm(myLat, myLon, user.lat, user.lon);
    return distance <= maxDistanceKm;
  });
};

// Usage in a React component
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

const NearbyUsersScreen = () => {
  const [nearbyUsers, setNearbyUsers] = useState([]);
  const [myLocation, setMyLocation] = useState(null);

  useEffect(() => {
    getCurrentLocationAndFindUsers();
  }, []);

  const getCurrentLocationAndFindUsers = async () => {
    const location = await Location.getCurrentPositionAsync({});
    setMyLocation(location.coords);

    // Your users from database
    const allUsers = [
      { id: 1, name: 'John', lat: 6.5244, lon: 3.3792 },
      { id: 2, name: 'Mary', lat: 6.4474, lon: 3.3903 }
    ];

    // Find users within 10km
    const nearby = getNearbyUsers(
      location.coords.latitude,
      location.coords.longitude,
      allUsers,
      10
    );

    setNearbyUsers(nearby);
  };

  const renderUser = ({ item }) => {
    const distance = formatDistance(
      myLocation.latitude,
      myLocation.longitude,
      item.lat,
      item.lon
    );

    return (
      <View style={{ padding: 10 }}>
        <Text>{item.name}</Text>
        <Text>{distance} away</Text>
      </View>
    );
  };

  return (
    <View>
      <Text>Nearby Users:</Text>
      <FlatList
        data={nearbyUsers}
        renderItem={renderUser}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};`,
        documentation: `# Distance Calculator Guide

## What It Does

Calculates the real-world distance between two GPS coordinates using the **Haversine formula**. Perfect for finding nearby users, delivery distances, or location-based features.

## The Math Behind It

- **Haversine formula** - Calculates distances on Earth's curved surface
- **Earth radius** - Uses 6371 km (standard Earth radius)
- **Accurate results** - Accounts for Earth's curvature, not straight-line distance

## Functions Explained

### \`getDistanceFromLatLonInKm()\`
- Takes 4 numbers: lat1, lon1, lat2, lon2
- Returns distance in kilometers (decimal number)
- Example: \`25.847\` km

### \`formatDistance()\`
- Same inputs as above
- Returns formatted string with units
- Shows meters if under 1km: \`"750 m"\`
- Shows kilometers if 1km+: \`"2.5 km"\`

## How to Use

### Step 1: Get user locations
\`\`\`javascript
// Get current user location
const location = await Location.getCurrentPositionAsync({});
const myLat = location.coords.latitude;
const myLon = location.coords.longitude;
\`\`\`

### Step 2: Calculate distance
\`\`\`javascript
import { formatDistance } from './utils/distance';

// Distance to another user
const otherUserLat = 6.5244;
const otherUserLon = 3.3792;

const distance = formatDistance(myLat, myLon, otherUserLat, otherUserLon);
console.log(\`User is \${distance} away\`); // "2.5 km away"
\`\`\`

### Step 3: Find nearby users
\`\`\`javascript
// Filter users within 5km
const nearbyUsers = allUsers.filter(user => {
  const distanceKm = getDistanceFromLatLonInKm(myLat, myLon, user.lat, user.lon);
  return distanceKm <= 5; // Within 5km
});
\`\`\`

## Common Use Cases

- **Dating apps** - Show users within X km
- **Delivery apps** - Calculate delivery distance
- **Social apps** - Find nearby friends
- **Marketplace** - Show local sellers
- **Events** - Find events near you

## Tips

- Always request location permissions first
- Handle location errors gracefully
- Consider caching locations to avoid too many GPS calls
- Add loading states while getting location

## That's It!

Give it two GPS coordinates → Get back the real distance between them!`,
        configuration: `# Location permissions needed in app.json
{
  "expo": {
    "plugins": [
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "This app needs location to find nearby users."
        }
      ]
    ]
  }
}

# Usage settings
MAX_NEARBY_DISTANCE_KM=10
LOCATION_ACCURACY_LEVEL=6
ENABLE_BACKGROUND_LOCATION=false

# Distance display preferences
SHOW_METERS_UNDER_1KM=true
DECIMAL_PLACES_KM=2
DECIMAL_PLACES_METERS=0`
      },

      {
        id: 5,
        height: 70,
        name: "Responsive Size Normalizer",
        description: "Simple function to make fonts, margins, and UI elements scale properly across all device screen sizes. Fixes React Native responsiveness issues.",
        installation: `# No installation needed - uses built-in React Native
import { Dimensions, PixelRatio } from 'react-native';`,
        code: `// utils/responsive.js
import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const BASE_WIDTH = 375; // iPhone 6/7/8 width as base

export const normalizeSize = (size: number) =>
  Math.round(PixelRatio.roundToNearestPixel((SCREEN_WIDTH / BASE_WIDTH) * size));`,
        usage: `// How to use normalizeSize
import { normalizeSize } from './utils/responsive';

// In your styles
const styles = StyleSheet.create({
  title: {
    fontSize: normalizeSize(24), // Scales from 24px base
    marginBottom: normalizeSize(16),
  },
  button: {
    height: normalizeSize(50),
    paddingHorizontal: normalizeSize(20),
    borderRadius: normalizeSize(8),
  },
  avatar: {
    width: normalizeSize(60),
    height: normalizeSize(60),
  }
});

// Direct usage
<Text style={{ fontSize: normalizeSize(18) }}>Hello</Text>
<View style={{ padding: normalizeSize(12) }}>Content</View>
<Image style={{ width: normalizeSize(100), height: normalizeSize(100) }} />`,
        documentation: `# Responsive Size Normalizer

## What It Does
Makes your app look the same on all devices by scaling sizes based on screen width.

## How It Works
- **Base width**: 375px (iPhone 6/7/8)
- **Scaling**: Bigger screens = bigger sizes, smaller screens = smaller sizes
- **Pixel perfect**: Rounds to nearest pixel for crisp display

## Before vs After
**Without normalizeSize:**
- Small phones: Text too big
- Large phones: Text too small
- Tablets: Everything tiny

**With normalizeSize:**
- All devices: Perfect proportions

## Usage
Replace any size number with \`normalizeSize(number)\`:
- \`fontSize: 16\` → \`fontSize: normalizeSize(16)\`
- \`padding: 20\` → \`padding: normalizeSize(20)\`
- \`width: 100\` → \`width: normalizeSize(100)\`

That's it! Your app now works on all devices.`,
        configuration: `# Base width options (choose one):
const BASE_WIDTH = 375; // iPhone 6/7/8 (recommended)
const BASE_WIDTH = 390; // iPhone 12/13/14
const BASE_WIDTH = 414; // iPhone Plus models
const BASE_WIDTH = 360; // Most Android phones`
      },

      {
        id: 6,
        height: 70,
        name: "Font Size Normalizer",
        description: "Smart function to make text sizes perfect on all devices. Uses both width and height to scale fonts consistently across phones and tablets.",
        installation: `# No installation needed - uses built-in React Native
import { Dimensions, PixelRatio } from "react-native";`,
        code: `// utils/fontNormalizer.js
import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const BASE_WIDTH = 375;  // iPhone 6/7/8 width
const BASE_HEIGHT = 812; // iPhone X height

export const normalizeFontSize = (size: number) => {
  const scaleWidth = SCREEN_WIDTH / BASE_WIDTH;
  const scaleHeight = SCREEN_HEIGHT / BASE_HEIGHT;
  // Use the smaller scale for consistent results
  const scale = Math.min(scaleWidth, scaleHeight);
  const newSize = (size * scale) / 1.5;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};`,
        usage: `// How to use normalizeFontSize
import { normalizeFontSize } from './utils/fontNormalizer';

// In your styles
const styles = StyleSheet.create({
  title: {
    fontSize: normalizeFontSize(28),
  },
  subtitle: {
    fontSize: normalizeFontSize(18),
  },
  body: {
    fontSize: normalizeFontSize(16),
  },
  caption: {
    fontSize: normalizeFontSize(12),
  }
});

// Direct usage
<Text style={{ fontSize: normalizeFontSize(20) }}>Hello World</Text>
<Text style={{ fontSize: normalizeFontSize(14) }}>Description text</Text>

// Common font sizes
const FONT_SIZES = {
  small: normalizeFontSize(12),
  medium: normalizeFontSize(16),
  large: normalizeFontSize(20),
  xlarge: normalizeFontSize(24),
  title: normalizeFontSize(28),
};

// Use predefined sizes
<Text style={{ fontSize: FONT_SIZES.title }}>My Title</Text>`,
        documentation: `# Font Size Normalizer

## What It Does
Makes text look perfect on all devices - no more tiny text on tablets or huge text on small phones.

## How It's Smart
- **Width + Height**: Considers both screen dimensions
- **Smaller scale**: Uses the smaller scale for consistency
- **Divided by 1.5**: Prevents text from being too big
- **Pixel perfect**: Rounds to crisp pixels

## Why Better Than Regular Normalizer
Regular normalizer only uses width. This uses both width AND height, so text looks good on:
- Small phones (iPhone SE)
- Regular phones (iPhone 6-14)
- Large phones (iPhone Plus)
- Tablets (iPad)

## Quick Setup
Replace \`fontSize: 16\` with \`fontSize: normalizeFontSize(16)\` everywhere.

Done! Perfect text on all devices.`,
        configuration: `# Base device settings:
const BASE_WIDTH = 375;  // iPhone 6/7/8
const BASE_HEIGHT = 812; // iPhone X

# Font scale factor:
const SCALE_FACTOR = 1.5; // Makes fonts smaller (increase for bigger fonts)`
      },

      {
        id: 7,
        height: 150,
        name: "ThemedText Component",
        description: "Custom Text component with built-in theme support, Poppins fonts, and responsive sizing. Handles light/dark modes automatically and includes preset text styles.",
        installation: `# Install required packages
npx expo install expo-font
npm install @expo/vector-icons

# Download Poppins fonts from Google Fonts or use the provided link
# Place fonts in: assets/fonts/Poppins/`,
        code: `// components/ThemedText.tsx
import { Text, type TextProps, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useFonts } from 'expo-font';
import { normalizeFontSize } from '@/libraries/normalizeFontSize';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'caption' | 'body';
  font?: 'Poppins-Black' | 'Poppins-Bold' | 'Poppins-Medium' | 'Poppins-Regular' | 'Poppins-SemiBold' | 'Poppins-Light';
  opacity?: number;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  font,
  opacity = 1,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const [loaded] = useFonts({
    'Poppins-Black': require('@/assets/fonts/Poppins/Poppins-Black.ttf'),
    'Poppins-Bold': require('@/assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-Medium': require('@/assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-Regular': require('@/assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('@/assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'Poppins-Light': require('@/assets/fonts/Poppins/Poppins-Light.ttf'),
  });

  if (!loaded) return null;

  return (
    <Text
      allowFontScaling={false}
      style={[
        { color },
        styles[type],
        style,
        { fontFamily: font || 'Poppins-Regular', opacity }
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: normalizeFontSize(16),
  },
  defaultSemiBold: {
    fontSize: normalizeFontSize(16),
  },
  title: {
    fontSize: normalizeFontSize(32),
  },
  subtitle: {
    fontSize: normalizeFontSize(20),
  },
  link: {
    lineHeight: normalizeFontSize(30),
    fontSize: normalizeFontSize(16),
  },
  body: {
    fontSize: normalizeFontSize(14),
  },
  caption: {
    fontSize: normalizeFontSize(12),
  },
});`,
        usage: `// Basic usage
import { ThemedText } from '@/components/ThemedText';

// Different text types
<ThemedText type="title">Main Title</ThemedText>
<ThemedText type="subtitle">Subtitle Text</ThemedText>
<ThemedText type="body">Body content</ThemedText>
<ThemedText type="caption">Small caption</ThemedText>

// Custom fonts
<ThemedText font="Poppins-Bold">Bold Text</ThemedText>
<ThemedText font="Poppins-Light">Light Text</ThemedText>

// Theme colors
<ThemedText lightColor="#000" darkColor="#fff">Auto theme</ThemedText>

// With opacity
<ThemedText opacity={0.7}>Faded text</ThemedText>

// Combined usage
<ThemedText
  type="title"
  font="Poppins-Bold"
  lightColor="#333"
  darkColor="#fff"
>
  My App Title
</ThemedText>`,
        documentation: `# ThemedText Component

## What It Does
Smart Text component that automatically handles:
- **Theme colors** (light/dark mode)
- **Poppins fonts** (professional look)
- **Responsive sizing** (works on all devices)
- **Preset styles** (title, body, caption, etc.)

## Features
- Auto theme switching
- Custom font weights
- Responsive text sizes
- Prevents font scaling issues

## Text Types
- \`title\` - Large headers (32px)
- \`subtitle\` - Section headers (20px)
- \`default\` - Normal text (16px)
- \`body\` - Content text (14px)
- \`caption\` - Small text (12px)

## Font Weights
- \`Poppins-Light\` - Thin text
- \`Poppins-Regular\` - Normal (default)
- \`Poppins-Medium\` - Medium weight
- \`Poppins-SemiBold\` - Semi bold
- \`Poppins-Bold\` - Bold text
- \`Poppins-Black\` - Extra bold

## Download Fonts
Get Poppins fonts here: https://drive.google.com/drive/folders/1pwQGwgbP_Pdq0aXGLBy_F2QQ8yaaIt_H

Place in: \`assets/fonts/Poppins/\`

Replace all \`<Text>\` with \`<ThemedText>\` for consistent styling!`,
        configuration: `# Font folder structure:
assets/
  fonts/
    Poppins/
      Poppins-Black.ttf
      Poppins-Bold.ttf
      Poppins-Medium.ttf
      Poppins-Regular.ttf
      Poppins-SemiBold.ttf
      Poppins-Light.ttf

# Theme colors (in your theme file):
text: {
  light: '#000000',
  dark: '#FFFFFF'
}`
      },

      // Add this as item #9 in your kitchenList array
      {
        id: 8,
        height: 70,
        name: "CustomImage Component",
        description: "Responsive Image component that keeps image sizes consistent across all devices. Uses screen width percentage for automatic scaling with smooth transitions and placeholders.",
        installation: `# Install expo-image for better performance
npx expo install expo-image`,
        code: `// components/CustomImage.js
import { Dimensions, ImageStyle, StyleProp } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';

const { width: screenWidth } = Dimensions.get('window');

interface ImageProps {
  source?: string;
  placeholder?: string;
  contentFit?: string | any;
  placeholderContentFit?: string | any;
  transition?: number;
  size?: number;
  style?: StyleProp<ImageStyle>;
}

export default function CustomImage({
  source,
  placeholder,
  contentFit = 'cover',
  placeholderContentFit = 'cover',
  transition = 300,
  size = 1,
  style,
  ...res
}: ImageProps) {
  const imageSize = screenWidth * size;

  return (
    <Image
      source={source}
      placeholder={placeholder}
      contentFit={contentFit}
      placeholderContentFit={placeholderContentFit}
      transition={transition || 500}
      style={[
        { width: imageSize, height: imageSize },
        style
      ]}
      {...res}
    />
  );
}`,
        usage: `// How to use CustomImage
import CustomImage from '@/components/CustomImage';

// Full screen width image
<CustomImage source="https://example.com/image.jpg" />

// Half screen width
<CustomImage source="https://example.com/image.jpg" size={0.5} />

// Quarter screen width
<CustomImage source="https://example.com/image.jpg" size={0.25} />

// With placeholder
<CustomImage
  source="https://example.com/image.jpg"
  placeholder="https://via.placeholder.com/300"
/>

// Different content fit
<CustomImage
  source="https://example.com/image.jpg"
  contentFit="contain"
  size={0.8}
/>

// Custom styling
<CustomImage
  source="https://example.com/image.jpg"
  size={0.6}
  style={{ borderRadius: 20, marginBottom: 10 }}
/>

// Profile pictures
<CustomImage
  source={user.avatar}
  size={0.3}
  style={{ borderRadius: 999 }}
/>

// Image grid
<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
  <CustomImage source="image1.jpg" size={0.48} />
  <CustomImage source="image2.jpg" size={0.48} />
  <CustomImage source="image3.jpg" size={0.48} />
  <CustomImage source="image4.jpg" size={0.48} />
</View>`,
        documentation: `# CustomImage Component

## What It Does
Makes images scale perfectly on all devices using screen width percentage instead of fixed pixels.

## Key Features
- **Responsive sizing** - Uses screen width percentage
- **Consistent squares** - Width and height are equal
- **Smooth transitions** - Fade-in effect when loading
- **Placeholder support** - Shows placeholder while loading
- **Expo Image** - Better performance than regular Image

## Size Guide
- \`size={1}\` - Full screen width
- \`size={0.5}\` - Half screen width
- \`size={0.3}\` - 30% of screen width
- \`size={0.25}\` - Quarter screen width

## Content Fit Options
- \`cover\` - Fill the space (default)
- \`contain\` - Fit inside without cropping
- \`fill\` - Stretch to fill
- \`scale-down\` - Scale down if needed

## Perfect For
- Profile pictures
- Product images
- Image galleries
- Social media posts
- Consistent UI layouts

Replace regular \`<Image>\` with \`<CustomImage>\` for automatic responsiveness!`,
        configuration: `# Common size presets you can define:
const IMAGE_SIZES = {
  thumbnail: 0.15,    // Small thumbnails
  avatar: 0.25,       // Profile pictures
  card: 0.4,          // Card images
  hero: 0.8,          // Hero images
  full: 1,            // Full width
};

# Usage with presets:
<CustomImage size={IMAGE_SIZES.avatar} />`
      },

      // Add this as item #10 in your kitchenList array
      {
        id: 9,
        height: 100,
        name: "LoadingScreen Component",
        description: "Beautiful animated loading screen with spinning circles. Uses React Native Reanimated for smooth performance and responsive sizing.",
        installation: `# Install React Native Reanimated
npx expo install react-native-reanimated`,
        code: `// components/LoadingScreen.js
import { StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { ThemedView } from './ThemedView';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { normalizeSize } from '@/libraries/normalize';

const CIRCLES = 3;

export default function LoadingScreen({ text }) {
  const rotations = Array.from({ length: CIRCLES }, () => useSharedValue(0));

  useEffect(() => {
    rotations.forEach((rotation, index) => {
      rotation.value = withRepeat(
        withTiming(360, {
          duration: 3000 + index * 300,
          easing: Easing.linear,
        }),
        -1,
        false
      );
    });
  }, []);

  return (
    <ThemedView style={styles.container}>
      {rotations.map((rotation, index) => {
        const size = normalizeSize(50) + index * normalizeSize(20);
        const clockwise = index % 2 === 0;
        const animatedStyle = useAnimatedStyle(() => {
          return {
            transform: [
              {
                rotate: \`\${clockwise ? rotation.value : -rotation.value}deg\`,
              },
            ],
          };
        });
        const opacity = 1 - index * 0.3;
        const strokeType = index % 2 === 0 ? 'dashed' : 'dotted';
        const borderWidth = normalizeSize(1.5) - index * 0.3;

        return (
          <Animated.View
            key={index}
            style={[
              styles.circle,
              animatedStyle,
              {
                width: size,
                height: size,
                borderColor: \`rgba(91, 60, 244, \${opacity})\`,
                borderStyle: strokeType,
                borderWidth,
              },
            ]}
          />
        );
      })}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    position: 'absolute',
    borderRadius: 999,
  },
});`,
        usage: `// Basic usage
import LoadingScreen from '@/components/LoadingScreen';

// Show loading screen
const MyScreen = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen />;
  }

  return <YourMainContent />;
};

// With conditional rendering
{isLoading && <LoadingScreen />}

// In navigation screens
const HomeScreen = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  if (!data) return <LoadingScreen />;

  return <YourContent data={data} />;
};`,
        documentation: `# LoadingScreen Component

## What It Does
Shows a beautiful spinning animation while your app loads data, screens, or performs tasks.

## Features
- **3 spinning circles** - Different sizes and speeds
- **Smooth animation** - Uses Reanimated for 60fps
- **Responsive sizing** - Works on all devices
- **Alternating rotation** - Some spin left, some right
- **Fading opacity** - Outer circles are more transparent
- **Mixed borders** - Dashed and dotted styles

## Animation Details
- **Duration**: 3-4 seconds per rotation
- **Direction**: Alternates clockwise/counterclockwise
- **Easing**: Linear for consistent speed
- **Infinite**: Loops forever until unmounted

## Perfect For
- App startup loading
- Data fetching screens
- Image upload progress
- Screen transitions
- API call waiting

Replace boring loading text with this smooth animated loader!`,
        configuration: `# Customize the loader:
const CIRCLES = 3;           // Number of circles
const BASE_SIZE = 50;        // Smallest circle size
const SIZE_INCREMENT = 20;   // Size difference between circles
const BASE_DURATION = 3000;  // Animation speed (ms)
const COLOR = 'rgba(91, 60, 244, 1)'; // Circle color`
      },

      // Add this as item #11 in your kitchenList array
      {
        id: 10,
        height: 100,
        name: "Authentication Provider",
        description: "Complete authentication context for managing user login state with Firebase Auth, Redux integration, and automatic navigation routing.",
        installation: `# Install required packages
npm install firebase
npx expo install expo-router
npm install @reduxjs/toolkit react-redux`,
        code: `// providers/AuthenticationProvider.js
import { createContext, ReactNode, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { User } from "@/store/types/types";
import { auth, setupAuthStatePersistence } from '@/utils/firebase';
import { router } from "expo-router";
import { signOut as firebaseSignOut } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/slices/userSlice';
import LoadingScreen from '@/components/LoadingScreen';

interface AuthContextType {
    user: User | null;
    signIn: () => void;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextType | any>(null);

export const useAuth = (): AuthContextType | null => {
    return useContext(AuthContext);
};

interface AuthenticationProviderProps {
    children: ReactNode;
}

const AuthenticationProvider = ({ children }: AuthenticationProviderProps) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [authState, setAuthState] = useState(false);

    const initializeAuth = async () => {
        const unsubscribe = setupAuthStatePersistence(firebaseUser => {
            if (firebaseUser) {
                setAuthState(true);
                dispatch(setUser(firebaseUser));
            } else {
                setAuthState(false);
                dispatch(setUser(null));
            }
            setLoading(false);
        });
        return unsubscribe;
    };

    useLayoutEffect(() => {
        initializeAuth();
    }, [dispatch]);

    useEffect(() => {
        if (!loading) {
            if (!authState) router.replace("/(auth)/home");
            else router.replace('/(app)/(tabs)/home');
        }
    }, [loading, authState, auth]);

    if (loading) return <LoadingScreen />;

    const signIn = () => setAuthState(true);

    const signOut = async (): Promise<void> => {
        try {
            await firebaseSignOut(auth);
            setAuthState(false);
            router.replace("/(auth)/home");
        } catch (error) {
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ authState, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthenticationProvider;`,
        usage: `// How to use Authentication Provider
// 1. Wrap your app in the provider
import AuthenticationProvider from '@/providers/AuthenticationProvider';

// In your _layout.tsx or App.tsx
export default function RootLayout() {
  return (
    <Provider store={store}>
      <AuthenticationProvider>
        <Stack />
      </AuthenticationProvider>
    </Provider>
  );
}

// 2. Use auth in any component
import { useAuth } from '@/providers/AuthenticationProvider';

const MyComponent = () => {
  const { authState, signIn, signOut } = useAuth();

  if (!authState) {
    return (
      <Button title="Sign In" onPress={signIn} />
    );
  }

  return (
    <View>
      <Text>Welcome, you're logged in!</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

// 3. Protected screens
const ProtectedScreen = () => {
  const { authState } = useAuth();

  if (!authState) {
    return <Text>Please log in</Text>;
  }

  return <YourProtectedContent />;
};`,
        documentation: `# Authentication Provider

## What It Does
Manages user authentication state across your entire app with automatic navigation and state persistence.

## Features
- **Firebase Auth** - Secure authentication
- **Redux Integration** - Syncs with global state
- **Auto Navigation** - Routes users automatically
- **State Persistence** - Remembers login status
- **Loading Screen** - Shows loader during auth check
- **Context API** - Easy access anywhere in app

## How It Works
1. **Initialization** - Checks if user is already logged in
2. **State Management** - Updates Redux store with user data
3. **Auto Routing** - Navigates to correct screen based on auth state
4. **Persistence** - Maintains login across app restarts

## Navigation Flow
- **Not logged in** → Routes to \`/(auth)/home\`
- **Logged in** → Routes to \`/(app)/(tabs)/home\`
- **Loading** → Shows loading screen

## Methods
- \`signIn()\` - Sets user as authenticated
- \`signOut()\` - Logs out user and redirects
- \`authState\` - Boolean indicating if user is logged in

Wrap your app once, use authentication everywhere!`,
        configuration: `# Required folder structure:
app/
  (auth)/
    home.tsx          # Login/signup screen
  (app)/
    (tabs)/
      home.tsx        # Main app home

# Firebase setup needed:
utils/
  firebase.ts         # Firebase config
store/
  slices/
    userSlice.ts      # Redux user slice`
      }
    ],
  }),
});
