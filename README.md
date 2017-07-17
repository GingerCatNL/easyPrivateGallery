# easyPrivateGallery
This simple project will give you a quick start to create your own gallery website in few easy steps.

Requirements:
- Node.js
Please install it from: https://nodejs.org/en/download/

The project is using CDN to fetch:
1. jQuery
2. AngularJS
3. Bootstrap (JS and CSS)

This project is using Highslide.js library to generate the view of the gallery
All credits for Highslide goes to the team.
Please visit: http://highslide.com/

To create your simple gallery website please follow:
1. Install Node.js
2. Go into the project directory and run <code> npm install </code> - This will install required dependencies
3. Run command <code>node generateData.js</code> - this will:
    - create required directories: img and thumb
    - for each image file in the folder will generate thumbnail in <code>thumb</code> folder
    - create a json describing images
4. Put the images you want to have on your website in <code>img</code> folder
5. Re-run the command <code>node generateData.js</code> (if you didn't create folders img and thumb manually and put there images)
6. Run your website with index.html
7. Modify whatever you want
8. Put all your files in your server (or run local server and run it, or use firefox (he allows the cross origin)
9. Enjoy