 
 song = "";
 song2 = "";

 leftWristX = 0;
 leftWristY = 0;

 rightWristX = 0;
 rightWristY = 0;
 
 scoreLeftWrist = 0;
 scoreRightWrist = 0;

 function preload() {
song = loadSound("music.mp3");
song2 = loadSound("music2.mp3");

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
    song2.play();
    document.getElementById("song_name").innerHTML = "Song Name = Peter Pan Song";
    song.setVolume(1);
    song.rate(1);
}
function draw() {
    image(video,0,0,600,500);
    fill('#FF0000');
    stroke('#FF0000');
    if(scoreRightWrist >0.2)
{
    song2.play();
        circle(rightWristX, rightWristY, 20);
        document.getElementById("song_name").innerHTML = "Song Name = Peter Pan Song";
        song.setVolume(1);
        song.rate(1);
        song.stop();
}

    if(scoreLeftWrist>0.2) {
        song.play();
        circle(leftWristX, leftWristY, 20);
        document.getElementById("song_name").innerHTML = "Song Name = Free Fire Song";
        song.setVolume(1);
        song.rate(1);
        song2.stop();
     }
}
function gotPoses(results) {
    if(results.length >0 ){
        console.log(results);

        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("Score Right Wrist = " + scoreRightWrist + " Score Left Wrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + leftWristX + "Left Wrist Y = " +leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + rightWristX + "Right Wrist Y = " + rightWristY);
    }
}
