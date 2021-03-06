// collect the elements i need from my page
const textArea = document.querySelector('textarea');
const playButton = document.querySelector('button');
const pitchBar = document.querySelector('input');
const duckFigure = document.querySelector('figure');

// if someone click the button, do what i tell you
playButton.addEventListener('click', function(){
  const textLength = textArea.value.trim().length;

  if (textLength > 0) {

    talk()

  }
 
});

// create a function to make the duck talk

function talk() {
  // 1 - retrieve tone of voice from the text
  const text = textArea.value;
  const pitch = pitchBar.value;
 
  // 2 - prepare a utterance for the speetch Synthesizer
  const utterance = new SpeechSynthesisUtterance(text);

  // 3 - we specify other details for the utterance
  utterance.pitch = pitch;
  
  // let's the duck can talk!
  speechSynthesis.speak(utterance);

  // when the duck start talk...
  utterance.addEventListener('start', function() {
     //lock the controls when the duck talk
    textArea.disabled = true;
    pitchBar.disabled = true;
    playButton.disabled = true;
    // let's animate the duck
  duckFigure.classList.add('talking')
  });

  // when the duck stop talking...
  utterance.addEventListener('end', function() {
    textArea.disabled = false;
    pitchBar.disabled = false;
    playButton.disabled = false;

  //we bring the static duck
  duckFigure.classList.remove('talking');
    
  })
}

