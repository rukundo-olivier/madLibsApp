"use strict";



//let result = ["timid", "unexpectedly", "fright and haste", "Roused", "repay", 
//"generous ", "stalking", "tangles","struggling","gnawed",];

let userInputs = [];

let numberOfQuestions = 10;


let questionArray = [
"Enter an adjective (timid, shame, shy)",
"Enter an adverb (unfortunately,  unexpectedly, unluckily)",
"Enter a pair of nouns (frightened and haste , fright and haste)",
"Enter a correct form of verb (Roused , Rouse)",
"Enter a correct form of verb ( repay , repaid)",
"Enter an adjective (generous , generously)",
"Enter a correct form of verb ( stalk , stalking)",
"Enter a correct form of verb ( tangle, tangles)",
"Enter a correct form of verb ( struggling, struggle)",
"Enter a correct form of verb (  gnawed, gnaw)"];


 let questionCounter = 0;
//variable that checks whether the user's input is blank
 let blank = [""];

 for (let i = numberOfQuestions; i >= 0; i--) {
   // console.log(i);
    //console.log(questionCounter);
    //console.log(questionArray[questionCounter] + ` ...... (${numberOfQuestions} questions left)`)
    userInputs.push(prompt(questionArray[questionCounter] + ` ...... (${numberOfQuestions} questions left)`));
    if(userInputs[questionCounter] == blank){
        console.log("the user didn't write anything");
    }else{
        userInputs.push(prompt(questionArray[questionCounter] + ` ...... (${numberOfQuestions} questions left)`));
    }
    console.log(userInputs);
    questionCounter++;
    numberOfQuestions--;
  
}
let originalStory = `<h2>
<b>THE LION AND THE MOUSE  from Aesop’s Fables</b> </br>

A Lion lay asleep in the forest, his great head resting on his paws.
A <i>${userInputs[0]}</i> little Mouse came upon him <i>${userInputs[1]}</i>, and in her <i>${userInputs[2]}</i> to get away, ran across the Lion's nose. 
<i>${userInputs[3]}</i> from his nap, the Lion laid his huge paw angrily on the tiny creature to kill her. 
"Spare me!" begged the poor Mouse. "Please let me go and someday I will surely <i>${userInputs[4]}</i> you."  
The Lion was much amused to think that a Mouse could ever help him. But he was <i>${userInputs[5]}</i> and finally let the Mouse go. 
Some days later, while <i>${userInputs[6]}</i> his prey in the forest, the Lion was caught in the <i>${userInputs[7]}</i> of a hunter's net. 
Unable to free himself, he filled the forest with his angry roaring. 
The Mouse knew the voice and quickly found the Lion <i>${userInputs[8]}</i> in the net. 
Running to one of the great ropes that bound him, she <i>${userInputs[9]}</i> it until it split apart, and soon the Lion was free. 
"You laughed when I said I would repay you," said the Mouse. "Now you see that even a Mouse can help a Lion." </br></br>

<b>A kindness is never wasted.</b> </h2> 
 `;
 alert(`All done! Ready for your totally-accurate, not-at-all confusing history of tech??`);

 console.log(originalStory);
 document.write(originalStory);


// original story


 /* THE LION AND THE MOUSE  from Aesop’s Fables 

 A Lion lay asleep in the forest, his great head resting on his paws.
 A timid little Mouse came upon him unexpectedly, and in her fright and haste to get away, ran across the Lion's nose. 
 Roused from his nap, the Lion laid his huge paw angrily on the tiny creature to kill her. 
 "Spare me!" begged the poor Mouse. "Please let me go and someday I will surely repay you."  
 The Lion was much amused to think that a Mouse could ever help him. But he was generous and finally let the Mouse go. 
 Some days later, while stalking his prey in the forest, the Lion was caught in the tangles of a hunter's net. 
 Unable to free himself, he filled the forest with his angry roaring. 
 The Mouse knew the voice and quickly found the Lion struggling in the net. 
 Running to one of the great ropes that bound him, she gnawed it until it split apart, and soon the Lion was free. 
 "You laughed when I said I would repay you," said the Mouse. "Now you see that even a Mouse can help a Lion." 
 
 A kindness is never wasted.  
  */