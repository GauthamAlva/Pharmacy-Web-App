document.querySelector("#main_menu").addEventListener('click',function(){
    location.href="Login_UI.HTML";
  })
  var temp=[];
//   console.log(sessionStorage.length);
var tab=document.querySelector("#medtabid");
let tableHTML ="";
for(let i=0;i<sessionStorage.length-2;i++){
  temp.push(sessionStorage.getItem(i));
}
console.log(temp)
  for(let i=0;i<sessionStorage.length-2;i+=3){
    tableHTML+="<tr>";
    tableHTML+=`<td>${sessionStorage.getItem(i)}</td>`;
    //temp.push(sessionStorage.getItem(i));
    tableHTML+=`<td>${sessionStorage.getItem(i+1)}</td>`;
    //temp.push(sessionStorage.getItem(i+1));
    tableHTML+=`<td>${sessionStorage.getItem(i+2)}</td>`;
    //temp.push(sessionStorage.getItem(i+2));
    tableHTML+="</tr>";
   }
 tab.innerHTML=tableHTML
 sessionStorage.clear();
 
//   const list=sessionStorage.getItem("list");
//   console.log(list);

