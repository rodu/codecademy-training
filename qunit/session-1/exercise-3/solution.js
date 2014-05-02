BankAccount.prototype.deposit = function(amount) {
    var balanceCents,
        amountCents;
    if (amount > 0){
        balanceCents = this.balance * 100;
        amountCents = amount * 100;
        this.balance = (balanceCents + amountCents) / 100;
    }
};
    
BankAccount.prototype.withdraw = function(amount) {
    var balanceCents,
        amountCents;
    if (amount > 0){
        balanceCents = this.balance * 100;
        amountCents = amount * 100;
        if (balanceCents - amountCents >= 0){
            this.balance = (balanceCents - amountCents) / 100;
        }
    }
};
