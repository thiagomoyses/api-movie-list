import { Router } from "express";

const router = Router();

router.post('/category', (req, res) => {
    res.send("chegou aqui");
})

export { router }