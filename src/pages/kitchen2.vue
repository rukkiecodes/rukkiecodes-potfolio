<template>
  <div class="demo">
    <h2>Firebase Setup (Bash)</h2>
    <CodeBlock
      lang="shell"
      :code="firebase.installation"
      theme="vs-dark"
      height="90px"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CodeBlock from '@/components/CodeBlock.vue';

const editableCode = ref(`console.log('Hello, World!');
const greeting = 'Edit me!';`);

const firebase = {
  installation: `// Install Firebase and dependencies
npm install firebase /*Or*/ yarn add firebase
npx npm install @react-native-async-storage/async-storage
`,

  config: `import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);`,

  packageJson: `{
  "name": "my-firebase-app",
  "version": "1.0.0",
  "dependencies": {
    "firebase": "^10.7.1",
    "@react-native-async-storage/async-storage": "^1.21.0"
  },
  "scripts": {
    "start": "expo start",
    "build": "expo build"
  }
}`
};
</script>
