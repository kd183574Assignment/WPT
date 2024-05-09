const mysql = require('mysql'); 
const express = require('express');
const { request } = require('http');
// const cors = require('cors');
const jwt = require('jsonwebtoken');
// const config = require('config');

const jwtSecret ='iamaishwarya';


const app = express();



const connectionString ={
    host:"localhost",
    database :"airbnb_db",
    port:3306,
    user:"root",
    password:"manager"
}

app.use(express.json());
// app.use(cors());


app.get("/airbnb/",(request,response)=>{
    var connection = mysql.createConnection(connectionString);
    connection.connect();
    let queryText=`select * from user`;
    connection.query(queryText,(err,result)=>{
        response.setHeader("Content-Type","Application/json");
        
        if(err==null)
            {
                response.write(JSON.stringify(result));
                connection.end();
                response.end();

            }else{
                response.write(JSON.stringify(err));
                connection.end();
                response.end();
            }
        

    });

});

app.post("/airbnb/registration",(request,response) =>{
    var firstName = request.body.firstName;
    var lastName =request.body.lastName;
    var email=request.body.email;
    var password = request.body.password;
    var phoneNumber = request.body.phoneNumber;
    //var isDeleted =request.body.isDeleted;

    const changePassword =btoa(password);
    console.log(changePassword);


    var connection = mysql.createConnection(connectionString);
    connection.connect();

    
    let queryText = `insert into user(firstName,lastname,email,password,phoneNumber) values(?,?,?,?,?)`;
    let queryValues =[firstName,lastName,email,changePassword,phoneNumber];
    console.log(queryValues);
    
    connection.query(queryText,queryValues,(err,result)=>{
        response.setHeader("Content-Type","Application/json");
        if(err==null)
            {
               
                response.write(JSON.stringify(result));
                connection.end();
                response.end();

            } else{
                response.write(JSON.stringify(err));
                connection.end();
                response.end();
            }

    });
})

app.post("/airbnb/login",(request,response)=>{

    var email=request.body.email;
    var password=request.body.password;

    const changePassword = btoa(password);

    var connection = mysql.createConnection(connectionString);
    connection.connect();
    console.log(changePassword);
    
    let queryText=`select * from user where email=('${email}') and password=('${changePassword}')`;
    connection.query(queryText,(err,result)=>{
        response.setHeader("Content-Type","application/json");
        if(err==null)
            {
                
                const token = jwt.sign(changePassword,jwtSecret);
                response.write(JSON.stringify(token));
              
                response.write(JSON.stringify(result));
                connection.end();
                response.end();

            }else{
                response.write(JSON.stringify(err));
                connection.end();
                response.end();
            }

    });

})

//   eyJhbGciOiJIUzI1NiJ9.WVdsemFERXlNdz09.rKNv3NDmj-_soOTZ1qXiaWXxmqQPVX0q1AUiU7Hq9C8

app.use((request,response,next)=>{
    const token = request.headers.authorization;
    if(token!=undefined){
        let dataInsideToken = jwt.verify(token,jwtSecret);
        console.log(dataInsideToken);
        next();

    }else{
        response.write("token not present");
    }
})

app.get("/airbnb/profile",(request,response)=>{
    var firstName = request.body.firstName;
    var lastName =request.body.lastName;
    var email=request.body.email;
    var phoneNumber = request.body.phoneNumber;

    var connection = mysql.createConnection(connectionString);
    connection.connect();
    let queryText=`select firstName,lastName,email,phoneNumber from user`;
    connection.query(queryText,(err,result)=>{
        response.setHeader("Content-Type","Application/json");
        
        if(err==null)
            {
                response.write(JSON.stringify(result));
                connection.end();
                response.end();

            }else{
                response.write(JSON.stringify(err));
                connection.end();
                response.end();
            }

        });
})

app.put("/airbnb/profile/:id",(request,response)=>{
    var id=request.params.id;
    var firstName=request.body.firstName;
    var lastName=request.body.lastName;
    var phoneNumber=request.body.phoneNumber;

    var connection = mysql.createConnection(connectionString);
    connection.connect();
    let queryText=`update user set firstName='${firstName}',lastName='${lastName}',phoneNumber='${phoneNumber}' where id=${id}`;

    connection.query(queryText,(err,result)=>{
        response.setHeader("Content-Type","Application/json");
        
        if(err==null)
            {
                response.write(JSON.stringify(result));
                connection.end();
                response.end();

            }else{
                response.write(JSON.stringify(err));
                connection.end();
                response.end();
            }

        });


    })

