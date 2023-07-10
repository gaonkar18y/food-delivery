import { Router } from 'express';
import { getUsers } from '../services/users';
const router = Router();

router.get("/:id", async (req, res, next)=>{
    const dbData = await getUsers();

    res.send({
        username: "test",
        dbData
    });
});

router.post("/",(req, res, next)=>{
    console.log(req.body);
})

export default router;