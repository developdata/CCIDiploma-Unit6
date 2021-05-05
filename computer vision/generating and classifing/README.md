# Generating and Classifying images
These files are based on Dan Shiffmans video and code for classifying circles, squares and triangles. I changed this slightly to just classify circles and squares.

In his video he uses processsing to produce the data set used for classification. He did have code to do this in p5.js so this is what I did.

If you want to try out the code, run the generating images code first then put the images in a folder called data and put it in the project folder where you have the main html page.

I have a file for the different stages of the process.
 ## Generating Images
 The file generateImgages.html has the code for generating the squares and the circles. I changed it slightly so each image is 32 x 32, this seems to generate a 64 x 64 image, which is then used to classify and build a model.

 ## Generating the model
 The file generateModel.html is used to train and save the model. It loads in each image from the data folder. Put the images you generated with generateImages.html in a folder called data in your project folder.

 ## Using the data with drawings
 The code classify_images.html loads the trained model and uses it to give the probablity of streamed image being a circle or a square. You can draw the image on paper under a web cam and it will give you a probablity. You need to run generateModel.html first to create your model. Take the generated files and put them in a folder called model in the same folder as your main html page.

 ## Creating the data with a mouse
 The code classify_mouse.html allows you to draw with a mouse on a web browser, the model will then give a probablity of the drawing being a square or a circle.
