
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { createUser, getUserWithPassword } from '../services/users';
import { LoginRequest, UserRequest } from '../models/requests';


const router = Router();

router.post("/signup", async (req, res, next) => {
    const user: UserRequest = req.body;
    try {
        const result = await createUser(user);
        console.log(result);
        res.send({
            message: "Signup successful"
        });
        return;
    } catch (err) {
        const error = err as Error
        console.log(error.message);
        if (error.message.includes("duplicate key value violates unique constraint")) {
            res.status(400).send({ message: "user with email already exists" });
            return;
        }
        res.status(500).send({ message: "error in signup, please try after some time" })
    }

});

router.post("/login", async (req, res, next) => {
    const user: LoginRequest = req.body;
    try {
        const result = await getUserWithPassword(user);
        if (result.length === 1) {
            const payload = {
                email: result[0].email,
                firstName: result[0].firstname,
                lastName: result[0].lastname,
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET as string)
            res.send({
                message: "Login successful",
                token
            });
        } else {
            res.status(401).send({ message: "Invalid email and password" });
        }
        return;
    } catch (err) {
        const error = err as Error
        console.log(error.message);
        res.status(500).send({ message: "error in login, please try after some time" })
    }
})


router.get("/auth", async (req, res, next) => {
    const token = req.get('Authorization');
    if (token) {
        try {
            var decoded = jwt.verify(token, process.env.JWT_SECRET as string);
            res.status(200).send({ data: decoded});
        } catch (err) {
            res.status(401).send({ message: "Token is invalid" });
        }
    } else {
        res.status(401).send({ message: "Token is missing" });
    }
})

export default router;