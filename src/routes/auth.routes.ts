import { Router } from "express";

const router = Router();

router.post('/login', (req, res) => {
    return res.send("hello");
});


export { router }