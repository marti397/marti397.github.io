// SVG drawing area
var margin = {top: 40, right: 40, bottom: 60, left: 60};
var width = 600 - margin.left - margin.right,
		height = 500 - margin.top - margin.bottom;
var svg = d3.select("#chart-area").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Date parser (https://github.com/mbostock/d3/wiki/Time-Formatting)
var formatDate = d3.time.format("%Y");

// Initialize data
loadData();

//Initialize tooltip
tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0]);

// FIFA world cup data
var data;

//X and Y Scale functions
var x = d3.time.scale()
    .range([0, width]);
var y = d3.scale.linear()
    .range([height, 0]);

//X and Y axis
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

//append a group element to the SVG drawing area for the x-axis
var xAxisGroup =  svg.append("g")
.attr("transform", "translate(0," + (height) + ")")
.attr("class", "axis x-axis x-axis-barchart");

//append a group element to the SVG drawing area for the y-axis
var yAxisGroup = svg.append("g")
.attr("class", "axis y-axis");

//Drawing the line
var line = d3.svg.line()
.interpolate("monotone");

//append a path element to the SVG drawing area for the line
var linePath = svg.append("path")
.attr("class", "line");

//event listener to update bar chart
d3.select("#ranking-type").on("change", updateVisualization);

// Load CSV file
function loadData() {
	d3.csv("data/fifa-world-cup.csv", function(error, csv) {

		csv.forEach(function(d){
			// Convert string to 'date object'
			d.YEAR = formatDate.parse(d.YEAR);
			
			// Convert numeric values to 'numbers'
			d.TEAMS = +d.TEAMS;
			d.MATCHES = +d.MATCHES;
			d.GOALS = +d.GOALS;
			d.AVERAGE_GOALS = +d.AVERAGE_GOALS;
			d.AVERAGE_ATTENDANCE = +d.AVERAGE_ATTENDANCE;
		});

		// Store csv data in global variable
		data = csv;
        
		// Draw the visualization for the first time
		updateVisualization();
	});
}

// Render visualization
function updateVisualization() {	
    var selectedValue = d3.select("#ranking-type").property("value");
    
    //Get time period ﬁlter values
    var lowerBound = document.getElementById("lowerBound").value;
    var upperBound = document.getElementById("upperBound").value;
    var lb = "";
    var ub = "";
    if (lowerBound>=1930 && lowerBound<=2014 && upperBound!=""){
        lb = lowerBound;
    }else{
        lb = "1930";
    }
    if (upperBound<=2014 && upperBound>=1930 && lowerBound!=""){
        ub = upperBound;
    }else{
        ub = "2014";
    }
    
    //filtered data
    var newData = data.filter(function(d) { return (d.YEAR >= formatDate.parse(lb) && d.YEAR <= formatDate.parse(ub)) })
    
    //setting the domains
    x.domain(d3.extent(newData, function(d) { return d.YEAR; }));
    y.domain([0,d3.max(data,function(d){return d[selectedValue];})])
    
    //line coordinates updated
    line.x(function(d) { return x(d.YEAR); })
    line.y(function(d) { return y(d[selectedValue]); });
    
    //Appending the line to the svg canvas
    svg.select(".line")
        .datum(newData)
        .transition()
        .duration(800)
        .attr("d", line);
    
    // Update x-axis by calling the axis function
    svg.select(".x-axis")
        .transition()
        .duration(800)
        .call(xAxis);
    // Update y-axis by calling the axis function
    svg.select(".y-axis")
        .transition()
        .duration(800)
        .call(yAxis);    
    
    //calling the tooltip
    tip.html(function(d) { 
        return formatDate(d.YEAR) + " FIFA World Cup " + d.LOCATION + "<br>" + selectedValue + ": " + d[selectedValue]; 
    });
    svg.call(tip);
    
    // Data-join circles (circle now contains the update selection)
    var circle = svg.selectAll("circle")
        .data(newData);
   
    // Enter (initialize the newly added elements)
    circle.enter().append("circle")
        .attr("class", "dot")
        .attr("fill", "orange")
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
        .on('click',showEdition);
   
    // Update (set the dynamic properties of the elements)
    circle
        .transition()
        .duration(800)
        .attr("r", 6)
        .attr("cx", function(d) { return x(d.YEAR); })
        .attr("cy", function(d) { return y(d[selectedValue]); });
   
    // Exit
    circle.exit().remove();
}

// Show details for a specific FIFA World Cup
function showEdition(d){
    d3.select(".main-title").text(formatDate(d.YEAR) + " FIFA World Cup " + d.LOCATION);
    d3.select(".wc-winner").text(d.WINNER);
    d3.select(".wc-goals").text(d.GOALS);
    d3.select(".wc-avg-goals").text(d.AVERAGE_GOALS);
    d3.select(".wc-matches").text(d.MATCHES);
    d3.select(".wc-teams").text(d.TEAMS);
    d3.select(".wc-attendance").text(d.AVERAGE_ATTENDANCE);
}