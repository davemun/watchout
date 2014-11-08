// start slingin' some d3 here.
// var width = 240,
//     height = 125,
//     radius = 20;

// var drag = d3.behavior.drag()
//     .origin(function(d) { return d; })
//     .on("drag", dragmove);

// var svg = d3.select("body").append("div").selectAll("svg")
//     .data(


  // d3.(NUMS 0 TO 16)
  // .map(function() { return {x: width / 2, y: height / 2}; })
  // )



//   .enter().append("svg")
//     .attr("width", width)
//     .attr("height", height);


// function dragmove(d) {
//   d3.select(this)
//       .attr("cx", d.x = Math.max(radius, Math.min(width - radius, d3.event.x)))
//       .attr("cy", d.y = Math.max(radius, Math.min(height - radius, d3.event.y)));
// }

var gameBoard = d3.select("body").append("svg").attr("width", 900).attr("height", 500);
gameBoard.selectAll("image").data([0]).enter()
        .append("svg:image")
        .attr("xlink:href", "http://i.imgur.com/AOnWVjT.jpg")
        .attr("x", "0")
        .attr("y", "0")
        .attr("width", "900")
        .attr("height", "500")
        .classed("gameBoard", true);

var width = 240,
    height = 125,
    radius = 20;

var heroWidth = 15;
var heroHeight = 15;
var heroX = (width - heroWidth)/2;
var heroY = (height - heroHeight)/2;
var heroColor = 'yellow';

var drag = d3.behavior.drag()
.origin(function() {
var t = d3.select(this);
return {x: t.attr('x'), y: t.attr('y')};
})
.on('drag', dragmove);

var hero = gameBoard.append('rect')
.attr('x', heroX)
.attr('y', heroY)
.attr('width', heroWidth)
.attr('height', heroHeight)
.attr('fill', heroColor)
.call(drag);

function dragmove() {
d3.select(this).attr('x', d3.event.x)
.attr('y', d3.event.y);
}

var random = JSON.stringify(Math.floor(Math.random()*100));

var enemy = d3.select("svg").classed("enemy", true).append("svg:image")
        .attr("xlink:href", "http://imgur.com/6KjXC3q.png")
        .attr("x", random)
        .attr("y", random)
        .attr("width", "30")
        .attr("height", "30");

// var player = d3.select("svg").classed("player", true).append("svg:image")
//         .attr("xlink:href", "http://img3.wikia.nocookie.net/__cb20081004200429/mk_/images/f/f3/Scorpion-mk2-fix1.gif")
//         .attr("x", "20")
//         .attr("y", "20")
//         .attr("width", "90")
//         .attr("height", "90")
//         .attr("cx", function(d) { return d.x; })
//         .attr("cy", function(d) { return d.y; })
//         .call(drag);

var moveEnemy = function(){
  enemy.transition().attr("x", random).attr("y", random);
  setTimeout(moveEnemy2, 500);
}
var moveEnemy2 = function(){
  enemy.transition().attr("x", random).attr("y", random);
  setTimeout(moveEnemy, 500)
}
moveEnemy();


// .append("circle")
//  .attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "red");

 // enemy.selectAll("image").data([0]).enter()
 //        .append("svg:image")
 //        .attr("xlink:href", "http://imgur.com/6KjXC3q.png")
 //        .attr("x", "0")
 //        .attr("y", "0")
 //        .attr("width", "20")
 //        .attr("height", "20")



// d3.select("body").append("svg").attr("width", 50).attr("height", 50).classed("enemy", true).append("circle")
 //.attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "black");











// /*
// var svg = d3.select("body").append("svg")
//     .attr("width", width)
//     .attr("height", height)
//   .append("g")
//     .attr("transform", "translate(32," + (height / 2) + ")");
// */



// //http://mbostock.github.io/d3/talk/20111018/collision.html

// // var bodySelection = d3.select("body");
// // var svgSelection = bodySelection.append("svg")
// //                                 .attr("width", 50)
// //                                 .attr("height", 50);
// // var circleSelection = svgSelection.append("circle")
// //                                    .attr("cx", 25)
// //                                    .attr("cy", 25)
// //                                    .attr("r", 25)
// //                                    .style("fill", "black");
// d3.select("body").append("svg").attr("width", 50).attr("height", 50).classed("enemy", true).append("circle")
//  .attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "black");



// var circleRadii = [40, 20, 10];

// var svgContainer = d3.select("body").append("svg").attr("width", 200).attr("height", 200);

// var circles = svgContainer.selectAll("circle").data(circleRadii).enter().append("circle");

// //console.log(d3.select("body").append("svg").attr("width", 200).attr("height", 200).selectAll("circle").data(circleRadii).enter().append("circle"));

// var circleAttributes = circles
//                        .attr("cx", 50)
//                        .attr("cy", 50)
//                       .attr("r", function (d) { return d; })
//                        .style("fill", "green");