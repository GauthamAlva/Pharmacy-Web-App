const express=require('express');

const dotenv=require('dotenv');
const cors=require('cors');
const { urlencoded, response, request } = require('express');
const app=express();
dotenv.config();
                          const dbservice=require('./dbService')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//////////////////////////////medtable-api call///////////////////////////////
//////////////////create/////////////////
app.post('/insert',(request,response)=>{
  const  name  =request.body.Name;
  const  quantity  =request.body.Quantity;
  const  price = request.body.Price;
  const db=dbservice.getDBServiceInstance();
  const result=db.insertnewname(request.body);
  result
  .then(data => response.json({data:data}))
  .catch(err=> console.log(err))
});
///////////////////////////Read//////////////////////////////
app.get('/getAll',(request,response)=>{
const db=dbservice.getDBServiceInstance();

const result=db.getAllData();
console.log(result);
result.then(data=> response.json({data:data}))
.catch(err =>console.log(err));
});
/////////////////// search////////////////////////////////
app.get('/search/:name',(request,response)=>{
  const {name}=request.params;
  const db=dbservice.getDBServiceInstance();
const result=db.getSearchedData(name);
console.log(result);
result.then(data=> response.json({data:data}))
.catch(err =>console.log(err));
})
///////////////////////Update/////////////////////////
app.patch('/update',(request,response)=>{
  const {id,name,quantity,price}=request.body;
  const db=dbservice.getDBServiceInstance();
   const result=db.updateEleById(id,name,quantity,price);
   console.log(result);
result.then(data=> response.json({success:data}))
.catch(err =>console.log(err));
});
////////////Delete Med//////////////////////////////////
app.delete('/delete/:id',(request,response)=>{
 const {id} =request.params;
 const db=dbservice.getDBServiceInstance();
 const result=db.deleteRow(id);
 console.log(result );
 result.then(data=> response.json({success:data}))
 .catch(err =>console.log(err));
})
//////////////////////////////end of medtable-api call///////////////////////////////


//////////////////////////////Stafftable-api call///////////////////////////////
//////////////////create/////////////////
app.post('/insertstaff',(request,response)=>{
  const db=dbservice.getDBServiceInstance();
  const result=db.insertStaffnewname(request.body);
  result
  .then(data => response.json({data:data}))
  .catch(err=> console.log(err))
});
///////////////////////////Read//////////////////////////////
app.get('/getAllStaff',(request,response)=>{
const db=dbservice.getDBServiceInstance();

const result=db.getAllStaffData();
console.log(result);
result.then(data=> response.json({data:data}))
.catch(err =>console.log(err));
});
/////////////////// search////////////////////////////////
app.get('/staffsearch/:name',(request,response)=>{
  const {name}=request.params;
  const db=dbservice.getDBServiceInstance();
const result=db.getStaffSearchedData(name);
console.log(result);
result.then(data=> response.json({data:data}))
.catch(err =>console.log(err));
})
///////////////////////Update/////////////////////////
app.patch('/updatestaff',(request,response)=>{
  const {id,name,quantity,price}=request.body;
  const db=dbservice.getDBServiceInstance();
   const result=db.updateStaffEleById(id,name,quantity,price);
   console.log(result);
result.then(data=> response.json({success:data}))
.catch(err =>console.log(err));
});
////////////Delete Med//////////////////////////////////
app.delete('/staffdelete/:id',(request,response)=>{
 const {id} =request.params;
 const db=dbservice.getDBServiceInstance();
 const result=db.deleteStaffRow(id);
 console.log(result );
 result.then(data=> response.json({success:data}))
 .catch(err =>console.log(err));
})
//////////////////////////////end of staff-api call///////////////////////////////

//////////////////////////////Customertable-api call///////////////////////////////
app.get('/customersearch_forlogin/:password/:name',(request,response)=>{
  const {password}=request.params;
  const {name}=request.params;
  console.log(password);
  console.log(name);
  const db=dbservice.getDBServiceInstance();
  
  
  
const result=db.search_custname(name,password);
console.log(result);
result.then(data=> response.json({success:data}))
 .catch(err =>console.log(err));
})
//////////////////create/////////////////
app.post('/insertcustomer',(request,response)=>{
  const db=dbservice.getDBServiceInstance();
  const result=db.insertCustomernewname(request.body);
  result
  .then(data => response.json({data:data}))
  .catch(err=> console.log(err))
});
///////////////////////////Read//////////////////////////////
app.get('/getAllCustomer',(request,response)=>{
const db=dbservice.getDBServiceInstance();

const result=db.getAllCustomerData();
console.log(result);
result.then(data=> response.json({data:data}))
.catch(err =>console.log(err));
});
/////////////////// search////////////////////////////////
app.get('/customersearch/:name',(request,response)=>{
  const {name}=request.params;
  const db=dbservice.getDBServiceInstance();
const result=db.getCustomerSearchedData(name);
console.log(result);
result.then(data=> response.json({data:data}))
.catch(err =>console.log(err));
})
// ///////////////////////Update/////////////////////////
// app.patch('/updatecustomer',(request,response)=>{
//   const {id,name,age,phone,gender}=request.body;
//   const db=dbservice.getDBServiceInstance();
//    const result=db.updateCustomerEleById(id,name,age,phone,gender);
//    console.log(result);
// result.then(data=> response.json({success:data}))
// .catch(err =>console.log(err));
// });
////////////Delete Med//////////////////////////////////
app.delete('/customerdelete/:id',(request,response)=>{
 const {id} =request.params;
 const db=dbservice.getDBServiceInstance();
 const result=db.deleteCustomerRow(id);
 console.log(result );
 result.then(data=> response.json({success:data}))
 .catch(err =>console.log(err));
})
//////////////////////////////end of cust-api call///////////////////////////////
//////////search price for order table///////////////////////////
app.get('/getprice/:name',(request,response)=>{
  const {name}=request.params;
  const db=dbservice.getDBServiceInstance();
  const result=db.getPrice(name);
  console.log(result);
  result.then(data=> response.json({data:data}))
.catch(err =>console.log(err));
})
////////////////////////////////////////insert order table////////////////////////////
app.post('/insertorder',(request,response)=>{
  const db=dbservice.getDBServiceInstance();
  
  const result=db.insertordernewname(request.body);
  result
  .then(data => response.json({data:data}))
  .catch(err=> console.log(err))
});

app.get('/getAllOrders',(request,response)=>{
  const db=dbservice.getDBServiceInstance();
  const result=db.getOrder();
  console.log(result);
  result.then(data=> response.json({data:data}))
  .catch(err =>console.log(err));
  });

  app.delete('/orderdelete/:id',(request,response)=>{
    const {id} =request.params;
    console.log(id);
    const db=dbservice.getDBServiceInstance();
    const result=db.deleteOrderRow(id);
    console.log(result );
    result.then(data=> response.json({success:data}))
    .catch(err =>console.log(err));
   })
   app.get('/ordersearch/:name',(request,response)=>{
    const {name}=request.params;
    const db=dbservice.getDBServiceInstance();
  const result=db.getOrderSearchedData(name);
  console.log(result);
  result.then(data=> response.json({data:data}))
  .catch(err =>console.log(err));
  })
app.listen(5000, function() {
    console.log("Server started on port 5000");
  });
  ///////////////////////////////////////
  app.get('/medsearch_fororder/:name',(request,response)=>{
    const {name}=request.params;
    console.log(name);
    const db=dbservice.getDBServiceInstance();
  const result=db.search_medname(name);
  console.log(result);
  result.then(data=> response.json({success:data}))
   .catch(err =>console.log(err));
  })
 
  
