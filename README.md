# Tidepool Uploader

[![Build Status](https://travis-ci.org/tidepool-org/chrome-uploader.png)](https://travis-ci.org/tidepool-org/chrome-uploader)

WARNING! THIS SOURCE CODE IS UNDER ACTIVE DEVELOPMENT AND IS KNOWN TO BE INCOMPLETE AND WITH ERRORS. IT IS ACTIVELY CHANGING. THIS CODE SHOULD NOT BE USED FOR COMMERCIAL MEDICAL SYSTEMS OR FOR ANY PURPOSE OTHER THAN ONGOING DEVELOPMENT AND IMPROVEMENT OF THIS CODE.

## About:

This is a Chrome App that acts as an uploader client for Tidepool. It is intended to allow you to plug devices into the USB port and automatically load the data stored on it up to the Tidepool cloud.

### A Chrome App
* Has a manifest that asks for appropriate permissions on installation (perhaps someday the permissions request will be dynamic based on your devices)

### Has code to manage various USB devices and data accounts

* Dexcom G4 CGM
* Asante SNAP w/Asante cable
* Asante SNAP w/FTDI cable
* OneTouch Mini w/FTDI cable
* Precision Xtra
* AbbottFreeStyle
* Insulet OmniPod

## How to set it up

1. Clone this repository.
1. Run `npm install`
1. Set the config for the environment you want to target (see Config section below)
1. Run `npm start` (will bundle files, and watch for changes)
1. Open Chrome. Go to chrome://extensions and turn on Developer mode (checkbox on the top line).
1. Click "Load Unpacked Extension".
1. Choose the directory you checked out above and click OK.
1. To run it, you can choose "Launch" from the chrome://extensions page. You can also run it from the Chrome App Launcher, which Chrome may install for you whether you want it or not.
1. If you're developing, you may find that the only way it runs properly is to hit "Reload" after each change to the source. You will definitely need to reload any time you change the manifest.

## How to use it

* Run the app
* Log in with your Tidepool account
* Plug your devices in
* Upload to the Tidepool platform

### Dexcom
* Press the "Upload" button; all the connected devices should upload in an arbitrary sequence.

### Carelink
* Enter username/password

### Insulet
* Plug in the device and start the app (in either order)
* Log in
* Press the "Choose File" button
* Navigate to the device (which on the pump I have shows up as "NO NAME")
* Select the most recent .ibf file on the device (there should be only one)
* Press "Open"

Note that Blip doesn't like it much if you don't have at least 24 hours worth of data, although it will work with only CGM data.

## Publishing

1. Bump version number and tag with `mversion minor -m` (`npm install -g mversion` if you haven't already)
1. Build `dist.zip` file with `npm run build`
