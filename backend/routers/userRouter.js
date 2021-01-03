import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import data from '../data.js';
import { generateToken } from '../utils.js';


const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    await User.deleteMany({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
})
);

userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const { email, password, passwordCheck, userName, isAdmin } = req.body;

    //validations
    if (!email || !password || !passwordCheck || !isAdmin)
      return res
        .status(400)
        .json({ msg: "Check, Not all fields have been entered." });

    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: "The password needs to be atleast 5 characters long" });

    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification" });

    const existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "An account with this email already exists." });

    if (!userName) userName = email;

    const passwordHash = bcrypt.hashSync(password, 8);
    console.log(passwordHash);

      await new User.save()
    res.send({ savedUser });
  })
);

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (req.body.password === user.password) {
        res.send({
          id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
      } else {
        res.status(401).send({ message: "Invalid email or password" });
      }
    } else {
      res.status(401).send({ message: "User not found, register." });
    }
  })
);


export default userRouter;