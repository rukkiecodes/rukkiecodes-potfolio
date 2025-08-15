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

      // Add this to your kitchenList array
      {
        id: 2,
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
      }
    ],
  }),
});