app.post("/property",(request,response)=>{
    
    
    var categoryId =request.body.categoryId;
    var title =request.body.title;
    var details =request.body.details;
    var address =request.body.address;
    var contactNo =request.body.contactNo;
    var ownerName =request.body.ownerName;
    var isLakeView =request.body.isLakeView;
    var isTV =request.body.isTV;
    var title =request.body.title;
    var isAC =request.body.isAC;
    var isWifi =request.body.isWifi;
    var isMiniBar =request.body.isMiniBar;
    var isBreakfast =request.body.isBreakfast;
    var isParking =request.body.isParking;
    var guests =request.body.guests;
    var bedrooms =request.body.bedrooms;
    var beds =request.body.beds;
    var bathrooms =request.body.bathrooms;
    var rent =request.body.rent;
    var profileImage=request.body.profileImage;


    var connection = mysql.createConnection(connectionString);
    connection.connect();

    let queryText = `insert into property (
        categoryId,
        title,
        details,
        address,
        contactNo,
        ownerName,
        isLakeView,
        isTV,
        isAC,
        isWifi,
        isMiniBar,
        isBreakfast,
        isParking,
        guests,
        bedrooms,
        beds,
        bathrooms,
        rent,
        profileImage,
        createdTimestamp
    ) values (
        '${categoryId}',
        '${title}',
        '${details}',
        '${address}',
        '${contactNo}',
        '${ownerName}',
        ${isLakeView},
        ${isTV},
        ${isAC},
        ${isWifi},
        ${isMiniBar},
        ${isBreakfast},
        ${isParking},
        ${guests},
        ${bedrooms},
        ${beds},
        ${bathrooms},
        ${rent},
        '${profileImage}',
        CURRENT_TIMESTAMP
        
    )`;

    connection.query(queryText,(err,result)=>{
        response.setHeader("Content-Type","Application/json")
        if(err==null)
            {
                response.write(JSON.stringify(result));
                connection.end();
                response.end();

            } else {
                response.write(JSON.stringify(err));
                connection.end();
                response.end();
            }
    });
 })

 app.get("/property",(request,response)=>{
    var connection = mysql.createConnection(connectionString);
    connection.connect();

    let queryText =`select id,title,details,rent,profileImage from property`
    connection.query(queryText,(err,result)=>{
        response.setHeader("Content-Type","Application/json");
        if(err==null)
            {
                response.write(JSON.stringify(result));
                connection.end();
                response.end();
            } else{
                response.write(JSON.stringify(err));
                connection.end();
                response.end();
            }
    });
 })

 app.post("/category",(request,response)=>{
    var title =request.body.title;
    var details =request.body.details;
    var image= request.body.image;

    var connection = mysql.createConnection(connectionString);
    connection.connect();

    let queryText=`insert into category(title,details,image) values('${title}','${details}','${image}')`;
    connection.query(queryText,(err,result)=>{
        response.setHeader("Content-Type","Application/json");
        if(err==null)
            {
                response.write(JSON.stringify(result));
                connection.end();
                response.end();


            }else{
                response.write(JSON.stringify(err));
                connection.end();
                response.end();
            }
    });

   
 })

 app.post("/bookings",(request,response)=>{

    // const token = req.headers.authorization;
    // const dataOfToken = jwt.verify(token,jwtSecret);
    // const id = dataOfToken.id;

    var propertyId= request.body.propertyId;
    var total =request.body.total;
    var fromDate=request.body.fromDate;
    var toDate =request.body.toDate;
    
    var connection =mysql.createConnection(connectionString);
    connection.connect();
    let queryText=`insert into bookings(propertyId,total,fromDate,toDate) values(${propertyId},${total},'${fromDate}','${toDate}')`;
    connection.query(queryText,(err,result)=>{
        response.setHeader("Content-Type","Application/json");
        if(err==null)
            {
                response.write(JSON.stringify(result));
                connection.end();
                response.end();

            }else{
                response.write(JSON.stringify(err));
                connection.end();
                response.end();
            }
    });
 })
 
 app.get("/bookings",(request,response)=>{
    var connection =mysql.createConnection(connectionString);
    connection.connect();
    let queryText =`select * from bookings`;
    connection.query(queryText,(err,result)=>{
        response.setHeader("Content-Type","Application/json");
        if(err==null)
            {
                response.write(JSON.stringify(result));
                connection.end();
                response.end();
            }else{
                response.write(JSON.stringify(err));
                connection.end();
                response.end();
            }
    })


 })
app.listen(8787,()=>{console.log("SERVER STARTED...")})


