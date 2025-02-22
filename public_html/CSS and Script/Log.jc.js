/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
// script.js
document.getElementById("logout-button").addEventListener("click", function() {
    // Clear user session or authentication data (Example: clearing localStorage)
    localStorage.removeItem("user"); 
    localStorage.removeItem("theme");
    localStorage.removeItem("language");

    // Redirect to login page
    window.location.href = "index.html"; 
});

