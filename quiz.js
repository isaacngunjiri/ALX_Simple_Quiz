
function checkAnswer() {
    
    const correctAnswer = "4"; 

    
    const userAnswer = document.querySelector('input[name="quiz"]:checked'); // Select the checked radio button

    
    if (userAnswer) {
        // Access the value property of the selected radio button
        const userAnswerValue = userAnswer.value;

        // Compare the User’s Answer with the Correct Answer
        const feedbackElement = document.getElementById('feedback'); // Get the feedback element

        if (userAnswerValue === correctAnswer) {
            // User's answer is correct
            feedbackElement.textContent = "Correct! Well done."; 
        } else {
            // User's answer is incorrect
            feedbackElement.textContent = "That's incorrect. Try again!"; 
        }
    } else {
        // No answer selected
        const feedbackElement = document.getElementById('feedback');
        feedbackElement.textContent = "Please select an answer!"; 
    }
}


document.getElementById('submit-answer').addEventListener('click', checkAnswer);
