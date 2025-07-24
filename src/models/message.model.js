import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
    {

    }, { timestamps:true }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
