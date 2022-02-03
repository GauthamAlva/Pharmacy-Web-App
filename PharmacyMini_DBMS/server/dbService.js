
const mysql=require('mysql');
var instance=null;
const connection=mysql.createConnection({
    host:'localhost',
    user:'Parmacy_App',
    password:'user123',
    database:'pharmacydb',
    port:'3306'
});
connection.connect((err)=>{
    if(err){
        console.log(err.message);
    }
    // console.log('db'+connection.state);
});

class DBservice{
static getDBServiceInstance(){
return instance ? instance:new DBservice();
}
/////////////****************for all quiries related to Med section **************** ////////////////////////
async getAllData(){
    try{
        const response=await new Promise((resolve,reject)=>{
const query="SELECT * FROM 	medtable;";
connection.query(query,(err,results)=>{
    if(err) reject(new Error(err.message));
    resolve(results);
})
        })
        console.log(response);
       return response;
    }
    catch(err){
        console.log(err);
    }
}
async getSearchedData(nama){
    try{
        const response=await new Promise((resolve,reject)=>{
const query="SELECT * FROM 	medtable WHERE Name=?;";
connection.query(query,[nama],(err,results)=>{
    if(err) reject(new Error(err.message));
    resolve(results);
})
        })
        console.log(response);
       return response;
    }
    catch(err){
        console.log(err);
    }
}
async insertnewname(obj){
    console.log(obj)
    try{
          const insertId=await new Promise((resolve,reject)=>{
             
              const query = "INSERT INTO medtable (Name,Quantity,Price) VALUES (?,?,?);";
              connection.query(query,[obj.Name,obj.Quantity,obj.Price],(err,result)=>{
                  if(err) reject(new Error(err.message));
                  resolve(result.insertId);
              })
          });
         return{
             id:insertId,
             name:obj.Name,
             quantity:obj.Quantity,
             price:obj.Price
         }
    }
    catch(error){
        console.log(error);
    }
}
async deleteRow(id){
    try{
        id=parseInt(id,10);
        const response=await new Promise((resolve,reject)=>{
             
            const query = "DELETE FROM medtable WHERE id= ?;";
            connection.query(query,[id],(err,result)=>{
                if(err) reject(new Error(err.message));
                resolve(result.affectedRows);
            })
        });
        console.log(response);
        return response === 1 ? true :false;
    }catch(err){
        console.log(err);
        return false;
    }
}
async updateEleById(id,name,quantity,price){
    try{
        id=parseInt(id,10);
        const response=await new Promise((resolve,reject)=>{
             
            const query = "UPDATE  medtable SET Name=?,Quantity=?,Price=? WHERE ID=?";
            connection.query(query,[name,quantity,price,id],(err,result)=>{
                if(err) reject(new Error(err.message));
                resolve(result.affectedRows);
            })
        });
        return response === 1 ? true :false;
    }catch(err){
        console.log(err);
        return false;
    }
}
/////////////****************end of Med section **************** ////////////////////////


/////////////****************for all quiries related to Staff section **************** ////////////////////////
async getAllStaffData(){
    try{
        const response=await new Promise((resolve,reject)=>{
const query="SELECT * FROM 	stafftable;";
connection.query(query,(err,results)=>{
    if(err) reject(new Error(err.message));
    resolve(results);
})
        })
        console.log(response);
       return response;
    }
    catch(err){
        console.log(err);
    }
}
async getStaffSearchedData(nama){
    try{
        const response=await new Promise((resolve,reject)=>{
const query="SELECT * FROM 	stafftable WHERE Name=?;";
connection.query(query,[nama],(err,results)=>{
    if(err) reject(new Error(err.message));
    resolve(results);
})
        })
        console.log(response);
       return response;
    }
    catch(err){
        console.log(err);
    }
}
async insertStaffnewname(obj){
    try{
          const insertId=await new Promise((resolve,reject)=>{
             
              const query = "INSERT INTO stafftable (name,age,gender) VALUES (?,?,?);";
              console.log(obj.Name);
              connection.query(query,[obj.Name,obj.Quantity,obj.Price],(err,result)=>{
                  if(err) reject(new Error(err.message));
                  resolve(result.insertId);
              })
          });
         return{
             id:insertId,
             name:obj.Name,
             quantity:obj.Quantity,
             price:obj.Price
         }
    }
    catch(error){
        console.log(error);
    }
}

async deleteStaffRow(id){
    try{
        id=parseInt(id,10);
        const response=await new Promise((resolve,reject)=>{
             
            const query = "DELETE FROM stafftable WHERE id= ?;";
            connection.query(query,[id],(err,result)=>{
                if(err) reject(new Error(err.message));
                resolve(result.affectedRows);
            })
        });
        return response === 1 ? true :false;
    }catch(err){
        console.log(err);
        return false;
    }
}
async updateStaffEleById(id,name,quantity,price){
    try{
        id=parseInt(id,10);
        const response=await new Promise((resolve,reject)=>{
             
            const query = "UPDATE  stafftable SET name=?,age=?,gender=? WHERE ID=?";
            connection.query(query,[name,quantity,price,id],(err,result)=>{
                if(err) reject(new Error(err.message));
                resolve(result.affectedRows);
            })
        });
        return response === 1 ? true :false;
    }catch(err){
        console.log(err);
        return false;
    }
}
/////////////****************end of Staff section **************** ////////////////////////

/////////////****************for all quiries related to customer section **************** ////////////////////////
async getAllCustomerData(){
    try{
        const response=await new Promise((resolve,reject)=>{
const query="SELECT * FROM 	customertable2;";
connection.query(query,(err,results)=>{
    if(err) reject(new Error(err.message));
    resolve(results);
})
        })
        console.log(response);
       return response;
    }
    catch(err){
        console.log(err);
    }
}
async search_custname(name,password){
    try{
      const response=await new Promise((resolve,reject)=>{
             
            const query = "SELECT * FROM 	customertable2 WHERE name=? AND password=?;";
            connection.query(query,[name,password],(err,result)=>{
                if(err) reject(new Error(err.message));
                resolve(result);
            })
        });
        console.log(response.length);
        const t=response.length
        return t === 0 ? false :true;
    }catch(err){
        console.log(err);
        return false;
    }
}
async getCustomerSearchedData(nama){
    try{
        const response=await new Promise((resolve,reject)=>{
const query="SELECT * FROM 	customertable2 WHERE name=?;";
connection.query(query,[nama],(err,results)=>{
    if(err) reject(new Error(err.message));
    resolve(results);
})
        })
        console.log(response);
       return response;
    }
    catch(err){
        console.log(err);
    }
}
async insertCustomernewname(obj){
    try{
          const insertId=await new Promise((resolve,reject)=>{
             
              const query = "INSERT INTO customertable2 (name,age,phone,gender,password) VALUES (?,?,?,?,?);";
              console.log(obj.Name);
              connection.query(query,[obj.name,obj.age,obj.phone,obj.gender,obj.password],(err,result)=>{
                  if(err) reject(new Error(err.message));
                  resolve(result.insertId);
              })
          });
         return{
            id:insertId,
             name:obj.name,
             age:obj.age,
            phone:obj.phone,
             gender:obj.gender
         }
    }
    catch(error){
        console.log(error);
    }
}
async deleteCustomerRow(id){
    try{
        id=parseInt(id,10);
        const response=await new Promise((resolve,reject)=>{
             
            const query = "DELETE FROM customertable2 WHERE id= ?;";
            connection.query(query,[id],(err,result)=>{
                if(err) reject(new Error(err.message));
                resolve(result.affectedRows);
            })
        });
        return response === 1 ? true :false;
    }catch(err){
        console.log(err);
        return false;
    }
}
// async updateCustomerEleById(id,name,age,phone,gender){
//     try{
//         id=parseInt(id,10);
//         const response=await new Promise((resolve,reject)=>{
             
//             const query = "UPDATE  customertable SET name=?,age=?,phone=?,gender=? WHERE ID=?";
//             connection.query(query,[name,age,phone,gender,id],(err,result)=>{
//                 if(err) reject(new Error(err.message));
//                 resolve(result.affectedRows);
//             })
//         });
//         return response === 1 ? true :false;
//     }catch(err){
//         console.log(err);
//         return false;
//     }
// }
/////////////****************end of customer section **************** ////////////////////////
////////////////////////////////////////// all queries related fetching price///////////////////////////

async getPrice(name){
    try{
        const response=await new Promise((resolve,reject)=>{
const query="SELECT Price FROM 	medtable WHERE Name= ?;";
connection.query(query,[name],(err,results)=>{
    if(err) reject(new Error(err.message));
    resolve(results);
})
        })
        console.log(response);
       return response;
    }
    catch(err){
        console.log(err);
    }
}
/////////////////////////////////////////////////////////////// all queries related to order section///////////////////////////
async insertordernewname(obj){
    try{
          const insertId=await new Promise((resolve,reject)=>{
             
              const query = "INSERT INTO ordertable2 (custname,name,quantity,price) VALUES (?,?,?,?);";
              console.log(obj.custname+obj.name+obj.quantity+obj.price);
              connection.query(query,[obj.custname,obj.name,obj.quantity,obj.price],(err,result)=>{
                  if(err) reject(new Error(err.message));
                  resolve(result.insertId);
              })
          });
          return{
            id:insertId,
             cusname:obj.custname,
             name:obj.name,
            quantity:obj.quantity,
            price:obj.price
         }
    }
    catch(error){
        console.log(error);
    }
}





async deleteOrderRow(id){
    try{
        id=parseInt(id,10);
        const response=await new Promise((resolve,reject)=>{
             
            const query = "DELETE FROM ordertable2 WHERE id= ?;";
            connection.query(query,[id],(err,result)=>{
                if(err) reject(new Error(err.message));
                resolve(result.affectedRows);
            })
        });
        return response === 1 ? true :false;
    }catch(err){
        console.log(err);
        return false;
    }
}

async getOrderSearchedData(nama){
    try{
        const response=await new Promise((resolve,reject)=>{
const query="SELECT * FROM 	ordertable2 WHERE name=? ;";
connection.query(query,[nama],(err,results)=>{
    if(err) reject(new Error(err.message));
    resolve(results);
})
        })
        console.log(response);
       return response;
    }
    catch(err){
        console.log(err);
    }
}
async getOrder(){
    try{
        const response=await new Promise((resolve,reject)=>{
const query="SELECT * FROM 	ordertable2 ;";
connection.query(query,(err,results)=>{
    if(err) reject(new Error(err.message));
    resolve(results);
})
        })
        console.log(response);
       return response;
    }
    catch(err){
        console.log(err);
    }
}

async search_medname(name){
    try{
      const response=await new Promise((resolve,reject)=>{
             
            const query = "SELECT * FROM medtable WHERE name=? ;";
            connection.query(query,[name],(err,result)=>{
                if(err) reject(new Error(err.message));
                resolve(result);
            })
        });
        console.log(response.length);
        const t=response.length
        return t === 0 ? false :true;
    }catch(err){
        console.log(err);
        return false;
    }
}
}
module.exports=DBservice;


