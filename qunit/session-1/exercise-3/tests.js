// Let's declare a few people which will open a bank account, you can
// declare as many as you wish
var 
    MARY_FULL_NAME = "Mary O'Sullivan",
    JOHN_FULL_NAME = "John Britt",
    LISA_FULL_NAME = "Lisa Mattei";

QUnit.test("Opening a new account", 3,
    function openingAccountTest(){
    
    var // Creating a few bank accounts
        maryAccont = new BankAccount(MARY_FULL_NAME, 100.0),
        johnAccount = new BankAccount(JOHN_FULL_NAME, 50.20),
        lisaAccount = new BankAccount(LISA_FULL_NAME, 250.0);
    
    QUnit.equal(maryAccont.getBalance(), 100,
        "Mary account should hold the balance initially deposited");
    
    QUnit.equal(johnAccount.getBalance(), 50.20,
        "John account should hold the balance initially deposited");
    
    QUnit.equal(lisaAccount.getBalance(), 250,
        "Lisa account should hold the balance initially deposited");
});

QUnit.test("After depositing some money in an account", 1,
    function depositTest(){
    
    var // Creating a few bank accounts
        maryAccont = new BankAccount(MARY_FULL_NAME, 100.0);
    
    // Will add some money to the Mary's account
    maryAccont.deposit(120.02);
    
    QUnit.equal(maryAccont.getBalance(), 220.02,
        "The new balance should be correctly recalculated");
});

QUnit.test("After withdrawing some money from an account", 2,
    function withdrawSimpleTest(){
    
    var
        johnAccount = new BankAccount(JOHN_FULL_NAME, 50.20),
        lisaAccount = new BankAccount(LISA_FULL_NAME, 250.0);
    
    // John will withdraw some monwy
    johnAccount.withdraw(23.01);
    // lisa will also make a withdraw
    lisaAccount.withdraw(45.50);
    
    QUnit.equal(johnAccount.getBalance(), 27.19,
        "John account should hold the correct balance");
    
    QUnit.equal(lisaAccount.getBalance(), 204.5,
        "Lisa account should hold the correct balance");
    
});

QUnit.test("Withdrawing more that the active balance", 1,
    function withdrawMoreThanBalanceTest(){
    
    var
        INITIAL_BALANCE = 50.20,
        johnAccount = new BankAccount(JOHN_FULL_NAME, INITIAL_BALANCE);
    
    // Now John will withdraw more than he actually has got on his bank account
    // will the system allow this?
    johnAccount.withdraw(100);
    
    QUnit.ok(INITIAL_BALANCE === johnAccount.getBalance(),
        "The balance should not have changed");
});

QUnit.test("Withdrawing a negative amount", 1,
    function withdrawNegativeAmountTest(){
    
    var
        INITIAL_BALANCE = 50.20,
        johnAccount = new BankAccount(JOHN_FULL_NAME, INITIAL_BALANCE);
    
    // Now John will withdraw more than he actually has got on his bank account
    // will the system allow this?
    johnAccount.withdraw(-100);
    
    QUnit.ok(INITIAL_BALANCE === johnAccount.getBalance(),
        "The balance should not have changed");
});

QUnit.test("Depositing a negative amount", 2,
    function depositNegativeAmountTest(){
    
    var
        maryAccount = new BankAccount(MARY_FULL_NAME, 500.0);
        johnAccount = new BankAccount(JOHN_FULL_NAME, 5000.0);
    
    // Now John and Mary will deposit a negative amount?!?
    // Will the system allow this?
    maryAccount.deposit(-500.01);
    johnAccount.deposit(-100);
    
    QUnit.equal(maryAccount.getBalance(), 500,
        "The Mary balance should not have changed");
        
    QUnit.equal(johnAccount.getBalance(), 5000,
        "The John balance should not have changed");
});
