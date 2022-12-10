
//CONVERTING DOG TO HUMAN YEARS HOMEWORK
function calculateDogAge(age) {
    let yourDogYear = prompt("How old is your dog")
    let dogYears = 7*yourDogYear;
    console.log("Your doggie is " + dogYears + " years old in human years!");
}


calculateDogAge();

//ATM MACHINE HOMEWORK
function atmMachine (){
    let moneyInYourBankAccount = 350;
    console.log(`You have ${moneyInYourBankAccount} in your bank account`);
    let moneyYouWantToWithdraw = prompt("How much money would you like to withdraw?");
    console.log(`You have withdrawn ${moneyYouWantToWithdraw}$`);

    if (moneyYouWantToWithdraw > moneyInYourBankAccount) {
        alert("Sorry sir you dont have enought money in your bank account");
    }

    let amountOfMoneyYouHaveLeft = moneyInYourBankAccount - moneyYouWantToWithdraw
    console.log(`Sir you have ${amountOfMoneyYouHaveLeft}$ left`)
    return moneyYouWantToWithdraw;
}

atmMachine()

