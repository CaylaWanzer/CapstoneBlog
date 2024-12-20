/*
{
    "_id": "675c852615fee0925c8d2e52",
    "text": "First Post",
    "username": "GurjotS",
    "createdAt": "2024-12-13T19:04:06.252Z",
    "likes": [
      {
        "_id": "675c8a3715fee0925c8d2e9e",
        "postId": "675c852615fee0925c8d2e52",
        "username": "buttercupx",
        "createdAt": "2024-12-13T19:25:43.034Z"
      }
    ]
  },
*/
function getMessage(m) {
    return `
        <div data-post_id="${m._id}" class="message">
            From:  <b>${m.username}<br>\n</b>    
            WHEN:  <b>${m.createdAt}<br>\n</b>    
            TEXT:  <b>${m.text}<br>\n</b><br>
            LIKES: <b>${m.likes.length}</b>
            
            <button class="likeBtn" data-post_id="${m._id}">LIKE</button>
        </div>
    `;
}
document.addEventListener("DOMContentLoaded", async () => {

    const messages = await getMessageList();
    output.innerHTML = messages.map(getMessage).join("<hr>\n")
    const likeBtn = document.querySelectorAll(".likeBtn")
    likeBtn.forEach(button => {
      button.addEventListener("click", async (e)=> {
        const postId = e.target.dataset.post_id
        await toggleLikeBtn(postId)
        window.location.reload()
      })
    })
    const logOutButton = document.getElementById("logout");
    logOutButton.addEventListener("click", async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        alert("You have been logged out.");
        window.location.href = "login.html";
    });
});//end load