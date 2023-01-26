//
function loadData(url, callback) {

    var http  = new XMLHttpRequest();
    http.open("GET", url, true);

    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            if (http.status == 200) {
                var myData = JSON.parse(http.responseText);
                if (callback) {
                    callback(myData);
                }
            } else {
                alert("Sorry, unable to load data.");
            }
        }
    }

    http.send();
}


function myRenderHandler(myHTML, myData) {

    return function() {

    }

};


//
window.onload = function() {


    // Render cards
    loadData("/sample-data/results.json", function(myData) {

        let myCards = cards(cardObj(myData));
//console.log(myCards);

/*        let myTemplate = document.getElementById("card-template");

        for (let indx = 0; indx < myCards.length; indx++) {

            //
            let anotherElement = myTemplate.cloneNode(true);
            myTemplate.before(anotherElement);

            myCards[indx].renderHandler = myRenderHandler(myTemplate);
            myCards[indx].renderHandler(anotherElement);
        }
*/
    });

};
