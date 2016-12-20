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
var img;

// var keyPressed;
// var keycode;

function setup() {
  // createCanvas(windowWidth,windowHeight);
  noCanvas();
  background(88,2,2);
  button = createButton('submit');
    button.mousePressed(changeCard);

  currentCard = random(flashcards);                                                                                                     
  console.log(currentCard.answer);
  input = createInput('');
var src = currentCard.imageSource;
    img = createImg(src);
        img.class('testImage');

}

// function keyPressed(){
//   if (keyCode === ENTER){
//     keyCode = button.mousePressed(changeCard);
//   }
// }


function changeCard() {
  console.log(input.value(),currentCard.answer);
  if (input.value() === currentCard.answer){
    currentCard = random(flashcards);
    console.log("good job");
      img.attribute("src", currentCard.imageSource);

     }
}








