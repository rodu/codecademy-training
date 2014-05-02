// We implement here a mocked data loader
// which will be used for testing, and will return
// a data set we also simulate to allow testing.
//
// Note that in real scenario, this data loader will
// not need a real server in order for the tests to run.
//
var mockedDataLoader = {
    load: function load(){
        return {
            done: function mockDone(fn){
                fn.call(null, {
                    "season": 2013,
                    "players": [{
                        "id": 1,
                        "playerName": "Carlos Tévez",
                        "teamName": "Juventus",
                        "position": "Attacking Midfielder (Center, Left) / Forward",
                        "appearances": 28,
                        "goals": 19,
                        "yellowCards": 4,
                        "redCards": 0,
                        "totalShots": 120
                    },
                    {
                        "id": 9,
                        "playerName": "Daniele De Rossi",
                        "teamName": "Roma",
                        "position": "Defender (Center) / Defensive Midfielder (Center)",
                        "appearances": 29,
                        "goals": 1,
                        "yellowCards": 4,
                        "redCards": 1,
                        "totalShots": 31
                    },
                    {
                        "id": 16,
                        "playerName": "Alessandro Diamanti",
                        "teamName": "Bologna",
                        "position": "Attacking Midfielder (Center, Left, Right) / Forward",
                        "appearances": 19,
                        "goals": 5,
                        "yellowCards": 9,
                        "redCards": 0,
                        "totalShots": 82
                    },
                    {
                        "id": 17,
                        "playerName": "Francesco Totti",
                        "teamName": "Roma",
                        "position": "Attacking Midfielder (Center, Left) / Forward",
                        "appearances": 18,
                        "goals": 7,
                        "yellowCards": 1,
                        "redCards": 0,
                        "totalShots": 61
                    },
                    {
                        "id": 20,
                        "playerName": "Gonzalo Rodríguez",
                        "teamName": "Fiorentina",
                        "position": "Defender (Center, Left)",
                        "appearances": 30,
                        "goals": 19,
                        "yellowCards": 12,
                        "redCards": 0,
                        "totalShots": 16
                    }]
                });
            },
            fail: function mockFail(){}
        };
    }
};

// We declare a module name for the set of tests done here.
// QUnit will run the setup and teardown befor and after each test
QUnit.module("Players extraction", {
    setup: function(){
        // Before running tests, we set the mocked data loader
        // in the dataExtractor
        dataExtractor.setDataLoader(mockedDataLoader);
    },
    teardown: function(){
    }
});

// Note the use of asyncTest to inform QUnit that we want
// to run this test asynchronously
//
QUnit.asyncTest("Extracting the players with most goals",
    function extractMostGoalsTest(){
        
    // We indicate QUnit that we expect this test
    // to run n assertions
    QUnit.expect(3);
    
    // Now we load our data which is an asynchronous operation
    dataExtractor.loadData().done(function loadDoneFn(data){
        // We reach this point later,
        // when data load complete successfully
        
        var players,
            playerIds;
        
        // Now we initialize the max finder with the list of players
        dataExtractor.initializeMaxFinder(data.players);
        
        // So we can run the function that will extact our data
        players = dataExtractor.extract("goals");
        
        // Finally, we can run our tests
        QUnit.equal(players.length, 2,
            "The number of extracted players should match");
            
        
        // Checks the ids of the players returned
        playerIds = [
            players[0].id,
            players[1].id,
        ];
        
        // Checks that the player with id 1 was returned
        QUnit.ok(playerIds.indexOf(1) >= 0,
            "The player id 1 should be retured");
            
        // Checks that the player with id 20 was returned
        QUnit.ok(playerIds.indexOf(20) >= 0,
            "The player id 20 should be retured");
        
        // This is the point of the asynchronous testing with QUnit
        // where we inform the framework to run the tests we just
        // declared.
        QUnit.start();
    
    });
});

QUnit.asyncTest("Extracting the players with most yellow cards",
    function extractMostGoalsTest(){
        
    // We indicate QUnit that we expect this test
    // to run n assertions
    QUnit.expect(2);
    
    // Now we load our data which is an asynchronous operation
    dataExtractor.loadData().done(function loadDoneFn(data){
        // We reach this point later,
        // when data load complete successfully
        
        var players;
        
        // Now we initialize the max finder with the list of players
        dataExtractor.initializeMaxFinder(data.players);
        
        // So we can run the function that will extact our data
        players = dataExtractor.extract("yellowCards");
        
        // Finally, we can run our tests
        QUnit.equal(players.length, 1,
            "it should return one player only");
            
        QUnit.equal(players[0].id, 20,
            "The player id 20 should be retured");
            
        // This is the point of the asynchronous testing with QUnit
        // where we inform the framework to run the tests we just
        // declared.
        QUnit.start();
    
    });
});
