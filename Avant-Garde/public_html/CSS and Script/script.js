// Handle form submission
document.getElementById('experienceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user inputs
    const timeOfDay = document.getElementById('timeOfDay').value;
    const activity = document.getElementById('activity').value;
    const atmosphere = document.getElementById('atmosphere').value;

    // Generate a customized message
    const resultText = `You selected a ${timeOfDay} experience with ${activity}. 
    Expect a ${atmosphere} atmosphere for your perfect day or night!`;

    // Display the result
    const resultSection = document.getElementById('result');
    document.getElementById('resultText').textContent = resultText;
    resultSection.classList.remove('hidden');
});

