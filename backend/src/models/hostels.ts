import mongoose, {Schema} from "mongoose";


const schema = new Schema({
    title: String,
    images: [{type: String}],
    location: String,
    description: String,
    price: String,
    features: [{type: String}],
    available: {type: Boolean, default: true},
    availableRooms: {type: Number, default: 1},
    createdBy: {type: Schema.Types.ObjectId, ref: "Users"}
},
{
    timestamps: true
})

const Hostels = mongoose.model("Hostels", schema)
export default Hostels;