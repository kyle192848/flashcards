var flashcards = [
    {answer: "漢宮春曉", imageSource:"images/仇英漢宮春曉.jpg"},
    {answer: "清明上河圖", imageSource:"images/宋張擇端清明上河圖.jpg"},
    {answer: "百駿圖", imageSource:"images/朗世寧百駿圖.jpg"},
    {answer: "廬山高", imageSource:"images/沈周廬山高.jpg"}
];// You can pick a random card like this:
var currentCard;
// Now you can get the artist name like this: currentCard.answer
// And the image url like this: currentCard.imageSource
var button;
var input;
var changeCard;
var message;

// var keyPressed;
// var keycode;


function setup() {
  // createCanvas(windowWidth,windowHeight);
  noCanvas();
  background(88,2,2);
  button = createButton('Submit');
    button.mousePressed(changeCard);
    button.class('bottonText')
  currentCard = random(flashcards);                                                                                                     
  console.log(currentCard.answer);
  input = createInput('');
var src = currentCard.imageSource;
// var img = createImg(src);
//         img.class('testImage');

var img = createImg(flashcards.imageSource);
        img.class('testImage');
        // img.attribute("src", "src");


}



// function keyPressed(){
//   if (keyCode === ENTER){
//     keyCode = button.mousePressed(changeCard);
//   }
// }


function changeCard() {
  var imageName = input.value
  console.log(input.value(),currentCard.answer);

  if (input.value() === currentCard.answer){
    

    img.attribute("src",flashcards.imageSource[currentCard.answer]) 
    // else {img.attribute("src","src")
  }

    console.log("good job");
    text("Good Job",20,height/2,40,40);

    
      } 




}

