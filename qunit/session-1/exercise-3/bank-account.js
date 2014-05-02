// Creating a BankAccount constructor function
function BankAccount(holderName, balance){
    this.holderName = holderName;
    this.balance = balance;
}

BankAccount.prototype.getBalance = function() {
    return this.balance;
};

BankAccount.prototype.getHolderName = function() {
    return this.holderName;
};

BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
};

BankAccount.prototype.withdraw = function(amount) {
    this.balance -= amount;
};
