Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality : 90
});

camera = document.getElementById("camera");
 
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("pretty").innerHTML = '<img id="c_img" src="'+data_uri+'"/>';

    });
}

console.log('ml5 version:',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/jm_PGNdlB/model.json',modelLoaded);

function modelLoaded(){
    console.log("modelLoaded");
}

function check(){
    img = document.getElementById('c_img');
    classifier.classify(img, gotResult);
}

function gotResult (error, results) {

if (error) {
    console.error(error);
}else{
    console.log(results);
    document.getElementById("result_o_n").innerHTML = results[0].label;
    document.getElementById("result_o_a").innerHTML = results[0].confidence.toFixed(3);
 }
}