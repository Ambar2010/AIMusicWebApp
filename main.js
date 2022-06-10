 
 song = "";
 song2 = "";
 leftWristX = 0;
 leftWristY = 0;
 rightWristX = 0;
 rightWristY = 0;
 go = "1";

 function preload() {
song = loadSound("music.mp3");
song2 = loadSound("music2.mp3")
 }

 function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function modelLoaded() {
    console.log("PoseNet is Initizied");
}
function draw() {
    image(video,0,0,600,500);
}
function gotPoses(results) {
    if(results.length >0 ){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + leftWristX + "Left Wrist Y = " +leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + rightWristX + "Right Wrist Y = " + rightWristY);
    }
}
function play() {
if(go == "1") {
    song.play();
    song.setVolume(1);
    song.rate(1);
    document.getElementById("song_name").innerHTML = "Song Name = Free Fire Song";
}
if(go == "2") {
    song2.play();
    song.setVolume(1);
    song.rate(1);
    document.getElementById("song_name").innerHTML = "Song Name = Peter Pan Song";
}
}