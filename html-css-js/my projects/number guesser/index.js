const numberRange = document.getElementById("number-range");
const number = document.getElementById("number");
const textMessage = document.getElementById("textMessage");
const submit = document.getElementById("submit");
const guessAgain = document.getElementById("guess-again");
let answerInput = document.getElementById("answerInput");

function randomNumberRange(){
    let firstRange;
    let secondRange = 100;
    do { 
        firstRange = Math.floor(Math.random()*11)*10; 
    } while(firstRange === 100);
    let answer = Math.floor(Math.random() * ((secondRange - firstRange) + 1) + firstRange);

    numberRange.textContent = `${firstRange} - ${secondRange}`;        

    function checkAnswer(){
        submit.addEventListener("click", () => {
            const inputAnswer = Number(answerInput.value);
             
            number.textContent = `Answer is: ${answer}`;
            
            if(inputAnswer < firstRange || inputAnswer > secondRange){
                textMessage.textContent = "Invalid input.";
            }else if(inputAnswer === answer){
                textMessage.textContent = "Congrats you got it!";
            }else{
                textMessage.textContent = "Nice try.";
            }
        })
    }
    checkAnswer();
}

function goAgain(){
    guessAgain.addEventListener("click", () => {
        answerInput.value = "";
        number.textContent = "Answer is: "
        textMessage.textContent = "";
        randomNumberRange();
    });
}

randomNumberRange();
goAgain();