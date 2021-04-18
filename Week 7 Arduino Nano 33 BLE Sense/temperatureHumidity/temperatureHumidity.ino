/*
  HTS221 - Read Sensors

  This example reads data from the on-board HTS221 sensor of the
  Nano 33 BLE Sense and prints the temperature and humidity sensor
  values to the Serial Monitor once a second.

  The circuit:
  - Arduino Nano 33 BLE Sense

  This example code is in the public domain.
*/
#include <ArduinoBLE.h>
#include <Arduino_HTS221.h>

BLEService tempHumidityService("19b10010-e8f2-537e-4f6c-d104768a1214");
BLEByteCharacteristic humidityCharacteristic("19b10011-e8f2-537e-4f6c-d104768a1214", BLERead | BLENotify);
BLEByteCharacteristic temperatureCharacteristic("19b10012-e8f2-537e-4f6c-d104768a1214", BLERead | BLENotify);

void setup() {
  Serial.begin(9600);
  while (!Serial);

  if (!HTS.begin()) {
    Serial.println("Failed to initialize humidity temperature sensor!");
    while (1);
  }
    // begin initialization
  if (!BLE.begin()) {
    Serial.println("starting BLE failed!");

    while (1);
  }

  // set the local name peripheral advertises
  BLE.setLocalName("Temp&Humidity");
  // set the UUID for the service this peripheral advertises:
  BLE.setAdvertisedService(tempHumidityService);


  // add the characteristics to the service

  tempHumidityService.addCharacteristic(humidityCharacteristic);
  tempHumidityService.addCharacteristic(temperatureCharacteristic);

  // add the service
  BLE.addService(tempHumidityService);
  humidityCharacteristic.writeValue(0);
  temperatureCharacteristic.writeValue(0);

   BLE.advertise();

  Serial.println("Bluetooth device active, waiting for connections...");
}

void loop() {
  BLE.poll();
  // read all the sensor values
  float temperature = HTS.readTemperature();
  float humidity    = HTS.readHumidity();
  
  Serial.println();

  // print each of the sensor values
  Serial.print("Temperature = ");
  Serial.print(temperature);
  Serial.println(" °C");

  Serial.print("Humidity    = ");
  Serial.print(humidity);
  Serial.println(" %");

  // print an empty line
  Serial.println();

  humidityCharacteristic.writeValue(humidity);
  temperatureCharacteristic.writeValue(temperature);


  // wait 2 second to print again
  delay(2000);
}