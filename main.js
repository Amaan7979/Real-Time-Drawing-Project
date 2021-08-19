function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350,350);
    video.position(175,155);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",got_results);
}
function draw() {
    background("blue");
    
}
function modelLoaded() {
    console.log("Model is Loaded");
}
function got_results(results) {
if(results.length>0){
console.log(results);
}
}