

document.querySelector("#UserLOG").addEventListener('click',function(){
    let nama=document.querySelector("#user-name");
    let password=document.querySelector("#user-pass");
let nam=nama.value;
let pass=password.value;
console.log(nam+" "+pass);
sessionStorage.setItem("name",nam)

nama.value="";
password.value="";

fetch(`http://localhost:5000/customersearch_forlogin/`+pass+'/'+nam,
{method:'GET',
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }

  })
.then(response=> response.json())
.then(data =>{
    if(data.success){
        location.href = "Place_order.HTML";
       console.log("found user")
    }
    else{
        location.href = "register_details.HTML";
        console.log("not found")
    }
});

})
document.querySelector("#main_menu").addEventListener('click',function(){
    location.href="Login_UI.HTML";
 })
 

