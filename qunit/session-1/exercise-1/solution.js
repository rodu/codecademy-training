function extractUserName(input){
    if (typeof input === "string"){
        return input.substring(input.indexOf(":") + 2, input.indexOf(","));
    }
}