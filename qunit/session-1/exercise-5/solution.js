maxFinder = function maxFinder(list){
    return function findMax(prop){
        // First finds the max value in the items for the given prop
        var max = _.max(list,
                        function maxFn(item){
                            return item[prop];
                        })[prop];

        // Then filters the list to contain only the items that match
        // the max value on the given prop
        return _.filter(list, function filterMaxesFn(item){
            return item[prop] === max;
        });
    };
};