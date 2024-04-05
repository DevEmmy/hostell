import mongoose, {Schema} from "mongoose";

const schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "Users"},
    content: {type: String},
    link: String,
},
{
    timestamps: true
})

const Notifications = mongoose.model("Notifications", schema)
export default Notifications;