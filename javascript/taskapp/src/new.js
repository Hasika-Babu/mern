
let data ={
    "email":"",//from email input box
    "password":""//from pwd input box

}
//list of users from the api
let response= await fetch("https://reqres.in/api/login",{method:"POST",body:JSON.stringify(data),headers:{"content-type":"application/json"}});
let userData = await response.json();
log(userData);