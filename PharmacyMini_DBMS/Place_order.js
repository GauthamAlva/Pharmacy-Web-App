var mn=[];
var temp=[];
var i=0;

document.querySelector("#main_menu").addEventListener('click',function(){
  location.href="Login_UI.HTML";
})
document.addEventListener('DOMContentLoaded',function(){
    fetch('http://localhost:5000/getAll')
    .then(response=> response.json())
    .then(data =>loadMedtablep2(data['data']));
  });
  let price=76;
  function  loadMedtablep2(data){
    const table2=document.getElementById('medtabid');
    if(data.length ===0){
        table2.innerHTML = "<tr><td class='no-data' colspan='4'>No Data </td> </tr>";
        return;
    }
    let tableHTML ="";
    data.forEach(function({ID,Name,Quantity,Price}){
       
         tableHTML+="<tr>";
        
         tableHTML+=`<td>${Name}</td>`;
         tableHTML+=`<td>${Quantity}</td>`;
         tableHTML+=`<td>${Price}</td>`;
          tableHTML+="</tr>";
    });
    table2.innerHTML=tableHTML;
}
document.querySelector("#ordrplace").addEventListener("click",()=>{
    let nama=document.querySelector("#place-input-name");
    let quantity=document.querySelector("#place-input-quan");
    const name=nama.value;
    const quan=quantity.value;


    fetch(`http://localhost:5000/medsearch_fororder/`+name,
{method:'GET',
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }

  })
.then(response=> response.json())
.then(data =>{
    if(data.success){
      //////////////////////////////////////////
      var f=parseInt(quan);
      nama.value="";
      quantity.value="";
  
  fetch('http://localhost:5000/getPrice/'+name)
    .then(response=> response.json())
    .then(data=>{
      price=(data.data[0].Price);
  
    });
  
  const tprc=price*f;
   console.log(price)
   console.log(tprc)
  const na=sessionStorage.getItem('name');
  sessionStorage.setItem(i++,name);
  sessionStorage.setItem(i++,f);
  sessionStorage.setItem(i++,tprc);
  
      fetch('http://localhost:5000/insertorder',{
          headers: {
              'Content-type':'application/json'
          },
          method:'POST',
          body: JSON.stringify({custname:na,name:name,quantity:f,price:tprc})
      })
      .then(response => response.json())
      .then(console.log("success"))
      .then(alert(name+" is Added"))
      /////////////////////////////////////////
    }
    else{
       alert("No such Medicine present");
       location.reload();
    }
});
    
})
/////when press order bttn/////////////////////////
document.querySelector("#ordrplacef").addEventListener("click",()=>{
  let nama=document.querySelector("#place-input-name");
  let quantity=document.querySelector("#place-input-quan");
  const name=nama.value;
  const quan=quantity.value;


  fetch(`http://localhost:5000/medsearch_fororder/`+name,
{method:'GET',
  headers : { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
   }

})
.then(response=> response.json())
.then(data =>{
  if(data.success){
    //////////////////////////////////////////
    var f=parseInt(quan);
    nama.value="";
    quantity.value="";

fetch('http://localhost:5000/getPrice/'+name)
  .then(response=> response.json())
  .then(data=>{
    price=(data.data[0].Price);

  });

const tprc=price*f;
 console.log(price)
 console.log(tprc)
const na=sessionStorage.getItem('name');
sessionStorage.setItem(i++,name);
sessionStorage.setItem(i++,f);
sessionStorage.setItem(i++,tprc);

    fetch('http://localhost:5000/insertorder',{
        headers: {
            'Content-type':'application/json'
        },
        method:'POST',
        body: JSON.stringify({custname:na,name:name,quantity:f,price:tprc})
    })
    .then(response => response.json())
    .then(location.href="Order_cmplt.HTML")
    /////////////////////////////////////////
  }
  else{
     alert("No such Medicine present");
     location.reload();
  }
});
  
})















    
