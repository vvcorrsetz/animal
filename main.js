function start(){
navigator.mediaDevices.getUserMedia({
audio:true
})
classified=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/HGoXWrBFz/model.json",modelLoaded)
}


function modelLoaded(){
console.log("model loaded succsessfully")
classified.classify(gotresult)
}
    function gotresult(error,result){
    if(error){
    console.log(error)
    } 
    else{
    console.log(result);
    random_number_r=Math.floor(Math.random() * 255) + 1;
    random_number_g=Math.floor(Math.random() * 255) + 1;
    random_number_b=Math.floor(Math.random() * 255) + 1;
    
    document.getElementById("hear").innerHTML = "i can hear" + result[0].label 
    document.getElementById("acc").innerHTML="Accuracy - " + (result[0].confidence*100).toFixed(2)+" %"
    document.getElementById("hear").style.color = "rbg("+random_number_r+","+random_number_g+","+random_number_b+")"
    document.getElementById("acc").style.color = "rbg("+random_number_r+","+random_number_g+","+random_number_b+")"
    
    img1=document.getElementById ('ear')
    if(result[0].label == "dog"){
    img1.src="dog.jpg";
   
    }
    else if(result[0].label == "cat"){
        img1.src="cat.jpg";
    }
    else if(result[0].label == "Background Noise"){
        img1.src="ear.jpg";
    }

    }
    }