
//
function cardObj(myData) {

    let myCardObj = {};

    for (let indx = 0; indx < myData.length; indx++) {

        let myOutdoorUnit = myData[indx].components[0].title;
        if (myCardObj[myOutdoorUnit]) {
            myCardObj[myOutdoorUnit][myCardObj[myOutdoorUnit].length] = myData[indx];
        } else {
            myCardObj[myOutdoorUnit] = [];
            myCardObj[myOutdoorUnit][0] = myData[indx];
        }

    }

    return myCardObj;

}


//
function bestRow(myRows) {

    return myRows[0];

}


//
function card(myRows) {

    //
    function cardComponents(bestRow) {

        //
        function componentOptions(componentType) {

            //
            function isNewOption(existingOptions, potentialNewOption) {

                for (let indz = 0; indz < existingOptions.length; indz++) {
                    if (existingOptions[indz].title == potentialNewOption.title) {
                        return false;
                    }
                }

                return true;

            }

            //
            let myOptions = [];
            for (let indx = 0; indx < myRows.length; indx++) {
                for (let indy = 0; indy < myRows[indx].components.length; indy++) {
                    if (myRows[indx].components[indy].componentType == componentType  &&  isNewOption(myOptions, myRows[indx].components[indy])) {
                        myOptions[myOptions.length] = myRows[indx].components[indy];
                        break;
                    }
                }
            }

            return myOptions;

        }

        //
        let myHandlers = [];
        myHandlers[change] = function(e) {
            let newBestRow = bestRow(myRows, mySelections);
            return card(myRows, newBestRow);
        }

        //
        let myComponents = [];
        for (let indz = 0; indz < bestRow.components.length; indz++) {
            myComponents[indz] = {
                value: bestRow.components[indz],
                options: componentOptions(bestRow.components[indz].componentType)
            }
        }

        return myComponents;
    }



    function updateHandler() {
        return function(e) {

        };
    }

    // 
    let myBestRow = bestRow(myRows);

    //
    let someCardContent = {

        components: cardComponents(myBestRow),
        ARHIRatings: myBestRow.AHRIRatings

    };


    let someObj = {


    }

    return someCardContent;

}


//
function cards(myCardObj) {

    let myCards = [];
    let indx = 0;

    for (let key in myCardObj) {
        if (myCardObj.hasOwnProperty(key)) {
            myCards[indx] = card(myCardObj[key]);
            indx++;
        }
    }

    return myCards
}

