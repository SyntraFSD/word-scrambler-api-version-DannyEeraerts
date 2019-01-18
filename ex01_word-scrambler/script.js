//select textarea
let userInput;
//select btn
let submitBtn;
//select result container
let resultContainer;
//# select wordCount
let wordCountContainer;
//# select letterCount
let letterCountContainer;


function getUserInput() {
  //return value of userInput
}

function textToWordArray(text) {
  //return array of words
}

function arrayToText(array) {
}


function getLetterCount(text) {
  //# return letter count
}

function updateWordCount(wordCount) {
  //# update the Word Count
}

function updateLetterCount(letterCount) {
  //# update the Letter Count
}

function updateCounts(event) {
  //# update Word Count and Letter Count
  let currentText = this.value;
  // this when function is executed by event => event.target
  // this.value == event.target.value
}

function sendRequest(event) {
  const request = event.target;
  console.log(request);
  if (request.readyState === 4) {
    const response = JSON.parse(request.responseText);
      console.log(request.status);
    if (request.status >= 200 && request.status < 300) {
      console.log('success');
      input.value=response;
    } else {
      console.log('error');
    }
  }
}


function getInput() {
  const input = document.querySelector('user-input');
  return { text: input.value };
}


function scramble(event) {
  event.preventDefault();
  const formData = getinput();
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', sendRequest);
  request.open('POST', 'http://connect4.pienter.space/api/scramble');
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(formData));
}

//add click event listener to submitBtn
submitBtn.addEventListener("click", scramble);
//# add input event listener to userInput for counts
userInput.addEventListener("input", updateCounts);

