const minNumber = 1;
const maxNumber = 100;
const answer = Math.floor(Math.random() * (maxNumber - minNumber) + 1);

let attempts = 0;
let guess;
let running = true;
console.log(answer)

while(running)
{
    guess = window.prompt(`Enter a number of your choice  between ${minNumber} - ${maxNumber} to guess !!`);
    guess = Number(guess);

    if(isNaN(guess))
    {
        window.alert("Enter a valid number !!!");
    }
    else if(guess < minNumber || guess > maxNumber)
    {
        window.alert("Enter a valid number !!!");
    }
    else
    {
        attempts ++;
        if(guess < answer)
        {
            window.alert("Your guess is too low..")
        }
        else if(guess > answer)
        {
            window.alert("Your guess is too high")
        }
        else
        {
            window.alert(`You have guessed correct number ${answer}, it took you ${attempts} attempts..`);
            running = false;
        }
    }
}