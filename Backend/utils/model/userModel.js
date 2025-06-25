import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: true },
  role: { type: String, enum: ["user", "hotelOwner"], default: "user" },
  recentSearchCities: { type: [String], default: [] } // now an array
}, { timestamps: true });

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
