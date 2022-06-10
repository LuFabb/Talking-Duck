// collect the elements i need from my page
const textArea = document.querySelector('textarea');
const playButton = document.querySelector('button');
const pitchBar = document.querySelector('input');
const duckFigure = document.querySelector('figure');

// if someone click the button, do what i tell you
playButton.addEventListener('click', function(){
  const textLength = textArea.value.trim().length;
  console.log(textLength)
})