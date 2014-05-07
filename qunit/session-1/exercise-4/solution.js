function calculatePlayerRate(player){
    var rate = (player.goals / player.totalShots) / player.appearances;
        
    if (+player.yellowCards){
        rate -= 0.2 * player.yellowCards;
    }
    if (+player.redCards){
        rate -= 0.5 * player.yellowCards;
    }
    
    // Squares the rate to avoid returning negative numbers
    rate = ((100 + rate) / 100) * 2;
    rate *= rate;
    // Format the result to have two decimal positions
    rate = parseFloat(rate.toFixed(2));

    return rate;
}