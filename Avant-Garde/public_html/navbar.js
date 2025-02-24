export function createNavbar() {
    return `
    <header>
        <h1>AVANT-GARDE</h1>
        <nav>
            <ul class="nav-list">
                <li><a href="HomePage.html">Home</a></li>
                <li><a href="Service.html">Services</a></li>
                <li><a href="About_us.html">About</a></li>
                <li><a href="Affiliate Page.html">Affiliate</a></li>
                <li><a href="Event.html">Event</a></li>
                <li class="auth-status">
                    <span id="userGreeting">Guest</span>
                    <button id="authButton">Sign In</button>
                </li>
            </ul>
        </nav>
    </header>
    `
}

export function initializeNavbar(auth) {
    const authButton = document.getElementById('authButton');
    const userGreeting = document.getElementById('userGreeting');
    
    // Update UI based on auth state
    onAuthStateChanged(auth, (user) => {
        if (user) {
            userGreeting.textContent = user.displayName || user.email;
            authButton.textContent = 'Sign Out';
            authButton.onclick = () => auth.signOut();
        } else {
            userGreeting.textContent = 'Guest';
            authButton.textContent = 'Sign In';
            authButton.onclick = () => window.location.href = 'index.html';
        }
    });
}