//reference to table body
var $tbody = document.querySelector("tbody");

//list containing keys for dictionaries in dataset
var dataKeys = ["datetime","city","state","country","shape"];

function renderTable(){
    //empty table
    $tbody.innerHTML = "";
    
    //fill table
    for(var i=0; i<dataSet.length; i++){
        var $row = $tbody.insertRow(i);
        for (var j=0; j<dataKeys.length; j++){
            var $cell = $row.insertCell(j);
            $cell.innerText = dataSet[i][dataKeys[j]];
        }
    }
}

renderTable();