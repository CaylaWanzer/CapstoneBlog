document.addEventListener("DOMContentLoaded", async () => {
    const p = await getProfile();
    username.innerText = p.username;
    fullName.value = p.fullName;
    bioText.value = p.bio;
    passwordInput.value = "password";

    saveUserProfile.addEventListener("click", async () => {
        //TODO SAVE
        const payload = {
            fullName: fullName.value,
            bio: bioText.value
        }
        if (passwordInput.value != "password") {
            payload.password = passwordInput.value;
        }
        await saveProfile(payload);
        window.location.href = "messages.html"
    })
    const logOutButton = document.getElementById("logout");
    logOutButton.addEventListener("click", async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        alert("You have been logged out.");
        window.location.href = "login.html";
    });
});//end loaded

