const video = document.getElementById("myvideo");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let updateNote = document.getElementById("updatenote");

let imgindex = 1;
let isVideo = false;
let model = null;

let canvas01;
//these variables will hold the x and y coordinates froming from the models predictions
let x0 = 0;
let y0 = 0;

let p5CanvasWidth = 1280;
let p5CanvasHeight = 960;

let videoWidth = 640;
let videoHeight = 480;

function setup(){
  canvas01 = createCanvas(p5CanvasWidth, p5CanvasHeight);
  canvas01.parent('p5Canvas');
}

function draw(){
  background(83, 0,61);

  //Remap the coordinates from the width and height of the video to the width and heigh of hte p5Canvas
  let x1 = map(x0, 0, videoWidth, 0, p5CanvasWidth);
  let y1 = map(y0, 0, videoHeight, 0, p5CanvasHeight);

  rect(x1, y1, 20,20);
  noStroke();
  fill(255, 0, 186);
}

const modelParams = {
  flipHorizontal: true, // flip e.g for video
  maxNumBoxes: 20, // maximum number of boxes to detect
  iouThreshold: 0.5, // ioU threshold for non-max suppression
  scoreThreshold: 0.6, // confidence threshold for predictions.
};

function startVideo() {
  handTrack.startVideo(video).then(function (status) {
    console.log("video started", status);
    if (status) {
      updateNote.innerText = "Video started. Now tracking";
      isVideo = true;
      runDetection();
    } else {
      updateNote.innerText = "Please enable video";
    }
  });
}

function runDetection() {
  model.detect(video).then((predictions) => {
    // console.log("Predictions: ", predictions[0].label);
    if(predictions.length){
      console.log("Predictions: ", predictions[0].bbox);
      console.log("Predictions: ", predictions[0].label)
      //gives me top left
      predictions.forEach((element, index) => { 
        let currentLabel = predictions[index].label;
        //The co-ordinates of the hand will only change the x0 and y0 value if the hand is closed or closed
        if(currentLabel == 'point' || currentLabel == 'pinch' || currentLabel == 'closed'){
          x0 =  predictions[index].bbox[0].toFixed(2);
          y0 = predictions[index].bbox[3].toFixed(2);
        }
      });
      
      

    }
    model.renderPredictions(predictions, canvas, context, video);
    if (isVideo) {
      requestAnimationFrame(runDetection);
    }
  });
}

// Load the model.
handTrack.load(modelParams).then((lmodel) => {
  // detect objects in the image.
  model = lmodel;
  console.log(model);
  updateNote.innerText = "Loaded Model!";
  startVideo();
});
