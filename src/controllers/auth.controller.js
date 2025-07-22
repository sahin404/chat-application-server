import { generateToken } from "../libs/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";

//Signup
export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    // Password length validation
    if (password.length < 6) {
      res.status(400).send("Password Length Must be Greater than 6");
    }

    // Email already exists check
    const isEmailExist = await User.findOne({ email: email });
    if (isEmailExist) {
      res.status(400).send("User is Already Exists");
    }

    // Password hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create New User Instance and save to database
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();

    //generate Token
    try {
      generateToken(savedUser._id, res);
      console.log("New user is created successfully!");
      res.status(201).send("Account is created Successfully");
    } catch (tokenError) {
      //token Error so delete the user from database
      await User.findByIdAndDelete(savedUser._id);
      console.error("Token generation failed:", tokenError.message);
      res.status(500).send("Account creation failed due to internal error.");
    }
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).send("Internal Server Error");
  }
};

export const login = (req, res) => {
  res.send("from login");
};
export const logout = (req, res) => {
  res.send("from logout");
};
