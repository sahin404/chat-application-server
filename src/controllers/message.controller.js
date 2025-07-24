import User from "../models/user.model";

export const getUsersForSideBar = async (req, res) => {

  try {
    const myId = req.user._id;
    const users = await User.find({ _id: { $ne: myId } }); //ne=>not equal
    res.staus(200).json(users);
  } 
  catch (err) {
    console.error("Sidebar user fetch error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }

};

export const getMessage = async (req, res) => {};

export const sendMessage = async (req, res) => {};
