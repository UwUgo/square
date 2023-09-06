noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftwristX=0;



function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);

    canvas=createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded() {
    concole.log('PoseNet is initialized!');
}


function gotPoses(results)
    {
        if(results.lenght > 0)
        {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.net.y;
            console.log("noseX = " + noseX +"noseY = " +noseY);
            
            



            leftwristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            diiference = floor(leftWristX - rightWrist);

            console.log("leftwristX = " + leftWristX + "rightWristX = "+rightWristX + "difference = " + difference);

        }
    }


    function draw() {
        background('#969A97');
        fill('#F90093');
        stroke('#f900093');
        square(noseX, noseY, difference);
    }