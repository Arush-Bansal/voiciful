
// difining the objects
let speaker = window.speechSynthesis // the speaker in the window
let typingbox = document.querySelector("#typingbox") // the box in which the user is typing
let spokenWord = new SpeechSynthesisUtterance(); // the object difining the word that is being spoken


// sets the basic speech properties.
spokenWord.lang = "en";
spokenWord.text = "there is a god. And he wants to kill Vinayak. Believe me, its True." // later add the random word generator(or even better, collect the text from some wikipedia article or something)
spokenWord.voice = window.speechSynthesis.getVoices()[0]
spokenWord.rate = 1; // WORK: later change the rate of change of speed based on the typing speed.
// spokenWord.volume = 10; // WORK: later add a volume button
// spokenWord.pitch = 2;
// console.log(spokenWord.voice)
// addEventListener()
let speak = () => { speaker.speak(spokenWord) }


typingbox.addEventListener("click", speak)