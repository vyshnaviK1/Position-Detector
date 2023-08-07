let capture;
let myCanvas;
let posenet;

let singlePose, skeleton;

let glasses ;

function setup() {
    myCanvas = createCanvas(1280,650);   //creating a canvas
    glasses = loadImage('thug-life-sunglasses.png');


    let constraints = {
        video: {
          mandatory: {
            minWidth: 1280,
            minHeight: 650
          },
        },
      };
      capture = createCapture(constraints);
      capture.hide();

    posenet = ml5.poseNet(capture); //loading PoseNet from ml5
    posenet.on('pose',receivedPoses);
}

function receivedPoses(poses){
    console.log(poses);

    if(poses.length > 0){
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}

function draw() {

    // images and videos(webcam)
    // image(capture, 0, 0);

    image(capture, 0, 0, width, width * capture.height / capture.width);


    fill(0,0,255);

    if(singlePose){

        
        for(let i=0; i<singlePose.keypoints.length; i++){
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y,3);
        }
        stroke(0,0,255);
        strokeWeight(3);
        for(let j=0; j<skeleton.length; j++){
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
        }
        earWidth = singlePose.leftEar.x - singlePose.rightEar.x;
        image(glasses, singlePose.rightEar.x, singlePose.rightEar.y-(singlePose.rightEar.y-singlePose.rightEye.y),earWidth,earWidth  * glasses.height / glasses.width );
        
    }

    

    

}