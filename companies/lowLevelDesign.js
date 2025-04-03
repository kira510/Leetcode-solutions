/*

1. user can insert card
2. enter pin
3. check balance
4. withdraw money

ATM:
currency type
balance

users 
debitCard no
pin


Bank
codeOfDebitCard


DebitCard
bankCode: //comes dynamically while reading from card

*/

class User {
    constructor(balance, sessionStatus) {
        this.accNo = accNo;
        this.ifscCode;
        this.balance = balance;
        this.sessionStatus = sessionStatus;
        this.timer = 3*60*60;

        setTimeout(() => {
            this.sessionStatus = false;
        }, this.timer);
    }

    setBalace() {}

    validate() {}

    deposit() {
        //callbackedn
        this.balance = newBalance;
    }
}

class DebitCard {
    constructor() {
        this.bankCode;
        this.debitCardNo;
        this.pin;
    }
}

class ATM {
    static async authenticateDebitCard(cardNo, pin) {
        
        return new User(5000, false);
    }

    async withdraw(amount) {
        //async call to debit
        return User.setBalace(initialBal - amount);
    }

    async transferReq(accountNo, ifsc) {
        const user2 = new User(accNo, ifsc);
        await user2.validate();

        //call backend service
    }

    async desposit(amount) {
        user.deposit()
    }
}


function main(req, res, next) {
    ATM.authenticateDebitCard(req.body.cardNo, req.body.pin);
}

