function disableOptions(questionName) {
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if (!option.checked) {
            option.disabled = true;
        }
    });
}

function playSound() {
    let clickSound = document.getElementById("selecionasom");
    clickSound.play();
}

function submitQuiz() {

    let correctAnswers = {
        q1: "C",
        q2: "B",
        q3: "C",
        q4: "A",
        q5: "B",
        q6: "D",
        q7: "A",
        q8: "D",
        q9: "B",
        q10: "C",

        //Adicione as respostas corretas para as outras perguntas
    };


    let form = document.getElementById("quizform");
    let score= 0;

    for (let key in correctAnswers) {
        let userAnswer = form.elements[key].value;
        if (userAnswer === correctAnswers[key]) {
            score++;
        }
    }

    let result = document.getElementById("result");
    result.innerHTML = "Você acertou "+ score +" de 10 perguntas.";

    //Tocar som se todas as respostas estiverem corretas
    if (score === 10) {
        let successSound = document.getElementById("venceusom");
        successSound.play();
    }
    else {
        let failSound = document.getElementById("perdeusom");
        failSound.play();
    }

    document.getElementById("resetbotao").disabled = false;

    document.getElementById("submit").disabled = true;
}

function resetQuiz() {
    let form = document.getElementById("quizform");
    form.reset();

    let options = document.querySelectorAll("input[type='radio']");
    options.forEach(option => option.disabled = false);

    let resultSection = document.getElementById("result");
    resultSection.innerHTML = '';

    document.getElementById("resetbotao").disabled = true;

    document.querySelector('button[onclick="submitQuiz()"]').disabled = false;
}


function aumentarFonte() {
    document.querySelectorAll("*").forEach(function (el) {
        const currentSize = parseFloat(getComputedStyle(el).fontSize);
        el.style.fontSize = (currentSize + 2) + "px";
    });
}

function diminuirFonte() {
    document.querySelectorAll("*").forEach(function (el) {
        const currentSize = parseFloat(getComputedStyle(el).fontSize);
        el.style.fontSize = (currentSize - 2) + "px";
    });
}