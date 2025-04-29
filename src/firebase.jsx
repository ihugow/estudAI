import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: "AIzaSyBdaSjxaa1r6HAeVgbCgqhrRg7IwVAq0-k",
  authDomain: "estudai-hugo-project.firebaseapp.com",
  projectId: "estudai-hugo-project",
  storageBucket: "estudai-hugo-project.firebasestorage.app",
  messagingSenderId: "83745215097",
  appId: "1:83745215097:web:874f73e63d938b6279baa8",
};

const firebaseApp = initializeApp(firebaseConfig);

const appCheck = initializeAppCheck(firebaseApp, {
  provider: new ReCaptchaV3Provider("6Le4yicrAAAAAAt9ax-5a00wzhH7ENHAwPOd7Ypi"),
  isTokenAutoRefreshEnabled: true,
});

export { firebaseApp, appCheck };



