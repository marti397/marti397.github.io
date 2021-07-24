// --> CREATE SVG DRAWING AREA
/*var width = 1000,
    height = 600;
var svg = d3.select("#map-area").append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("margin", "10px auto");*/

// SVG drawing area
var marginMap = {top: 40, right: 40, bottom: 60, left: 60};
var width = 1000 - marginMap.left - marginMap.right,
		height = 600 - marginMap.top - marginMap.bottom;
var svg = d3.select("#map-area").append("svg")
		.attr("width", width + marginMap.left + marginMap.right)
		.attr("height", height + marginMap.top + marginMap.bottom)
	.append("g")
		.attr("transform", "translate(" + marginMap.left + "," + marginMap.top + ")");

//global variable for malaria data and map data
var malariaData;
var world;

//event listener to update the map
d3.select("#ranking-type").on("change", updateChoropleth);

//geo projection and path
var projection = 
    d3.geo.mercator()
    .center([0, 5 ])
    .scale(400)
    .translate([width / 2, height / 2]);
    
var path = d3.geo.path()
.projection(projection);

//color scale for the map
var color = d3.scale.threshold()
.range(["#ffffb2", "#fecc5c", "orange", "#f03b20", "#bd0026"]);

//Initialize tooltip
tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0]);

// Use the Queue.js library to read two files
queue()
  .defer(d3.json, "data/africa.topo.json")
  .defer(d3.csv, "data/global-malaria-2015.csv")
  .await(function(error, mapTopoJson, malariaDataCsv){
    // --> PROCESS DATA
    malariaDataCsv.forEach(function(d){
			// Convert numeric values to 'numbers'
            d.UN_population = +d.UN_population
            d.At_risk = +d.At_risk
            d.At_high_risk = +d.At_high_risk
            d.Suspected_malaria_cases = +d.Suspected_malaria_cases
            d.Malaria_cases = +d.Malaria_cases
		});
    
    //filtering only African countires
    malariaDataCsv = malariaDataCsv.filter(function(value,index){
       return (value.WHO_region==="African") 
    });
    
    // Store csv data in global variable to use in updateChoropleth() function
    malariaData = malariaDataCsv;
    
    // Visualize map using loaded africa topojson
    world = topojson.feature(mapTopoJson, mapTopoJson.objects.collection).features
    
    // Update choropleth
    updateChoropleth();
  });

//domains for the color codes
var Malaria_cases_domain = [100000, 1000000, 10000000, 25000000];
var UN_population_domain = [1000000, 10000000, 50000000, 100000000];
var At_risk_domain = [20,40,60,80];
var At_high_risk_domain = [20,40,60,80];
var Suspected_malaria_cases_domain = [100000, 1000000, 10000000, 25000000];

//domains for the legend
var ext_Malaria_cases_domain = [0, 100000, 1000000, 10000000, 25000000];
var ext_UN_population_domain = [0, 1000000, 10000000, 50000000, 100000000];
var ext_At_risk_domain = [0, 20,40,60,80];
var ext_At_high_risk_domain = [0, 20,40,60,80];
var ext_Suspected_malaria_cases_domain = [0, 100000, 1000000, 10000000, 25000000];

var ext_color_domain;

//legend labels
var legend_labels_Malaria_cases_domain = ["< 100,000", "100,000+", "1,000,000+", "10,000,000+", "> 25,000,000"];
var legend_labels_UN_population_domain = ["< 1,000,000", "1,000,000+", "10,000,000+", "50,000,000+", "> 100,000,000"];
var legend_labels_At_risk_domain = ["< 20%", "20%" , "40%", "60%" , "> 80%"];
var legend_labels_At_high_risk_domain = ["< 20%", "20%" , "40%", "60%" , "> 80%"];
var legend_labels_Suspected_malaria_cases_domain = ["< 100,000", "100,000+", "1,000,000+", "10,000,000+", "> 25,000,000"];

var legend_labels;

//width and lenght of legend squares
var ls_w = 20, ls_h = 20;

//legend for countries with no data
svg.append("rect").attr("x",20).attr("y",200).attr("width", ls_w).attr("height", ls_h).style("fill","#adfcad");

