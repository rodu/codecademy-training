var
    knownResults = [ 0.63, 0.03, 1.2, 0.35, 0.04, 3.23, 0.04 ],
    scores = getPlayersData().players.map(function playersMapFn(player){
        return calculatePlayerRate(player);
    });
return scores.every(function(score){
    return knownResults.indexOf(score) >= 0;
});
