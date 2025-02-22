// affiliate.js
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");
    
    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove("active"));
            
            // Hide all tab contents
            contents.forEach(content => content.classList.remove("active"));
            
            // Add active class to the clicked tab
            this.classList.add("active");
            
            // Show the corresponding tab content
            const target = this.getAttribute("data-tab");
            document.getElementById(target).classList.add("active");
        });
    });
    
    // Set default active tab
    if (tabs.length > 0) {
        tabs[0].classList.add("active");
        contents[0].classList.add("active");
    }
});



