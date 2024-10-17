
const userModel = require('../models/userModel.js')
const bcrypt = require('bcryptjs');

// Store hash in your password DB.
const UserSignUpController = async (req, res) => {
    try {

        const { email, password, name } = req.body;


        // console.log(req.body);

        if (!email) {
            throw new Error("plese provide email")


        }

        if (!password) {
            throw new Error("please provide password")
        }
        if (!name) {
            throw new Error("please provide name")
        }
        const salt = bcrypt.genSaltSync(10);
        const hashpassword = await bcrypt.hashSync(password, salt);
        if (!hashpassword) {
            throw new Error("something went wrong")
        }
        const playload = {
            ...req.body,
            role: "GENERAL",
            password: hashpassword
        }

        const exEmail = await userModel.findOne({ email })
        // console.log(exEmail);

        if (exEmail) {

            throw new Error("already email exist")

        }
        const userData = new userModel(playload)
        const saveUser = await userData.save()


        res.status(201).json({
            data: true,
            success: true,
            message: "user created"
        })

    } catch (error) {

        res.json({
            "error": error.message,
            "success": false,
            "failed": true

        })

    }

}

module.exports = UserSignUpController