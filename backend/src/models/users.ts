import mongoose, {Schema} from "mongoose";

const schema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    userType: {type: String, default: UserType.BASIC},
    getHostelNotification: {type: String, default: false}
},
{
    timestamps: true
})

const Users = mongoose.model("Users", schema)
export default Users;