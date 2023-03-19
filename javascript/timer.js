const delay = (milli_sec) => new Promise((res,rej) => setTimeout(res, milli_sec))

async function reset_words(){
    let delay_seconds = 5;
    await delay(delay_seconds * 1000);
    let user_input = document.querySelector("#typingbox").value;
    display_user_words(user_input)
    reset_text_area();
    reset_words()
}

reset_words();


function display_user_words(text){
    let previous_text = document.querySelector("#display-user-text");
    previous_text.textContent = text;
}
function reset_text_area(){
    document.querySelector('textarea').value = "";
}