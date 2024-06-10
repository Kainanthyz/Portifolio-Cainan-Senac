import { createUser } from "../models/User.js";


export const addUser = async (req,res) => {
    try {
        const {name, email} = req.body;
       const user = await createUser(name,email);
       res.status(201).json({ user });

    } catch(error) {
        res.status(500).json({error: "failed to add users",
    menssage: error.menssage});
        }
}