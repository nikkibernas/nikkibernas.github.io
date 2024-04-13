// Javascript for learn page 




// select a question for answer //

let answerItems = ["Cats are carnivores meaning they rely on the nutrients from meat", "Some cats may like to go outside, but it is generally safer for cats to be kept inside", "a cat may scratch you while playing, due to overstimulation when touched, or to defend themselves from a perceived threat", "Typically the head, neck & chin are their favorites. Pay close attention to your cat's reactions to your touch and respect their preferences."];
function choiceFunc(){
    var index = document.getElementsByName("questions")[0].selectedIndex;
    var answerContent = answerItems[index];
    document.getElementById("question-answers").value = answerContent;
}



// cat costs calculator //

function calculateCost(){
    let regCosts = 38; //$ a mo
    let expCosts = 76;// $ a mo

    let amount = document.getElementById("amount").value;
    var selectedOption = document.querySelector('input[name="expensive"]:checked');

    if(amount == ""){
        alert("Please enter the number of cats you have.");
    }
    else if(amount <= 0){
        alert("Please enter at least one cat.");
    }
    else{
        if(selectedOption == null){
            alert("Please select an option for food and toys.");
        }
        else{
            if(selectedOption.id == "eYes"){
                var costs = expCosts;
            }
            else{
                var costs = regCosts;
            }
        
            let adoption_fee = amount * 300
        
            let monthly_cost = costs * amount;
        
            let para = document.getElementById("para");
            
            para.innerHTML=`${"Your pets will cost you: $" + monthly_cost  + " each month, as well as a one time $300 adoption fee per cat."}`;
            para.innerHTML+=`<br>`;
            para.innerHTML+=`${"Your first month cost will total: $" + (monthly_cost + adoption_fee) + " for " + amount + " cats."}`;
        }
    }
}

function resetCost(){
    var calculatorSection = document.getElementById("costCalculator");
    calculatorSection.querySelector("#amount").value = "";
    calculatorSection.querySelector("#amount").focus();
    calculatorSection.querySelector("#para").innerHTML = "Costs will include food, litter, toys and a one time adoption fee. <br><br> Adoption fee per cat: $300 <br><br> Regular: $15/mo for food, $20/mo cat litter, $3/mo for toys<br> Expensive: $30/mo for food, $40/mo cat litter, $6/mo for toys";
    var checkedOption = calculatorSection.querySelector('input[name="expensive"]:checked');
    if (checkedOption) {
        checkedOption.checked = false;
    }
}



// cat quiz //

const questions = [
    { question: "Is a Bengal cat expensive?", options: ["Yes", "No", "Maybe", "I don't know"], correct: "Yes" },
    { question: "Do cats need regular bathing?", options: ["Yes", "No", "Only certain breeds", "Depends on the environment"], correct: "No" },
    { question: "Which cat breed is known for being hairless?", options: ["Sphynx", "Persian", "Maine Coon", "Siamese"], correct: "Sphynx" },
    { question: "How long do domestic cats usually sleep per day?", options: ["8-12 hours", "12-16 hours", "16-20 hours", "More than 20 hours"], correct: "12-16 hours" },
    { question: "What is a group of cats called?", options: ["A clowder", "A pack", "A herd", "A flock"], correct: "A clowder" },
    { question: "Which nutrient is essential in a cat’s diet?", options: ["Carbohydrates", "Taurine", "Fibers", "Vitamin C"], correct: "Taurine" },
    { question: "At what age do kittens start eating solid food?", options: ["2 weeks", "4 weeks", "6 weeks", "8 weeks"], correct: "4 weeks" },
    { question: "Which cat breed has a reputation for being talkative?", options: ["Siamese", "Russian Blue", "Bengal", "British Shorthair"], correct: "Siamese" },
    { question: "What does it mean when a cat's tail is straight up?", options: ["Aggression", "Fear", "Happiness/Friendliness", "Sickness"], correct: "Happiness/Friendliness" },
    { question: "Cats are natural predators of what type of animals?", options: ["Birds", "Small mammals", "Both A and B", "Fish"], correct: "Both A and B" },
    { question: "What is the average lifespan of a domestic cat?", options: ["5-10 years", "10-15 years", "15-20 years", "More than 20 years"], correct: "15-20 years" },
    { question: "Which sense is most developed in cats?", options: ["Sight", "Smell", "Hearing", "Taste"], correct: "Hearing" },
    { question: "What is the correct term for a female cat?", options: ["Doe", "Mare", "Queen", "Duchess"], correct: "Queen" },
    { question: "Why do cats purr?", options: ["Happiness", "Stress relief", "Communication with kittens", "All of the above"], correct: "All of the above" },
    { question: "How many whiskers does a cat typically have?", options: ["12", "16", "24", "32"], correct: "24" },
    { question: "What unique feature do Maine Coon cats have?", options: ["Extra toes", "Two tails", "Three ears", "A mane like a lion"], correct: "Extra toes" },
    { question: "Which of these is NOT a reason cats scratch surfaces?", options: ["To sharpen claws", "To mark territory", "Out of boredom", "To remove fur"], correct: "To remove fur" },
    { question: "What does it mean when a cat kneads with its paws?", options: ["It's preparing to sleep", "It's marking its territory", "It's showing affection", "All of the above"], correct: "All of the above" },
    { question: "How many teeth does an adult cat have?", options: ["24", "30", "36", "42"], correct: "30" },
    { question: "Why do cats have vertical, slit-shaped pupils?", options: ["To see in the dark", "To focus on prey", "To detect movement better", "All of the above"], correct: "All of the above" }
];

