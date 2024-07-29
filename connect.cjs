const { createPool}=require('mysql');

const pool = createPool({
    host:"localhost",
    port:3306,
    password:"Ujjwal1@3",
    user:"root",
    database:"ORG",
    connectionLimit:10
})



pool.query('select * from Passenger',(err,result,fields)=>{
    if(err)
    {
        return console.log(err);
}   
    return console.log(result); 
});

