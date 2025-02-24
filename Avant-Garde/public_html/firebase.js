// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { 
    getAuth, 
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDLFDe5tmoRenxHd6TbK2MITk1l1nCR8n4",
    authDomain: "avant-garde-363ab.firebaseapp.com",
    projectId: "avant-garde-363ab",
    storageBucket: "avant-garde-363ab.firebasestorage.app",
    messagingSenderId: "184994003726",
    appId: "1:184994003726:web:767f28dde21e061afe755f",
    measurementId: "G-9JLP9RQ5LW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function initAuth() {
    const authButton = document.getElementById('authButton');
    const userGreeting = document.getElementById('userGreeting');

    onAuthStateChanged(auth, (user) => {
        if (user) {
            userGreeting.textContent = user.email;
            authButton.textContent = 'Sign Out';
            authButton.onclick = () => {
                signOut(auth).then(() => {
                    window.location.href = 'index.html';
                });
            };
        } else {
            userGreeting.textContent = 'Guest';
            authButton.textContent = 'Sign In';
            authButton.onclick = () => {
                window.location.href = 'signin.html';
            };
        }
    });
}

export { 
    app, 
    auth, 
    db, 
    initAuth,
    onAuthStateChanged 
};