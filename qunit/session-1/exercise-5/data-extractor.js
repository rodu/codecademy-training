// Declares a maxFinder function which will be
// the main data extractor routine
//
// The function accepts a list of objects,
// then returns a second function which we can use
// to find the maximum property in all the objects
// in the list we passed initially
//
// This is a typical JavaScript functional programming
// style
//
var dataExtractor = (function(){

    var dataLoader = null,
        DATA_URL = "./players-data.js",
        findMax,
        
        // Accept the list on which to run extractions
        // and return an extractor function
        maxFinder = function maxFinder(list){
            return function findMax(prop){
                var maxVal = 0,
                    maxes = _.filter(list, function mapFn(item){
                        if (item[prop] >= maxVal){
                            maxVal = item[prop];
                        }
                        return item[prop] >= maxVal;
                    });
                return maxes;
                /*return _.max(list, function forEachItem(item){
                    return item[prop];
                });*/
            };
        };
    
    function setDataLoader(dataLoaderInstance){
        dataLoader = dataLoaderInstance;
    }
    
    function loadData(url){
        return dataLoader.load(url);
    }
    
    function initializeMaxFinder(players){
        findMax = maxFinder(players);
    }
    
    function extract(property){
        return findMax(property);
    }
    
    return {
        setDataLoader: setDataLoader,
        loadData: loadData,
        initializeMaxFinder: initializeMaxFinder,
        extract: extract
    };

}());
