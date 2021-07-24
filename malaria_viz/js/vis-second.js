var margin = {top: 40, right: 50, bottom: 20, left: 5},
	widthTree = 600 - margin.right - margin.left,
	heightTree = 400 - margin.top - margin.bottom;

var i = 0;

var tree = d3.layout.tree().size([widthTree, heightTree]); 

var diagonal = d3.svg.diagonal()
	.projection(function(d) { return [d.x, d.y]; });

var svgTwo = d3.select("#tree-area").append("svg")
	.attr("width", widthTree + margin.right + margin.left)
	.attr("height", heightTree + margin.top + margin.bottom)
  .append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("data/malaria-parasites.json", function(treeData){
    root = treeData[0];
    update(root);
})

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
	  links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 150; });

  // Declare the nodes
  var node = svgTwo.selectAll("g.node")
	  .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter the nodes.
  var nodeEnter = node.enter().append("g")
	  .attr("class", "node")
	  .attr("transform", function(d) { 
		  return "translate(" + d.x + "," + d.y + ")"; });

  nodeEnter.append("circle")
	  .attr("r", 8);

  nodeEnter.append("text")
	  .attr("y", function(d) { 
		  return d.children || d._children ? -18 : 18; })
	  .attr("dy", ".35em")
	  .attr("text-anchor", "middle")
	  .text(function(d) { return d.name; })
	  .style("fill-opacity", 1);

  // Declare the links
  var link = svgTwo.selectAll("path.link")
	  .data(links, function(d) { return d.target.id; });

  // Enter the links.
  link.enter().insert("path", "g")
	  .attr("class", "link")
	  .attr("d", diagonal);

}