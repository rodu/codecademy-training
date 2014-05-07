var
    knownResults = [ 3.94, 3.99, 3.83, 3.95, 3.98, 3.86, 3.98 ],
    scores = getPlayersData().players.map(function playersMapFn(player){
        return calculatePlayerRate(player);
    });
return scores.every(function(score){
    return knownResults.indexOf(score) >= 0;
});
