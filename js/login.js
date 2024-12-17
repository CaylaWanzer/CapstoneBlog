document.addEventListener("DOMContentLoaded", ()=>{
    loginButton.addEventListener("click",async ()=>{
        const result = await login(
            username.value,
            password.value
        );
        if(!result || !result.hasOwnProperty("statusCode") || result.statusCode != 200){
            output.innerText = "Login Failed";
            return;
        }
        //SUCCESS
        window.location.href = "messages.html";
    });//end click
}); //end loaded