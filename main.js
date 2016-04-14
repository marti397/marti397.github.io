var margin = {top: 20, right: 80, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


d3.select("#myCheck").on("change", updateVisualization);

var globalData;

var checkValue;
//date parser
var parseDate = d3.time.format("%m%d%Y").parse;
var format = d3.time.format("%m/%d/%Y");

var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.category10();

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .interpolate("basis")
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.gdp); });

var lineTwo = d3.svg.line()
    .interpolate("basis")
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.budget); });

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("data/finalLineChart.csv", function(error, data) {
  if (error) throw error;
    console.log(data);
    
    data.forEach(function(d){
			// Convert string to 'date object'
			//d.year = formatDate.parse(d.YEAR);
            d.date = format.parse(d.date)
			//var format = d3.time.format("%m/%d/%Y");
        //console.log(format.parse("1/1/1986")); // returns a Date
			// Convert numeric values to 'numbers'
			d.gdp = +d.gdp;
            d.budget = +d.budget;
		});
    console.log(data);
    globalData = data
    x.domain(d3.extent(data, function(d) { return d.date; }));
    //y.domain(d3.extent(data, function(d) { return d.gdp; }));
    
    y.domain([-20,20])
    
    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Percentage (%)");

    updateVisualization();
  });
function updateVisualization() {
    //console.log("Hola")
//$( "input" ).click(function() {
    checkValue = $("#myCheck").is(":checked");
    if (checkValue === true){
        console.log("This thing is true")
        //d3.select("lineTwo").append();
        svg.append("path")
      .datum(globalData)
      .attr("class", "lineTwo")
      .attr("d", lineTwo);
    }else{
        console.log("This thing is false")
        d3.select("path.lineTwo").remove();
    }
  
//});
    
    svg.append("path")
      .datum(globalData)
      .attr("class", "line")
      .attr("d", line);
    
    //svg.append("path")
     // .datum(globalData)
      //.attr("class", "lineTwo")
      //.attr("d", lineTwo);
}