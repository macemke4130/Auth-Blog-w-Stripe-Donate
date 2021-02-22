import * as express from 'express';
import postsRouter from './posts';
import usersRouter from './users';
import donateRouter from './donate';

const router = express.Router();

router.use('/posts', postsRouter);
router.use('/users', usersRouter);
router.use('/donate', donateRouter);

export default router;