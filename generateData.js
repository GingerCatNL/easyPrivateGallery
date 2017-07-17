/**
 * Created by JDWULIT on 17/07/2017.
 */
var fs = require("fs");
var Jimp = require("jimp");

console.log("Cleaning the /thumb directiory");
fs.readdir("./thumb/",function(err, files){
    files.forEach(function (file){
        var location = "./thumb/" + file;
        fs.unlink(location, function(err) {
            if (err) {
                return console.error(err);
            }
        });
    });
});

fs.readdir("./img/",function(err, files){
    console.log("Reading images...");
    if (err) {
        return console.error(err);
    }
    var myArray = [];
    files.forEach( function (file){
        generateThumbnail(file);
        myArray.push(file);
    });

    console.log("Creating JSON");
    writeToFile(JSON.stringify(myArray));
});

function writeToFile(data){
    console.log("Writing to file...");
    fs.writeFile('data.json', data,  function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("Data written successfully!\nFinishing image processing...");
    });
};

function generateThumbnail(file){
    console.log("Generating thumbnails for image: " + file);
    var location = "./img/" + file;
    Jimp.read(location, function (err, lenna) {
        if (err) throw err;
        lenna.resize(Jimp.AUTO, 256)
            .quality(80)
            .write("./thumb/"+file);
    });
};