let minNum=1;
let maxNum=100;
let answer= Math.floor (Math.random() * (maxNum-minNum + 1));

let attempts= 0;
let guess;
let running= true;

while(running){
    guess= prompt(`Guess a number between ${minNum} to ${maxNum}`);
    guess=Number(guess);
    if(isNaN(guess)){
        alert("Please enter valid number");

    }
    else if(guess< minNum || guess>maxNum){
        alert("Enter the nuber within the given range 1-100")
    }
    else{
       attempts++;
       if(guess<answer){
        alert("too low try again")
       } 
       else if(guess>answer){
        alert("too high try again")
       }
       else{
        alert(`Correct!The answer was ${answer}. It took you ${attempts} attempts. `)
        running=false;   
    }
    }

}