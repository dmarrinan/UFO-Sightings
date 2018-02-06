//reference to html elements
var $tbody = document.querySelector("tbody");
var inputKeys = ['$dateTimeInput','$cityInput','$stateInput','$countryInput','$shapeInput'];
var inputs = {
    $dateTimeInput:document.getElementById("dateTimeInput"),
    $cityInput:document.getElementById("cityInput"),
    $stateInput:document.getElementById("stateInput"),
    $countryInput:document.getElementById("countryInput"),
    $shapeInput:document.getElementById("shapeInput"),
};


//list containing keys for dictionaries in dataset
var dataKeys = ["datetime","city","state","country","shape"];

var dataToRender = dataSet;

function renderTable(){
    //empty table
    $tbody.innerHTML = "";
    console.log("Rendering table...");
    
    //fill table
    for(var i=0; i<dataToRender.length; i++){
        var $row = $tbody.insertRow(i);
        for (var j=0; j<dataKeys.length; j++){
            var $cell = $row.insertCell(j);
            $cell.innerText = dataToRender[i][dataKeys[j]];
        }
    }
    console.log("Table Rendered!");
}

var filterSelectedColumn = function(value){
    key = this.filterKey;
    text = this.filterText;
    if(value[key]===text){
        return true;
    }
    else{
        return false;
    }
}

function filterData(){
    dataToRender = dataSet;
    console.log("Filtering data...");
    var filterKeyList = [];
    var filterTextList = [];

    //find columns to filter and text to filter by
    for(var i=0;i<inputKeys.length;i++){
        filterText = inputs[inputKeys[i]].value.toLowerCase();
        if(filterText != ''){
            filterKeyList.push(dataKeys[i]);
            filterTextList.push(filterText);
        }
    }

    //filter for each column specified
    for(var i=0;i<filterKeyList.length;i++){
        var filterObject = {
            filterKey:filterKeyList[i],
            filterText:filterTextList[i]
        };
        console.log(`Filtering by ${filterObject.filterKey}...`)
        dataToRender = dataToRender.filter(filterSelectedColumn,filterObject);
    }

    console.log("Data filtered!");
    
    //render table
    renderTable();
}

function resetFilters(){
    for(var i=0;i<inputKeys.length;i++){
        inputs[inputKeys[i]].value = '';
    }
    dataToRender = dataSet;
    console.log("Clearing filters!")
    renderTable();
}

//render table when first loading the page
renderTable();