Webcam.set({
    width:250,
    heiht:250,
    img_format:'png',
    png_quality:90
});
camera = document.getElementById("view");
Webcam.attach(camera);

function Take_photo(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML = "<img src='"+data_uri+"'>"
    } )
};
console.log("ml5",ml5.version);
classifier=ml5.imageclassifier("https://teachablemachine.withgoogle.com/models/rcQWm8Ixq/model.json",modelLoaded);