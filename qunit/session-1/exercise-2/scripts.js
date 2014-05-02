var
    converter = {
        // Gets an amount in Euro and converts that to US dollars
        toEuro: function toEuro(conversionRate, amount){
            // Implement converter code here
            // and return the result of the conversion
        },
        // Gets an amount in US dollars and converts that to Euro
        toUSDollars: function toUSDollars(conversionRate, amount){
            // Implement converter code here
            // and return the result of the conversion
        }
    };

// Auto-executes the testing function
(function mainTest(){
    
    QUnit.test("Converting from US dollars to Euro with a neutral rate", 1,
    function euroToUSDollarsTest(){
    
        var amount = 1,
            conversionRate = 1,
            // Because the conversionRate is 1, we expect the result to be
            // the same as the initial amount
            expected = amount,
            result;
        
        result = converter.toEuro(conversionRate, 1);
        QUnit.equal(result, expected, "Should give same result as initial amount");
    });
    
    QUnit.test("Converting from Euro to US dollars with a neutral rate", 1,
        function usDollarsToEuroTest(){
        
        var amount = 1,
            conversionRate = 1,
            // Because the conversionRate is 1, we expect the result to be
            // the same as the initial amount
            expected = amount,
            result;
        
        result = converter.toUSDollars(conversionRate, 1);
        QUnit.equal(result, expected, "Should give same result as initial amount");
    });
    
    QUnit.test("Converting from Euro to US Dollars", 1,
        function euroToUSDollarsWithProperRateTest(){
    
        var amountInEuro = 13.40,
            conversionRate = 0.723916,
            expected = 18.51,
            actual = 0;
        
        actual = converter.toUSDollars(conversionRate, amountInEuro);
        // Assertion check
        QUnit.equal(actual, expected,
            "The amount should be correctly converted using two decimals precision");
    });
    
    QUnit.test("Converting from US dollars to Euro", 1,
        function usDollarsToEuroWithProperRateTest(){
    
        var amountInDollars = 33.50,
            conversionRate = 0.723916,
            expected = 24.25,
            actual = 0;
        
        actual = converter.toEuro(conversionRate, amountInDollars);
        // Assertion check
        QUnit.equal(actual, expected,
            "The amount should be correctly converted using two decimals precision");
    });
    
    QUnit.test("Converting from Euro to US Dollars and then back to Euro", 1,
        function convertingToDollarsAndBackToEuro(){
            
        var amount = 10, // dollars
            conversionRate = 0.723916,
            expected = 10,
            actual = 0;
        
        actual = converter.toEuro(conversionRate, amount);
        actual = converter.toUSDollars(conversionRate, actual);
        QUnit.equal(actual, expected, "Should give back the initial amount in dollars.");
    });
}());
