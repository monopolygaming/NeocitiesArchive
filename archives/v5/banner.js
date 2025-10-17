var gamingBanner = new Array()
gamingBanner[0] = ["Fun fact: Gaming is the most epic thing ever"];
gamingBanner[1] = ["Fish trolling is always morally correct"];
gamingBanner[2] = ["WHAT"];
gamingBanner[3] = ["where are the funny bears"];
gamingBanner[4] = ["Yea so much funnies on earth"];
gamingBanner[5] = ["this website works on ANY BROWSER"];

var rand = Math.floor(6 * Math.random())
document.getElementById("bannerText").innerHTML = gamingBanner[rand]