/* global extractUserName */
return(
    extractUserName("The user: joedoe, was looged in.") === "joedoe" &&
    extractUserName("One day: marydoe, was looged in.") === "marydoe" &&
    extractUserName("Three dogs one of which: bubu, was barking.") === "bubu");