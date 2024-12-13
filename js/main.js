const BASE_URL = "http://microbloglite.us-east-2.elasticbeanstalk.com/docs/"



// only 2 insecure token free actions 

// create user - sign up 

// curl -X 'POST' \
//   'http://localhost:5005/api/users' \
//   -H 'accept: application/json' \
//   -H 'Content-Type: application/json' \
//   -d '{
//   "username": "string",
//   "fullName": "string",
//   "password": "string"
// }'

async function signUp(username, fullName, password){

    
    const response = await fetch(BASE_URL + "/api/users", {
        method: "POST",
        body: JSON.stingify({
            "username": "username",
            "fullName": "fullName",
            "password": "password" 
        })
    })
    const object = await response.json();
    return object;
}
const user = signUp("Cayla", "Yankey", "Kevin")
console.log(user);
// login and store username and token received



// all these nees a token in the header

//get secure list of messge 

// r = fetch(url, {
//     method: "GET",
//     headers: {
//     Authorization: `Bearer ${loginData.token}`,
//     },
// })