const readline = require('readline');

// Array of objects containing questions, options, and answers
const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['A. London', 'B. Paris', 'C. Rome', 'D. Berlin'],
        answer: 'B'
    },
    {
        question: 'What is 2 + 2?',
        options: ['A. 3', 'B. 4', 'C. 5', 'D. 6'],
        answer: 'B'
    },
    {
        question: 'Who is the author of "To Kill a Mockingbird"?',
        options: ['A. Harper Lee', 'B. J.K. Rowling', 'C. Charles Dickens', 'D. F. Scott Fitzgerald'],
        answer: 'A'
    }
];

// Function to start the quiz
function startQuiz() {
    
    console.log('Answer the following questions:');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let score = 0;
    let questionIndex = 0;

    // Recursive function to ask questions one by one
    function askQuestion() {
        if (questionIndex === quizData.length) {
            console.log(`Quiz ended! Your score is ${score}/${quizData.length}`);
            rl.close();
            return;
        }

        const { question, options, answer } = quizData[questionIndex];

        console.log(`\nQuestion ${questionIndex + 1}: ${question}`);
        options.forEach(option => console.log(option));

        rl.question('Your answer (type the letter): ', (userAnswer) => {
            if (userAnswer.toUpperCase() === answer) {
                console.log('Correct answer!');
                score++;
            } else {
                console.log(`Wrong answer! The correct answer is ${answer}`);
            }

            questionIndex++;
            askQuestion();
        });
    }

    askQuestion();
}

// Start the quiz
startQuiz();
