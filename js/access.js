//select the div "access" and append the visualisation workspace called "svg"
var selector = d3.select("#access");
var svg = selector.append("svg")
    .attr("height", screen.height/3)
    .attr("width", screen.width/2)
    .style("position", "absolute")
    .style("z-index", "10");

//important action position
var step=1;
//red#F44336 the main colour of the visualisation

//workspace frame
var rect = svg.append("rect")
    .attr("x", 5)
    .attr("y", 5)
    .attr("width", screen.width/2-10)
    .attr("height", screen.height/3-10)
    .attr("fill-opacity", 0)
    .attr("rx", 10)
    .attr("stroke-width", 2)
    .attr("stroke", "#e5e2e0");

//click to start image
var beginImage = svg.append("image")
    .attr("id", "beginImage")
    .attr("x", function(d){ return (screen.width/2-150)/2;})
    .attr("y", function(d){ return (screen.height/3-150)/2;})
    .attr("width", 150)
    .attr("height", 150)
    .attr("xlink:href", "bin/doctor.png")
    .on("mouseover", function(d){ d3.select("#beginText").attr("fill","#F44336");
				  d3.select("#beginImage").attr("xlink:href", "bin/doctor2.png");})
    .on("mouseout", function(d) { d3.select("#beginText").attr("fill","black");
				  d3.select("#beginImage").attr("xlink:href", "bin/doctor.png");})
    .on("click", function(d) { begin();});

//click to start text 
var beginText = svg.append("text")
    .attr("id", "beginText")
    .attr("x", function(d){return (screen.width/2)/2-100;})
    .attr("y", function(d){ return ((screen.height/3)/2+100);})
    .text("Click to start")
    .attr("font-family", "Sans")
    .attr("font-size", "30px")
    .attr("fill", "black")
    .on("mouseover", function(d){ d3.select("#beginText").attr("fill","#F44336");
 				   d3.select("#beginImage").attr("xlink:href", "bin/doctor2.png");})
    .on("mouseout", function(d) {  d3.select("#beginText").attr("fill","black");
				   d3.select("#beginImage").attr("xlink:href", "bin/doctor.png");})
    .on("click", function(d) { begin();});


function writeText(input,textSize,textWidth,textHeight){
    var info=svg.append("text")
	.attr("id", "info")
	.attr("x", function(d){return (screen.width/2)/2-textWidth;})
	.attr("y", function(d){return ((screen.height/3)-20-textHeight);})
    .text(input)
    .attr("font-family", "Sans")
    .attr("font-size", textSize)
    .attr("fill", "#F44336");
    
}
//initiate the visualisation
function begin(){
    //remove the click to start elements
    d3.select("#beginText").remove();
    d3.select("#beginImage").remove();

    //place a loading image - currently for aesthetic purposes
    var loadImage = svg.append("image")
	.attr("id", "loadImage")
	.attr("x", function(d){ return (screen.width/2-40)/2;})
	.attr("y", function(d){ return (screen.height/3-40)/2;})
	.attr("width", 40)
	.attr("height", 40)
	.attr("xlink:href", "bin/loader.gif").transition().duration(1000).remove();

    
    /* Some test code for drawing a unit map of data
    for(i=0; i<10; i++){
	for(j=0; j<10; j++){
	    if(((i*10)+j)<percentage){
		var circle = svg.append("circle")
		    .attr("cx", 50+(i*30))
		    .attr("cy", 50+(j*30))
		    .attr("r", 5)
		    .attr("fill", "red")
	    }
	    else {
		var circle = svg.append("circle")
		    .attr("cx", 50+(i*30))
		    .attr("cy", 50+(j*30))
		    .attr("r", 5)
		    .attr("fill", "blue")
	    }
	    
	    }
	}
    focalGraph(2,8,25,"red");
    focalGraph(6,8,25,"yellow");
    focalGraph(10,8,25,"green");
    focalGraph(14,8,25,"cyan");
    focalGraph(0,0,0,"white");
    */
    
    step1();
   
    
  

 
    
    
 
    
}



