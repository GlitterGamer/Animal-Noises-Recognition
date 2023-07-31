function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/slX8sCkfM/model.json", model_ready)
}
function model_ready(){
    classifier.classify(gotResults)

}

function gotResults(error,results){
    if (error) {
      console.log(error)  
    } else {
       console.log(results) 
       document.getElementById("result_label").innerHTML= "I Can Hear:"+results[0].label
       document.getElementById("result_confidence").innerHTML= "Accuracy:"+Math.floor(results[0].confidence*100)+"%"
       img1= document.getElementById("img")
       if (results[0].label== "Meowing") {
        img1.src= "cat_image.jpg"
        
       }
       else if (results[0].label== "Barking") {
        img1.src= "dog_image.jpg"
        
       }
       else if (results[0].label== "Roar") {
        img1.src= "lion_image.jpg"
        
       }
       else if (results[0].label== "Mooing") {
        img1.src= "cow_image.jpg"
        
       }
    }
}
