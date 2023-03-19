const delay = (milli_sec) => new Promise((res,rej) => setTimeout(res, milli_sec))

async function reset_words(){
    await delay(1000);
    let user_input = document.querySelector("textarea").value;
    console.log(user_input);
    document.querySelector('textarea').value = ""
    // console.log("one second passed")
    reset_words()
}

reset_words();