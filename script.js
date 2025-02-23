function changeText() {
    const paragraph = document.getElementById("message");

    if (paragraph.innerText === "Hi! I am Alaica Arriola!") {
        paragraph.innerText = "I am a BSIT student!";
    } else {
        paragraph.innerText = "Hi! I am Alaica Arriola!"; 
    }
}