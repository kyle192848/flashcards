var amp;
var level;
var song;
var cnv;
var picture;


function preload(){
	song = loadSound('audio/2-12 流水.m4a');
	picture = loadImage('images/郭熙早春圖.jpg')


}


function setup(){


 	cnv = createCanvas(windowWidth,windowHeight);
 	background(255);

 	

 	song.play();

 	amp = new p5.Amplitude();

 	
 	cnv.mousePressed(toggleSound);


 }

 function draw(){
 	background(0)
 	var level = amp.getLevel();

 	var stretch = map(level,0,1,0,300);

 	// translate(width/2,height/2);
 	// imageMode(CENTER);
 	image(picture,0, -1400 - stretch,0,0);

 	console.log(stretch);

 	// picture.resize(width,height);

 }

 function toggleSound(){
 	if (!song.isPlaying()){
 		song.play();
 	} else { song.pause()};
 }
