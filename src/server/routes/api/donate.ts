import * as express from 'express';
import charge from '../../utils/donate';
import db from '../../db';

const router = express.Router();

router.use('/', async (req, res) => {
    try {
        const donateInfo = req.body;
        const r = await charge(donateInfo.token.id, donateInfo.amount);
        res.json(r);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "nope", e});
    }
});

export default router;