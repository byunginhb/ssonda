// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAI, getGenerativeModel, GoogleAIBackend } from 'firebase/ai';

interface promptDataType {
  style: string;
  title: string;
  description: string;
  maxLength: number;
}

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAHPIeKprscAepyTEgO58uy0JCO0fKkTgE',
  authDomain: 'ssonda-ai.firebaseapp.com',
  projectId: 'ssonda-ai',
  storageBucket: 'ssonda-ai.firebasestorage.app',
  messagingSenderId: '1026185867781',
  appId: '1:1026185867781:web:5a2eb165f943ab518e626c',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize the Gemini Developer API backend service
const fireaseAI = getAI(firebaseApp, { backend: new GoogleAIBackend() });

// Create a `GenerativeModel` instance with a model that supports your use case
const fireaseModel = getGenerativeModel(fireaseAI, { model: 'gemini-2.5-flash' });

async function makeMessage(promptData: promptDataType) {
  const { style, title, description, maxLength } = promptData;

  // Provide a prompt that contains text
  const prompt = `주제: ${title}
  내용: ${description}
  스타일: ${style}
  를 기반으로 문자 메시지를 작성해주세요.
  최대 길이: ${maxLength}자 이하로 작성해주세요.
  `;

  // To generate text output, call generateContent with the text input
  const result = await fireaseModel.generateContent(prompt);

  const response = result.response;
  const text = response.text();
  console.log(text);
  return text;
}

export { fireaseAI, fireaseModel, makeMessage };
