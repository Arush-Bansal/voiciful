// difining the objects
let speaker = window.speechSynthesis // the speaker in the window
let typingbox = document.querySelector("#typingbox") // the box in which the user is typing
let spokenWord = new SpeechSynthesisUtterance(); // the object difining the word that is being spoken

// word selector
var wordindex = 0; // index of the word that will be spoken next
var words = "at keep to take something back between mea not sea again begain without think face qauickly land feet"
var words_arr = words.split(" ");

// sets the basic speech properties.
spokenWord.lang = "en";
// remove this line // spokenWord.text = "there is a god. And he wants to kill Vinayak. Believe me, its True." // later add the random word generator(or even better, collect the text from some wikipedia article or something)
spokenWord.voice = window.speechSynthesis.getVoices()[0]
spokenWord.rate = 1.5; // WORK: later change the rate of change of speed based on the typing speed.
// spokenWord.volume = 10; // WORK: later add a volume button
// spokenWord.pitch = 2;
let speak = () => {
    spokenWord.text = words_arr[wordindex];
    speaker.speak(spokenWord);
    wordindex += 1;
}
let newInput = () => {
    if (wordindex >= words_arr.length) {
        wordindex = 0;
    }
    if ((typingbox.value.slice(-1) === " ") && ((typingbox.value.slice(-2, -1) !== " ") && (typingbox.value.slice(-2, -1) !== ""))) {
        speak();
    }
}

typingbox.addEventListener("click", () => {
    speak();
    speak();
})

typingbox.addEventListener("input", newInput)