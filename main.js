noseX = 0;
noseY = 0;
differnce = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        differnce = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + differnce);
    }
}

function draw(){
    background('#808080');
    fill('#FFC0CB');
    stroke('#FFC0CB');
    square(noseX, noseY, differnce);
}




