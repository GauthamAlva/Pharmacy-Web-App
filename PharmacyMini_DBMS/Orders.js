
// const { response } = require("express");

// this is executed while Reloading the page that gets all the data

document.querySelector("#main_menu").addEventListener('click',function(){
  location.href="Login_UI.HTML";
})

  document.addEventListener('DOMContentLoaded',function(){
    fetch('http://localhost:5000/getAllOrders')
    .then(response=> response.json())
    .then(data =>loadMedtable(data['data']));
  });
  document.getElementById('medtabid').addEventListener
  ('click',function(event){
    if(event.target.id ==="dlt"){
         deleteRowByID(event.target.dataset.id);
    }
  });
  ////////////////////////////////////////////////////////////
  
  // these are update btn and serch-btn

  const srchbtn=document.querySelector('#src-btn')
  ////////////////////////////////////////////////////
  // Used to delete row
  function deleteRowByID(id){
    console.log("hi");
      fetch('http://localhost:5000/orderdelete/'+id,{
          method: 'DELETE'
      })
      .then(response =>response.json())
      .then(data =>{
          if(data.success){
              location.reload();
          }
      });
  }
  ///function for serch process
  srchbtn.onclick=function(){
      const nama=document.getElementById("src-name").value;
      fetch('http://localhost:5000/ordersearch/'+nama)
      .then(response=> response.json())
      .then(data =>loadMedtable(data['data']));
      
  }
 
  /////////this function is called for both load the data as well as search////////////////
  function  loadMedtable(data){
      const table2=document.getElementById('medtabid');
      console.log(data);
      if(data.length ===0){
          table2.innerHTML = "<tr><td class='no-data' colspan='5'>No Data </td> </tr>";
          return;
      }
      let tableHTML ="";
      data.forEach(function({ID,custname,name,quantity,price}){
         
           tableHTML+="<tr>";
           tableHTML+=`<td>${custname}</td>`;
           tableHTML+=`<td>${name}</td>`;
           tableHTML+=`<td>${quantity}</td>`;
           tableHTML+=`<td>${price}</td>`;
           tableHTML+=`<td><button id="dlt" type="button" class=" deleterowbtn btn btn-primary" data-id=${ID}>Delete</button></td>`;
           tableHTML+="</tr>";
      });
      table2.innerHTML=tableHTML;
  }
  document.getElementById("printpg").addEventListener('click',()=>{
         window.print();
  })