const User = require('../models/user.models');


exports.registerNewUser = async (req, res) => {
  try{
    const isUser = await User.find({ email: req.body.email });
    console.log(isUser);

    if(isUser.lenght >= 1){
      return res.status(409).json({ 
        message: "Sorry! This email is already registered!" 
      })
    }
    const newUser = await User(req.body);
    const user = await newUser.save();
    const token = await newUser.generateAuthToken();
    res.status(200).json({ 
      message: 'User created successfully', user, token
    });
  }catch(err){
    res.status(400).json({ err: err });
  }
}

exports.loginUser = async (req, res) => {
  try {
    const { email } = req.body;  
    const { password } = req.body;
    const user = await User.findByCredentials(email, password);

    if(!user){
      return res.status(401).json({ message: "Invalid credentials." })
    }

    const token = await user.generateAuthToken();
    res.status(201).json({ message: "Login successful.", user, token });
  } catch (err) {
    res.status(400).json({ err });
  }
}

exports.returnUserProfile = async (req, res) => {
  await res.json(req.userData);
}
