# YouTube Streaming Web App 
A simple web app to find and play YouTube results via the [YouTube Data API](https://developers.google.com/youtube/v3/getting-started)

## System Dependencies
**YouTube API Key Creation**
1. Visit the [Google Developer Console](https://console.developers.google.com).
2. Open the Credentials tab.
3. Create Credentials (if necessary).
4. Grab the Key from the Credentials tab.
5. Insert into [youtube.js](https://github.com/tlapinsk/Search-YouTube-Data-API-js/blob/master/public/js/youtube.js) on line 10.

**Other important installations (minus Nodemon):**

- Node Version: 7.9.0
- NPM Version: 4.2.0
- [mongo DB](https://github.com/mongodb/mongo)
- [Express](https://github.com/expressjs/express)
- [Nodemon](https://github.com/remy/nodemon)

See [package.json](https://github.com/tlapinsk/Search-YouTube-Data-API-js/blob/master/package.json) for full list of dependencies and versions.

_Note: I did not test the application on Windows, and I run the following system_

Macbook Pro (15-inch, Mid 2010)  
macOS Sierra | Version 10.12.4  
Memory: 8gb  
Storage: 500gb Samsung SSD

## Getting Started

1. [Download the repository](https://github.com/tlapinsk/Search-YouTube-Data-API-js/archive/master.zip) OR open up Terminal:

	```shell session
	$ git clone https://github.com/tlapinsk/Search-YouTube-Data-API-js
	```

2. At the command prompt:

	```shell session
	$ cd Search-YouTube-Data-API-js-master
	$ nodemon server.js
	```

3. Using a browser, go to http://localhost:8080 and you will see the application homepage.

## Known bugs

1. Flashing black circle on returned YouTube results. I believe it is from [Bootstrap-Material-Design's](https://github.com/FezVrasta/bootstrap-material-design) ripple effect

## Getting in touch
Feel free to shoot me any questions at tim.lapinskas@gmail.com!
