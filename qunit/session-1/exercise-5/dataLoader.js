// Declares a dataLoader function which exposes a load method
var dataLoader = {
    // The load method uses jQuery to load a JSON object
    // from the url specified in the parameter accepted.
    //
    // Then returns a jQuery Deferred object wich will
    // inform about the completion of the data loading
    load: function loadFn(url){
        return $.getJSON(url);
    }
};
