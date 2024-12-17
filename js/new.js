document.addEventListener("DOMContentLoaded",()=>{

    sendTextButton.addEventListener("click",async ()=>{
        await sendText(textInput.value);  
        window.location.href = "messages.html";
    });

});//end loaded