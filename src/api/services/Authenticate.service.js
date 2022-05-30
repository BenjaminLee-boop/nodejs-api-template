import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Authenticate Get');
});

export default router;
