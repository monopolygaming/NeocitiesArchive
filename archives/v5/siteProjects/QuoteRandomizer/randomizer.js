var quoteRandomizer = new Array()
quoteRandomizer[0] = ["the GAMING Epicness"];
quoteRandomizer[1] = ["mermaiding xD"];
quoteRandomizer[2] = ["Fish trolling"];
quoteRandomizer[3] = ["'Then I am against the world' - St. Athanasius of Alexandria"];
quoteRandomizer[4] = ["cheese"];
quoteRandomizer[5] = ["SO VERY NUCLEAR OMG"];
quoteRandomizer[6] = ["Intel Core i7 2012"];

function funnyButton() {
var rand = Math.floor(7 * Math.random())
document.getElementById("theText").innerHTML = quoteRandomizer[rand]
}