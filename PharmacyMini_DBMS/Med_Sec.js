
// const { response } = require("express");


// this is executed while Reloading the page that gets all the data
document.querySelector("#main_menu").addEventListener('click',function(){
    location.href="Login_UI.HTML";
 })
document.addEventListener('DOMContentLoaded',function(){
  fetch('http://localhost:5000/getAll')
  .then(response=> response.json())
  .then(data =>loadMedtable(data['data']));
});
document.getElementById('medtabid').addEventListener
('click',function(event){
  if(event.target.id ==="dlt"){
       deleteRowByID(event.target.dataset.id);
  }
  if(event.target.id=="edt"){
      editRowByID(event.target.dataset.id);
  }
});
////////////////////////////////////////////////////////////

// these are update btn and serch-btn
const updBtn=document.querySelector('#upd-btn')
const srchbtn=document.querySelector('#src-btn')
////////////////////////////////////////////////////
// Used to delete row
function deleteRowByID(id){
    fetch('http://localhost:5000/delete/'+id,{
        method: 'DELETE'
    })
    .then(response =>response.json())
    .then(data =>{
        if(data.success){
            location.reload();
        }
    });
}

//  function for updation

function editRowByID(id){
    const editrw=document.querySelector('#upt-sec');
    editrw.hidden=false;
    document.querySelector('#updname').dataset.id=id;
}
updBtn.onclick=function(){
    const qty=document.querySelector('#upd-quan');
    const prc=document.querySelector('#upd-pri');
  
    fetch('http://localhost:5000/update',{
        method:'PATCH',
        headers: {
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            id:updname.dataset.id,
            name:document.getElementById("updname").value,
            quantity:qty.value,
            price:prc.value
        })
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
    fetch('http://localhost:5000/search/'+nama)
    .then(response=> response.json())
    .then(data =>loadMedtable(data['data']));
    
}
/////////////////this is used to fetch all the value from the inputs and just calling insert function 
const addbtn=document.querySelector('#pharm-btn');
addbtn.onclick=function(){
    var Medname=document.querySelector('#mednameid');
    var Quant=document.querySelector('#quantid');
    var Price=document.querySelector('#priceid');

    const name=Medname.value;
    const quantity=Quant.value;
    const price=Price.value;
    Medname.value="";
    Quant.value="";
    Price.value="";
//fetching the local host and posting the data to the backend
fetch('http://localhost:5000/insert',{
    headers: {
        'Content-type':'application/json'
    },
    method:'POST',
    body: JSON.stringify({Name:name,Quantity:quantity,Price:price})
})
.then(response => response.json())
.then(data =>InsertRowToTable(data['data']) )
.then(location.reload());
};
////funtion for above insertion function call
function InsertRowToTable(data){
    const table=document.getElementById('medtabid')
    const notable=table.querySelector('.no-data');
 //getting all the values in a loop and adding the buttons of "Update" and "Delete"
    let htmlrw="<tr>"
    for (var key in data){
        if(data.hasOwnProperty(key)){
            htmlrw+=`<td> ${data[key]}</td>`
        }
    }
    htmlrw+=`<td><button id="edt" type="button" class="editrowbtn btn btn-primary" data-id=${data.ID}>Edit</button></td>`;
    htmlrw+=`<td><button id="dlt" type="button" class="deleterowbtn btn btn-primary" data-id=${data.ID}>Delete</button></td>`;
    htmlrw+="</tr>"

   if(notable){
       table.innerHTML=htmlrw;
   }else{
       const newrow=table.insertRow();
       newrow.innerHTML=htmlrw;
   }

}
/////////this function is called for both load the data as well as search////////////////
function  loadMedtable(data){
    const table2=document.getElementById('medtabid');
    if(data.length ===0){
        table2.innerHTML = "<tr><td class='no-data' colspan='6'>No Data </td> </tr>";
        return;
    }
    let tableHTML ="";
    data.forEach(function({ID,Name,Quantity,Price}){
       
         tableHTML+="<tr>";
         
         tableHTML+=`<td>${Name}</td>`;
         tableHTML+=`<td>${Quantity}</td>`;
         tableHTML+=`<td>${Price}</td>`;
         tableHTML+=`<td><button id="edt" type="button" class="editrowbtn btn btn-primary" data-id=${ID}>Edit</button></td>`;
         tableHTML+=`<td><button id="dlt" type="button" class=" deleterowbtn btn btn-primary" data-id=${ID}>Delete</button></td>`;
         tableHTML+="</tr>";
    });
    table2.innerHTML=tableHTML;
}