function step1(){
    d3.selectAll("#info").remove();
    d3.selectAll("#focalGraph").remove();
    d3.select("#backButton").remove();
    d3.select("#nextButton").remove();
    nextButton();
    writeText("There are some serious problems",30,250,25);
    writeText("with health care access in New Zealand",30,300,0);
    focalGraph(1,1,1000,"#F44336",3,0);
}

function step2(){
    d3.selectAll("#info").remove();
    d3.selectAll("#focalGraph").remove();
    d3.select("#nextButton").remove();
    d3.select("#backButton").remove();
    backButton();
    nextButton();
    writeText("Compared to the general population, ",30,300,60);
    writeText("New Zealand's most vulnerable are challenged",30,380,30);
    writeText("with systematic disparities in health care access",30,400,0);
    focalGraph(7,7,250,"#F44336",4,0); 
    focalGraph(8,7,100,"black",2,10);
    focalGraph(6,7,80,"lightblue",2,10);
    
  
  
}

function step3(){
    
    d3.selectAll("#info").remove();
    d3.selectAll("#focalGraph").remove();
    d3.select("#nextButton").remove();
    d3.select("#backButton").remove();
    backButton();
    nextButton();
    
    writeText("In a town of 1000 Maori prescribed medication,",20,250,30);
    writeText("126 Maori would not be able to afford to pick up their prescriptions",20,350,0)
    focalGraph(3,4,(1000-126)/2,"#F44336",4,0);
    focalGraph(5,4,(126/2),"black",4,0);
}

function step4(){
    
    d3.selectAll("#info").remove();
    d3.selectAll("#focalGraph").remove();
    d3.select("#nextButton").remove();
    d3.select("#backButton").remove();
    backButton();
    nextButton();
    
    writeText("In a town of 1000 peoples of Pacific origin,",20,250,30);
    writeText("157 would not be able to afford to pick up their prescriptions",20,350,0)
    focalGraph(3,4,(1000-126)/2,"#F44336",4,0);
    focalGraph(5,4,(126/2),"lightblue",4,0);
}
function step5(){
    
    d3.selectAll("#info").remove();
    d3.selectAll("#focalGraph").remove();
    d3.select("#nextButton").remove();
    d3.select("#backButton").remove();
    backButton();
    nextButton();
    
    writeText("Yet for others in that same town, Maori and those of Pacific origin",20,350,30);
    writeText("are 3 and 3.7 times less likely to be able to afford their prescriptions",20,365,0)
    focalGraph(7,9,126,"black",4,0);
    focalGraph(9,9,42,"#F44336",4,0);
    focalGraph(11,9,157,"lightblue",4,0);
}
function step6(){
    
    d3.selectAll("#info").remove();
    d3.selectAll("#focalGraph").remove();
    d3.select("#nextButton").remove();
    d3.select("#backButton").remove();
    backButton();

    var logo=svg.append("image")
	.attr("id", "info")
	.attr("x", function(d){ return (screen.width/2-250)/2;})
	.attr("y", function(d){ return (screen.height/3-250)/2;})
	.attr("width", 250)
	.attr("height", 250)
	.attr("xlink:href", "bin/generatedlink.png")
	.on("mouseover", function(d){  d3.select("body").style("cursor", "grab");})
	.on("mouseout", function(d){ d3.select("body").style("cursor", "default");})
	.on("click", function(d) {window.location= "http://medcorp.co.nz"});
    writeText("Awareness if the first step to solving social inequalities and",20,300,30);
    writeText("injustices throughout the world; head over to medcorp.co.nz to learn more",20,400,0);
    
   
}



