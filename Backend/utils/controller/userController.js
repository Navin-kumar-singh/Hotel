import { Webhook } from "svix";
import UserModel from "../model/userModel.js";

const clerkWebhoooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    await whook.verify(JSON.stringify(req.body), headers);

    const { data, type } = req.body;

    const userData = {
      _id: data.id,
      email: data.email_addresses?.[0]?.email_address || "",
      username: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
      image: data.image_url,
    };

    switch (type) {
      case "user.created":
        await UserModel.create(userData);
        break;

      case "user.updated":
        await UserModel.findByIdAndUpdate(data.id, userData);
        break;

      case "user.deleted":
        await UserModel.findByIdAndDelete(data.id);
        break;

      default:
        break;
    }

    res.json({ success: true, message: "Webhook received" });
  } catch (error) {
    console.error("Webhook error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export default clerkWebhoooks;






































// import UserModel from "../model/userModel.js";

// // ✅ Signup Controller - Register a new user
// export const signup = async (req, res) => {
//   try {
//     const { name, email, mobile, login } = req.body;
// // 
//     if (!name || !email || !mobile) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const existingUser = await UserModel.findOne({ email });
//     if (existingUser) {
//       return res.status(409).json({ message: "User already exists with this email" });
//     }

//     const newUser = new UserModel({ name, email, mobile, login });
//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully", user: newUser });
//   } catch (error) {
//     res.status(500).json({ message: "Signup failed", error: error.message });
//   }
// };

// // ✅ Login Controller - Dummy login based on email only (no password yet)
// export const login = async (req, res) => {
//   try {
//     const { email } = req.body;

//     if (!email) {
//       return res.status(400).json({ message: "Email is required to login" });
//     }

//     const user = await UserModel.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found with this email" });
//     }

//     // You can enhance this later with password check and JWT
//     res.status(200).json({ message: "Login successful", user });
//   } catch (error) {
//     res.status(500).json({ message: "Login failed", error: error.message });
//   }
// };

// // ✅ Get All Users (Optional utility endpoint)
// export const getUsers = async (req, res) => {
//   try {
//     const users = await UserModel.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Unable to fetch users", error: error.message });
//   }
// };




