// List of accounts
var tests = true,
    account = new BankAccount("", 1250.12);

account.deposit(0.1);
tests &= (account.getBalance() === 1250.22);

account.deposit(0.01);
tests &= (account.getBalance() === 1250.23);

account.deposit(-100);
tests &= (account.getBalance() === 1250.23);

account.deposit(-0.01);
tests &= (account.getBalance() === 1250.23);

account.withdraw(100);
tests &= (account.getBalance() === 1150.23);

account.withdraw(4000);
tests &= (account.getBalance() === 1150.23);

account.withdraw(-100);
tests &= (account.getBalance() === 1150.23);

account.withdraw(-0.01);
tests &= (account.getBalance() === 1150.23);

account.withdraw(-0.1);
tests &= (account.getBalance() === 1150.23);

// Display accounts balance
accounts.forEach(function(account){
    accountsDisplay.innerHTML += displayBankAccountBalance(account);
});
