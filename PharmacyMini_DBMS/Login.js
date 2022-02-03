let pudar;
document.querySelector("#main_menu").addEventListener('click',function(){
  location.href="Login_UI.HTML";
})
document.querySelector("#plbtn").addEventListener('click',()=>{
    let name=document.querySelector("#cus-name");
    let age=document.querySelector("#cus-age");
    let gender=document.querySelector("#cus-gender");
    let phone=document.querySelector("#cus-phone");
    let password=document.querySelector("#cus-password");
    pudar=name.value;
      sessionStorage.setItem("name",pudar);
    let praya=age.value;
    let linga=gender.value;
    let phonu=phone.value;
    let gupta=password.value;
  
   
    if(String(phonu).length>10){
      alert("enter valid Phone number")
      location.reload();
 }
 else {
  console.log(phonu.length);
  fetch('http://localhost:5000/insertcustomer',{
     headers: {
         'Content-type':'application/json'
     },
     method:'POST',
     body: JSON.stringify({name:pudar,age:praya,gender:linga,phone:phonu,password:gupta})
 })
 .then(response => response.json())
 location.href = "Place_order.HTML";
 }
 })