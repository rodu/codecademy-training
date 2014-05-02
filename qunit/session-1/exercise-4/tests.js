var mockPlayer = {
    "id": 17,
    "playerName": "Francesco Totti",
    "teamName": "Roma",
    "position": "Attacking Midfielder (Center, Left) / Forward",
    "appearances": 18,
    "goals": 7,
    "yellowCards": 1,
    "redCards": "none",
    "totalShots": 61
};

QUnit.test("Calculating a player rating", 1,
    function calculateRatingForNaN(){
    
    // Runs the function to calculate the actual score
    var actual = calculatePlayerRate(mockPlayer);
    
    // Checks that the result is of type "number"
    QUnit.ok(typeof actual === "number", "The returned value should be a number");
});

QUnit.test("Calculating a player rating", 1,
    function calculateRatingForNaN(){
    
    // Runs the function to calculate the actual score
    var actual = calculatePlayerRate(mockPlayer);
    
    QUnit.ok(!isNaN(actual), "The returned value should not be NaN");    
});
