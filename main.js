function preload(){

}
function setup(){
    canvas=createCanavs(300,300)
    canavs.center()
    video = createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('')
}
function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotResult);
}
function modelLoaded(){
    console.log("FamilyAI-v0.2.3.xlaim.js has arrived!");
}
function gotResult(error,results) {
    if(error) {
        console.error(error);
    }
    else {
       console.log(results);
       document.getElementById('result_object').innerHTML = results[0].label;
       document.getElementById('result_conf').innerHTML = results[0].confidence.toFixed(3);
    }
}