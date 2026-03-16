const express = require('express');

const app = express();
app.use(express.json());

let users = [
    { id : 1, name: 'jansi', email: 'jansi123@gmail.com'},
    { id : 2, name: 'dipti', email: 'dipti123@gmail.com'},
    { id : 3, name: 'sneha', email: 'sneha234@gmail.com'}
]

app.get("/user", (req, res) => {
    try{
        res.send(users);
    }
    catch(err){
        console.log(err);
        res.send("Error in fetching data...");
    }
})

app.post("/user", (req, res) => {
    try{
        const {name, email } = req.body;
        const newUser = {
            id: users.length + 1,
            name,
            email,
        }
        users.push(newUser);
        res.send("User added Successfully");
    }
    catch(err){
        console.log("Error : " + err );
        res.send("Error in inserting data...");
    }
})

app.delete("/user/:id", (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const user = users.find((user) => user.id === id);
        if(!user){
            res.send("User not found")
        }
        
        users = users.filter((user) => user.id !== id);
        res.send("user deleted ...");
    }
    catch(err){
        console.log("error : " +err);
        res.send("Error in deleting data...");
    }
})

app.put("/user/:id", (req,res) => {
    try{
        const id = parseInt(req.params.id);
        const { name, email } = req.body;
        const user = users.find((user) => user.id === id);
        if(!user){
            res.send("User not found...");
        }
        else{
            user.name = name;
            user.email = email;
            res.send({
                message:"User updated successfully...",
                data : user,
                status:"Success"
            })
        }
    }
    catch(err){
        console.log("error : " + err);
        res.send("Error in updating data...");
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

export default app