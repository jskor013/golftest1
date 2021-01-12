let img, classifier;

function setup() {
  createCanvas(400, 400);
  img = loadImage('test1.PNG');
  classifier = ml5.imageClassifier('MobileNet', modelReady);
}

function modelReady(){
  console.log('MobileNet 모델 불러오기 완료');
  classifier.classify(img, gotResult);
}

function gotResult(err, results){
  if(err){
    console.error(err);
    return;
  }
  console.log(results);
}
