// from data.js
var tableData = data;

//02-Stu_D3_Select
var tbody = d3.select("tbody");

tableData.forEach((ufosighting) => {
    console.log(ufosighting);
    var row = tbody.append('tr');

    Object.entries(ufosighting).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

//04-Ins_Event_Listeners
var button = d3.select("#filter-btn");

button.on("click", function() {

d3.select("tbody").html("");

d3.event.preventDefault();

var inputfield = d3.select("#datetime").property("value");
console.log(inputfiled);

var filteredData = tableData.filter(ufosighting => ufosighting.datetime === inputfield);
console.log(filteredData);

filteredData.forEach((ufosighting) => {
    var row = tbody.append('tr');

    Object.entries(ufosighting).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

}); 
