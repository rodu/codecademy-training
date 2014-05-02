var PENALTY_YELLOW = 0.2,
    PENALTY_RED = 0.5;
    
function calculatePlayerRate(player){
    var rate = (player.goals / player.totalShots) / player.appearances;
    
    if (player.yellowCards){
        rate -= PENALTY_YELLOW * player.yellowCards;
    }
    
    if (player.redCards){
        rate -= PENALTY_RED * player.yellowCards;
    }
    
    // Squares the rate to avoid returning negative numbers
    rate *= rate;
    
    // Format the result to have two decimal positions
    rate = parseFloat(rate.toFixed(2));

    return rate;
}