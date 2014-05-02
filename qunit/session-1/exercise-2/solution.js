var converter = {
    // Gets an amount in Euro and converts that to US dollars
    toEuro: function toEuro(conversionRate, amount){
        // Implement converter code here
        // and return the result of the conversion
        return parseFloat((amount * conversionRate).toFixed(2));
    },
    // Gets an amount in US dollars and converts that to Euro
    toUSDollars: function toUSDollars(conversionRate, amount){
        // Implement converter code here
        // and return the result of the conversion
        return parseFloat((amount / conversionRate).toFixed(2));
    }
};