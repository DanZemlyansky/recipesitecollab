const { User } = require('../Models/user.model')
const bcrypt = require('bcrypt');
const { generateToken , verifyToken} = require('../utils/jwt')

const getUsers = async(req,res)=>{
    const query =  req.query
    const user = await User.find({...query})
    res.send(user)
}

const getUser =  async(req,res)=>{
    try{
        const link = await User.findById(req.user.id)
        res.send(link)
    }
    catch(err){
        res.status(400).send("cannot find user")
    }
}

const Register = async (req, res) => {
    try {
        const body = req.body;
        const hash = await bcrypt.hash(body.password, 10);
        body.password = hash;
        const user = new User(body);
        user.id = user._id;
        console.log(body);
        await user.save();
        res.status(200).send(user);
    } catch (err) {
        res.status(400).send("Error, cannot register: " + err.message);
    }
};

const Login = async (req, res) =>{
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email})
        if(user){
        const isMatch = await bcrypt.compare(password, user.password)
        if(isMatch){
            const token = generateToken({id: user._id ,email: user.email})
        return res.send({user, token});
    } 
    return res.status(401).send("Email or password are incorrect");
    };
    return res.status(401).send("Email or password are incorrect");
    }
    catch(err){
        res.status(400).send("Cannot Log in")
    }
}

module.exports = {getUser, getUsers, Register, Login}