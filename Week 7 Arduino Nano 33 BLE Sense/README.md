# Week 7 - Arduino Nano 33 BLE Sense
This weeks workshop is an introduction to the Arduino Nano 33 BLE sense and how to pass data to and from a web page with p5.ble.js. I've put the code I go through in the video in this folder, along with a list of resources I used when making the videos.

This nano has the ability to send and recieve data using Bluetooth Low Energy (BLE) and Bluetooth. You can also use it to run machine learning models, using TensorFlow™ Lite. It has a number of sensors built into the board:
* 9 axis inertial sensor
* humidity, and temperature sensor
* barometric sensor
* microphone
* gesture, proximity, light color and light intensity sensor

## Activities
Once you have gone through the video and have my example working, look at this online tutorial and work out how to make it work using a local ide rather than the p5.js online editor.
[Getting Started with p5.ble.js Using Arduino Nano 33 BLE](https://create.arduino.cc/projecthub/jingwen_zhu/getting-started-with-p5-ble-js-using-arduino-nano-33-ble-120ea6) This was the tutorial I went through to get started sending data to and from the nano and a web page. In the tutorial they use the online p5.js IDE so I have made a video to go through writing the code locally.

I have put my code for this in the buttonLED folder.

## Resources
I recommend reading through the first two links before getting started. They are a good backgroun on how it works and how to install the board and libraries.

[ArduinoBLE library](https://www.arduino.cc/en/Reference/ArduinoBLE)

[Getting started with Arduino Nano 33 BLE and BLE sense](https://dumblebots.com/2020/03/27/getting-started-with-arduino-nano-33-ble-and-ble-sense/) This is a good resource for setting up the Arduino, it goes through how to install the board and the libraries.

[This is the UUID generator](https://www.uuidgenerator.net/) you can use it to create unique id's for the service and characteristics.

[This page from the Arduino store](https://store.arduino.cc/arduino-nano-33-ble-sense-with-headers?queryID=undefined) has the specifications for the nano.

[Lab: Bluetooth LE and p5.ble](https://itp.nyu.edu/physcomp/syllabus/) This is a nice introduction to BLE and p5.ble.

[Information about tinyML](https://www.tinyml.org/)

[Get started with machine learning on Arduino](https://blog.arduino.cc/2019/10/15/get-started-with-machine-learning-on-arduino/)

[Fruit identification using Arduino and TensorFlow](https://blog.arduino.cc/2019/11/07/fruit-identification-using-arduino-and-tensorflow/)