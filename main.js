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
        document.getElementById("snapshot").innerHTML = "<img id='Photo' src='"+data_uri+"'>"
    } )
};
console.log("ml5",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rcQWm8Ixq/model.json",modelLoaded);
function modelLoaded(){
 console.log("model has been loaded");
};
function Identify(){
 var img=document.getElementById("Photo");
 classifier.classify(img,gotResult);
};
function gotResult(error,result){
    if(error){
        console.log(error);
    }
    else{
    console.log(result);
    
    document.getElementById("result_of_prediction1").innerHTML= result[0].label;
    document.getElementById("result_of_prediction2").innerHTML= result[1].label;
    }
}