let currentQuestionIndex = 0;
let selectedQuestions = [];
let userAnswers = [];

document.getElementById('start-quiz-btn').addEventListener('click', function() {
    selectedQuestions = selectRandomQuestions(5);
    currentQuestionIndex = 0;
    userAnswers = [];
    displayQuestion(selectedQuestions[currentQuestionIndex]);
    document.getElementById('quiz-form').style.display = 'block';
    document.getElementById('next-question-btn').style.display = 'inline';
    document.getElementById('start-quiz-btn').style.display = 'none';
});

document.getElementById('next-question-btn').addEventListener('click', function() {
    if (!document.querySelector(`input[name="question"]:checked`)) {
        alert('Please select an answer.');
        return;
    }
    saveAnswer();
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        displayQuestion(selectedQuestions[currentQuestionIndex]);
    } else {
        document.getElementById('next-question-btn').style.display = 'none';
        document.getElementById('submit-quiz-btn').style.display = 'inline';
    }
});


document.getElementById('submit-quiz-btn').addEventListener('click', function() {
    if (!document.querySelector(`input[name="question"]:checked`)) {
        alert('Please select an answer for the last question.');
        return;
    }
    // saveAnswer();
    evaluateResults();
    document.getElementById('quiz-form').style.display = 'none';
});

function displayQuestion(question) {
    const questionPara = document.getElementById('question-para');
    const quizContentDiv = document.getElementById('quiz-content-div');

    quizContentDiv.style.backgroundImage = "none";
    
    questionPara.innerHTML = `<h3>${question.question}</h3>`;
    quizContentDiv.innerHTML = `
        ${question.options.map((option, idx) => `
            <input type="radio" name="question" id="option_${idx}" value="${option}">
            <label for="option_${idx}">${option}</label><br>
        `).join('')}
    `;
}

function saveAnswer() {
    const selectedOption = document.querySelector('input[name="question"]:checked').value;
    userAnswers.push(selectedOption);
}

function evaluateResults() {
    let score = 0;
    let correctAnswersList = '';

    userAnswers.forEach((answer, index) => {
        if (answer === selectedQuestions[index].correct) {
            score++;
        }
        correctAnswersList += `<br>Q: ${selectedQuestions[index].question} - Correct answer: ${selectedQuestions[index].correct}<br>`;
    });

    document.getElementById('quiz-results-para').innerHTML = `Your score is: ${score} out of ${selectedQuestions.length}. <br>`;
    document.getElementById('quiz-results-para').innerHTML += correctAnswersList;

    // Show reset button after quiz is submitted
    document.getElementById('reset-quiz-btn').style.display = 'inline';
}

function selectRandomQuestions(count) {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