function updateChoropleth() {
    //selected value from the combo box
    var selectedValue = d3.select("#ranking-type").property("value");

    // --> Choropleth implementation
   
    // Setting color domains(intervals of values) for our map
    switch(selectedValue){
        case "Malaria_cases":
            color.domain(Malaria_cases_domain)
            ext_color_domain = ext_Malaria_cases_domain;
            legend_labels = legend_labels_Malaria_cases_domain;
            break;
        case "UN_population":
            color.domain(UN_population_domain)
            ext_color_domain = ext_UN_population_domain;
            legend_labels = legend_labels_UN_population_domain;
            break;
        case "At_risk":
            color.domain(At_risk_domain)
            ext_color_domain = ext_At_risk_domain;
            legend_labels = legend_labels_At_risk_domain;
            break;
        case "At_high_risk":
            color.domain(At_high_risk_domain)
            ext_color_domain = ext_At_high_risk_domain;
            legend_labels = legend_labels_At_high_risk_domain;
            break;
        case "Suspected_malaria_cases":
            color.domain(Suspected_malaria_cases_domain)
            ext_color_domain = ext_Suspected_malaria_cases_domain;
            legend_labels = legend_labels_Suspected_malaria_cases_domain;
            break;
        default:
            console.log("ERROR");
    }
    
    var malariaById ={};
    //TOOLTIP
    var nameById = {};
    
    //selected data
    malariaData.forEach(function(d){
        malariaById[d.Code] = +d[selectedValue];
        //TOOLTIP
        nameById[d.Code] = d.Country;

    });
    
    //calling the tooltip
    tip.html(function(d) {
        if ( isNaN(malariaById[d.properties.adm0_a3_is])==true || malariaById[d.properties.adm0_a3_is]==undefined){
            return "NO DATA";
        }else if(selectedValue=='At_risk' || selectedValue=="At_high_risk"){
            return (nameById[d.properties.adm0_a3_is] + " : " + malariaById[d.properties.adm0_a3_is] + "%");
        }else{
            return (nameById[d.properties.adm0_a3_is] + " : " + malariaById[d.properties.adm0_a3_is].toLocaleString('en')); 
        }
    });
    svg.call(tip);
        
    // Render the U.S. by using the path generator using the enter-update-exit sequence
    var choropleth = svg.selectAll("path")
    .data(world);
    
    choropleth.enter().append("path")
        .attr("d", path)
        .on('mouseover', function(d){
           d3.select(this)
               .style("stroke-width",3)
           tip.show(d)
        })
        .on('mouseout', function(d){
            d3.select(this)
                .style("stroke-width",1)
            tip.hide(d)
        });
    
    choropleth
        .transition()
        .duration(800)
        .style("fill", function(d) {
            return color(malariaById[d.properties.adm0_a3_is]); 
        });
     
    //REMOVE CHOROPLETH
    choropleth.exit().remove();

    //Adding color legend for the Choropleth map 
    var legend = svg.selectAll("g.legend")
        .data(ext_color_domain)
    .enter().append("g")
        .attr("class", "legend")
    .append("rect")
        .attr("x", 20)
        .attr("y", function(d, index){ return 350 - (index*ls_h) - 2*ls_h;})
        .attr("width", ls_w)
        .attr("height", ls_h)
        .style("fill", function(d, index) { return color(d); });
    
    //Ading text legend using the enter-update-exit sequence
    var legendText = svg.selectAll("text")
        .data(legend_labels);
    // Enter (initialize the newly added elements)
    legendText.enter().append("text")
        .attr("class", "textLegend")
        .attr("x", 50)
        .attr("y", function(d, index){ return 350 - (index*ls_h) - ls_h - 4;});
    // Update (set the dynamic properties of the elements)
    legendText
        .transition()
        .duration(800)
        .text(function(d, index){ return legend_labels[index]; });  
    // Exit
    legendText.exit().remove();
    
    svg.append("text").attr("class", "textLegend").attr("x",50).attr("y",215).text("NO DATA");
}