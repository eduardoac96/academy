const express = require('express');
const User = require('./users');
const database = require('./db');

const app = express();
app.use(express.json());
database.connect();

app.get('/users', async (req, res) => {
    try{
         const users = await User.find();
        res.json(users);
    } catch(err){
        res.status(500).json({message: err.message});
    }

});

app.get('/users/:id', getUser, (req,res) => {

    res.json(res.user);
});

app.post('/users', async(req,res)=>{
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    });

    try{
        const newUser = await user.save();
        res.status(201).json(newUser);
    }
    catch(err){
        res.status(400).json({ message: err.message});
    }
});
//Update a user
app.patch('/users/:id', getUser, async(req,res)=>{
    if(req.body.firstName != null){
        res.user.firstName = req.body.firstName;
    }
    if(req.body.lastName != null){
        res.user.lastName = req.body.lastName;
    }

    if(req.body.email != null){
        res.user.email = req.body.email;
    }

    try{
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch(err){
        res.status(400).json({ message: err.message});
    }

});
//Delete a user
app.delete('/users/:id', getUser, async(req, res)=> {
    try{
        await res.user.remove();
        res.json({message: 'User deleted'});
    } catch(err){
        res.status(500).json({message: err.message});
    }
});

// Middleware function to get a single user by ID
async function getUser(req, res, next){
    let user; 
    try{
        user = await User.findById(req.params.id);
        if(user == null){
            return res.status(404).json({message: 'Cannot find user'});
        }
    } catch(err){
        return res.status(500).json({ message: err.message});
    }

    res.user = user;
    next();
}

app.listen(3000, ()=> console.log('Server Started'));






