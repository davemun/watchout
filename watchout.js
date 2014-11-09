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

var gameSettings = {
  gameHeight: 500,
  gameWidth: 900,
  heroWidth: 15,
  heroHeight: 15,
  nEnemies: 20
}

var gameBoard = d3.selectAll(".gameboard").append("svg").attr("width", 900).attr("height", 500);
gameBoard.selectAll("image").data([0]).enter()
        .append("svg:image")
        .attr("xlink:href", "http://i.imgur.com/AOnWVjT.jpg")
        .attr("x", "0")
        .attr("y", "0")
        .attr("height", gameSettings.gameHeight)
        .attr("width", gameSettings.gameWidth)
        //.classed("gameBoard", true)
        ;

var drag = d3.behavior.drag()
.origin(function() {
var t = d3.select(this);
return {x: t.attr('x'), y: t.attr('y')};
})
.on('drag', dragmove);

var hero = gameBoard.append('svg:image')
        .classed("player", true)
        .attr("xlink:href", "http://i.imgur.com/p06ZFiK.gif")
        .attr("x", gameSettings.gameWidth/2)
        .attr("y", gameSettings.gameHeight/2)
        .attr("width", "40")
        .attr("height", "40")
        .call(drag);

// var hero = gameBoard.append('circle').classed('player', true)
// .attr('cx', (240 - gameSettings['heroWidth'])/2)
// .attr('cy', (125 - gameSettings['heroHeight'])/2)
// .attr("r", 25)
// .attr('width', gameSettings['heroWidth'])
// .attr('height', gameSettings['heroHeight'])
// .attr('fill', heroColor)
// .call(drag);

function dragmove() {
d3.select(this).attr('x', d3.event.x)
.attr('y', d3.event.y);
}



 var enemies = gameBoard.selectAll("enemy")
        .data(d3.range(gameSettings.nEnemies))
        .each(setPosition)
        .enter()
        .append("svg:image")
        .attr("class", "enemy")
        //.attr("transform", "rotate(45)")
        //.attr("transform", "rotate(-60, 150, 130")
        //.attr("xlink:href", "starGif.gif")
        .attr("xlink:href", "http://imgur.com/6KjXC3q.png")
        // .attr("x", random(gameSettings.gameWidth))
        // .attr("y", random(gameSettings.gameHeight))
        .attr("width", "30")
        .attr("height", "30")
        ;
 
 function setPosition(){
  d3.select(this)
  .attr("x", random(gameSettings.gameWidth))
  .attr("y", random(gameSettings.gameHeight));
 }

//=============================================================

function spinStars(){
  enemies.each(spinStar);
}

// function spinStar(){
//   debugger;
//   d3.select(this).attr("transform", "rotate(40)");
//     //"+(d3.select(this).attr("x") - (d3.select(this).attr("width")/2))+", "+(d3.select(this).attr("y") - (d3.select(this).attr("height")/2))+")" );
// }

// spinStars();

//================
//move enemies/stars
function random(gameParameter){
  return JSON.stringify(Math.floor(gameParameter * Math.random()))
};
var moveEnemies2 = function(){
  enemies.each(moveEnemy);
}
var moveEnemy = function(enemy){
  d3.select(this).transition().duration(2000).attr("x", random(gameSettings.gameWidth)).attr("y", random(gameSettings.gameHeight))
  .each('end', function(){ moveEnemies2(enemies) });
}

moveEnemies2();


//==================
setInterval(updateScore, 50);

  function updateScore(){
    var currentScore = d3.select('.current').select('span');
    currentScore.text(Number(currentScore.text())+1);
  }

function collisionCheck(enemy, collideCallback){
  var player = d3.select('.player');
  enemy.each( function(enemy){
    var radiusSum = parseFloat(player.r - enemy.r);
    xDiff = parseFloat(enemy.attr('cx')) - player.cx;
    yDiff = parseFloat(enemy.attr('cy')) - player.cy;

    separation = Math.sqrt( Math.pow(xDiff,2) + Math.pow(yDiff,2) );
    if (separation < radiusSum){
      collideCallback(player, enemy);
    };
  });

  function collideCallBack (player, enemy){
    updateBestScore()
    d3.select('.current').select('span').text(0);
    updateScore();  //update score sets score to 
  }




  function updateBestScore(){
    var bestScore = d3.select('.high').select('span');
    bestScore.text(d3.select('.current').select('span').text());
  }







}