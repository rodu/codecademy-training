var 
    result = true;
    
dataExtractor.initializeMaxFinder(playersData.players),

var
    maxGoalPlayes = dataExtractor.extract("goals"),
    maxYellowCardPlayers = dataExtractor.extract("yellowCards"),
    maxRedCardPlayers = dataExtractor.extract("redCards"),
    mostPlayedPlayers = dataExtractor.extract("appearances"),

    expectedMaxGoalIds = [19, 1],
    expectedYellowCardIds = [7],
    expectedRedCardIds = [2,8,9,13],
    expectedMostPlayedIds = [14];
    
result &= (maxGoalPlayes.length === expectedMaxGoalIds.length);
result &= (maxYellowCardPlayers.length === expectedYellowCardIds.length);
result &= (maxRedCardPlayers.length === expectedRedCardIds.length);
result &= (mostPlayedPlayers.length === expectedMostPlayedIds.length);

result &= maxGoalPlayes.every(function everyFn(item){
    return expectedMaxGoalIds.indexOf(item.id) >= 0;
});

result &= (maxYellowCardPlayers[0].id === 7);

result &= maxRedCardPlayers.every(function everyFn(item){
    return expectedRedCardIds.indexOf(item.id) >= 0;
});

result &= (mostPlayedPlayers[0].id === 14);

return result;
