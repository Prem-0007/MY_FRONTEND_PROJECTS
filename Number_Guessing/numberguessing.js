

const min =1;
const max =100;
const ans = Math.floor(Math.random()*(max-min+1))+min;
console.log(ans);

let attempts=0;
let guess;
let running=true;

while(running){
   guess=window.prompt(`Guess a Number Between ${min} - ${max}`);
    guess= Number(guess);
    if(isNaN(guess)){
        window.alert("please enter a valid number");
    }
    else if(guess <min || guess > max){
        window.alert("please enter a valid number");
    }
    else{
        attempts++;
        if(guess<ans){
            window.alert("TOO LOW! TRY AGAIIN!");
        }
        else if(guess>ans){
            window.alert("TOO HiGH! TRY AGAIN!");
        }
        else{
            window.alert(`COORECT! The answer was ${ans}. it took you  ${attempts} attempts`);
                  running=false;
        }
        }
   
    }




 
    