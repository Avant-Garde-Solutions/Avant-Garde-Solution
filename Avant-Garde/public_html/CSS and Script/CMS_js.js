  const firebaseConfig = {
            apiKey: "YOUR_API_KEY",
            authDomain: "YOUR_AUTH_DOMAIN",
            databaseURL: "YOUR_DATABASE_URL",
            projectId: "YOUR_PROJECT_ID",
            storageBucket: "YOUR_STORAGE_BUCKET",
            messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
            appId: "YOUR_APP_ID"
        };
        
        firebase.initializeApp(firebaseConfig);
        const database = firebase.database();

        function updateCounts() {
            database.ref("stats").on("value", (snapshot) => {
                const data = snapshot.val();
                document.getElementById("userCount").innerText = data.users || 0;
                document.getElementById("articleCount").innerText = data.articles || 0;
            });
        }
        
        function saveContent() {
            let content = document.getElementById("contentEditor").value;
            if (content.trim() === "") {
                alert("Content cannot be empty!");
                return;
            }
            database.ref("cms").push({ content: content, timestamp: Date.now() });
            alert("Content saved successfully!");
        }
        
        document.addEventListener("DOMContentLoaded", updateCounts);
    