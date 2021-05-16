# Handtrack.js

[Handtrack.js](https://victordibia.com/handtrack.js/#/) is a Javascript library that gives access to a machine learnng model that uses computer vision to detect and track hand movement. It supports 7 Supported Poses:
- open
- closed
- pinch
- point
- face
- pointtip
- pinchtip 

It works with still images and streamed video. I have put three projects in this folder which all use the minimised handtrack.js library that is in the lib folder.

There are two sample projects, remixes of the code from the the [Handtrack.js Github demo](https://github.com/victordibia/handtrack.js/tree/master/demo) index.html example.

To run locally you will need to start a python server.

Both examples track the face and hands. The hands predict open, closed, pinch and point.

The predicitons from the model are returned as an array of objects. There is an object for each element the model is predicting. E.g if the model predicts and head and open hand, there will be two elements in the array, one for the head and one for the open hand.

The key value pair in the object are:

- class
- label, face, open, closed ect
- score, the confidence prediction
- bbox, 4 coordinates for the bounding box

## fromHandtrackRemix.html
This is remixed to just work with streaming video, not still images. The javascript file is fromeHandtrackRemix.js

## remixP5.html
This remix adds in the p5.js library. It uses handtracking.js to track the hands and p5.js to create a square that follows the tracking coordinates. It works with the remixP5.js file.

It works by creating a p5 canvas ontop of the canvas used to capture the video that the model uses. In the html there is a wrapper element with the class wrapper, which positions it relatively. The video, canvas and p5canvas are all have the CSS position absolute attached to them.

In remixp5.js the function runDetection() has a if statment to check that there is a prediction. If there is it checks if it is prediction of a closed/pinched/point hand.

If it is, two bounding box co-ordinates are used for the x and y position. This position is used in the p5 draw function for the x and y position of a rectangle. 

In the draw function the p5 map() function is used, to remap the co-ordinates from the video to the p5 canvas.







