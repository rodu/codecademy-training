maxFinder = function maxFinder(list){
            
    // Extractor function: extracts the max
    // for the given property
    // lookin in the list received on maxFinder
    return function findMax(prop){
        
        var max = 0,
            maxes = _.filter(list, function filterFn(item){
                if (item[prop] >= max){
                    max = item[prop];
                    return item;
                }
            });
        maxes = _.filter(maxes, function filterMaxesFn(item){
            return item[prop] === max;
        });

        return maxes;
    };
};
