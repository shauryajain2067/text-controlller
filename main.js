left_wrist_x=0;
right_wrist_x=0;
difference=0;
function setup(){
canvas=createCanvas(550,500);
canvas.position(560,150);
video=createCapture(VIDEO);
video.size(550,500);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("posenet is initilized");

}

function gotPoses(results){
if(results.length > 0){
console.log(results);
left_wrist_x=results[0].pose.leftWrist.x;
right_wrist_x=results[0].pose.rightWrist.x;
console.log("left wrist x is " + left_wrist_x + " right wrist x is " + right_wrist_x);
difference= floor(left_wrist_x-right_wrist_x);

}
}

function draw(){
    background("red");
    document.getElementById("span").innerHTML=difference + " px";
    textSize(difference);
    fill("green");
    text("SHAURYA JAIN",50,300);
}