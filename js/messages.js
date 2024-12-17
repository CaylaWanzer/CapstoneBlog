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
            FROM:  ${m.username}<br>\n    
            WHEN:  ${m.createdAt}<br>\n    
            TEXT:  ${m.text}<br>\n
            LIKES: ${m.likes.length}
        </div>
    `;
}
document.addEventListener("DOMContentLoaded", async () => {

    const messages = await getMessageList();
    output.innerHTML = messages.map(getMessage).join("<hr>\n")

});//end load