/*
  splitnumber is the sequence in the split
  totalnumber is the total number of sequences in the data
  number is the number of circles to represent the population
  e.g. four populations, wanting to draw the second population with 30 members
  the function to call would be focalGraph(2,4,30,someColour);
*/
function focalGraph(splitnumber,totalnumber,number,colour,radi,tnum){
    
    var svg2 = svg.append("svg")
	.attr("id","focalGraph")
	.attr("height", screen.height/3)
	.attr("width", screen.width/2)
	.style("position", "absolute");
    
    var width = screen.width/2-40,
	height = screen.height/3-40;

    var n = number,
	m = 1,
	padding = 6,
	radius = d3.scale.sqrt().range([0, 12]),
	x = d3.scale.ordinal().domain(d3.range(m)).rangePoints([0, width], 1),
        y = d3.scale.ordinal().domain(d3.range(m)).rangePoints([0, width], 1);

    var nodes = d3.range(n).map(function () {
	var i = Math.floor(Math.random() * m); //color
        return {
	    radius: radi,
	    colour: colour,
	    cx: ((width/2)/totalnumber)*splitnumber,
	    cy: height/2,
	};

    });

    var force = d3.layout.force()
	.nodes(nodes)
	.size([width, height])
	.gravity(0)
	.charge(tnum)
	.on("tick", tick)
	.start();

    var circle = svg2.selectAll("circle")
	.data(nodes)
	.enter().append("circle")
	.attr("r", function (d) {
	    return d.radius;
	})
	.style("fill", function (d) {
	    return d.colour;
	})
	.call(force.drag);

    function tick(e) {
	circle.each(gravity(.2 * e.alpha))
            .each(collide(.5))
		.attr("cx", function (d) {
		    return d.x;
		})
            .attr("cy", function (d) {
		return d.y;
	    });
    }

    // Move nodes toward cluster focus.
    function gravity(alpha) {
	return function (d) {
            d.y += (d.cy - d.y) * alpha;
            d.x += (d.cx - d.x) * alpha;
	};
    }

    // Resolve collisions between nodes.
    function collide(alpha) {
	var quadtree = d3.geom.quadtree(nodes);
	return function (d) {
            var r = d.radius + radius.domain()[1],
		nx1 = d.x - r,
		nx2 = d.x + r,
		ny1 = d.y - r,
		ny2 = d.y + r;
            quadtree.visit(function (quad, x1, y1, x2, y2) {
		if (quad.point && (quad.point !== d)) {
                    var x = d.x - quad.point.x,
			y = d.y - quad.point.y,
			l = Math.sqrt(x * x + y * y),
			r = d.radius + quad.point.radius + (d.color !== quad.point.color);
                    if (l < r) {
			l = (l - r) / l * alpha;
			d.x -= x *= l;
			d.y -= y *= l;
			quad.point.x += x;
			quad.point.y += y;
                    }
		}
		return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
            });
	};
    }

}
function nextButton(){
    var nextButton = svg.append("image")
	.attr("id", "nextButton")
	.attr("x", function(d){ return (screen.width/2)/2+25;})
	.attr("y", function(d){ return ((screen.height/3)/3-125);})
	.attr("width", 75)
	.attr("height", 75)
	.attr("xlink:href", "bin/next1.png")
	.on("mouseover", function(d) { return d3.select("#nextButton").attr("xlink:href", "bin/next2.png")})
	.on("mouseout", function(d)  { return d3.select("#nextButton").attr("xlink:href", "bin/next1.png")})
	.on("click", function(d) {
	    if(step==1){
		step=step+1;
		step2();
	    }
	    else if(step==2){
		step=step+1;
		step3();
	    }
	    else if(step==3){
		step=step+1;
		step4();
	    }
	    else if(step==4){
		step=step+1;
		step5();
	    }
	    else if(step==5){
		step=step+1;
		step6();
	    }});
}

function backButton(){
    var nextButton = svg.append("image")
	.attr("id", "backButton")
	.style("z-index", "9")
	.attr("x", function(d){ return (screen.width/2)/2-125;})
	.attr("y", function(d){ return ((screen.height/3)/3-125);})
	.attr("width", 75)
	.attr("height", 75)
	.attr("xlink:href", "bin/back1.png")
    	.on("mouseover", function(d) { return d3.select("#backButton").attr("xlink:href", "bin/back2.png")})
	.on("mouseout", function(d)  { return d3.select("#backButton").attr("xlink:href", "bin/back1.png")})
	.on("click", function(d) {
	    if(step==1){
	    }
	    else if(step==2){
		step=step-1;
		step1();
	    }
	    else if(step==3){
		step=step-1;
		step2();
	    }
	    else if(step==4){
		step=step-1;
		step3();
	    }
	    else if(step==5){
		step=step-1;
		step4();
	    }
	    else if(step==6){
		step=step-1;
		step5();
	    }});
}
