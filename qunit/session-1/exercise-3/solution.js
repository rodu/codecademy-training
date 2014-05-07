BankAccount.prototype.deposit = function(amount) {
    var balanceCents,
        amountCents;
    if (amount > 0){
        balanceCents = parseInt(this.balance, 10) * 100 +
            (parseFloat((this.balance % 1).toFixed(2)) * 100);
        amountCents = parseInt(amount, 10) * 100 +
            (parseFloat((amount % 1).toFixed(2)) * 100);
        this.balance = (balanceCents + amountCents) / 100;
    }
};

BankAccount.prototype.withdraw = function(amount) {
    var 
        balanceCents,
        amountCents;
    if (amount > 0){
        
        balanceCents = parseInt(this.balance, 10) * 100 +
            (parseFloat((this.balance % 1).toFixed(2)) * 100);
        amountCents = parseInt(amount, 10) * 100 +
            (parseFloat((amount % 1).toFixed(2)) * 100);
            
        if (balanceCents - amountCents >= 0){
            this.balance = (balanceCents - amountCents) / 100;
        }
    }
};