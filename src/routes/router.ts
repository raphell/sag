import express from 'express';
const router = express();

// Routes
router.use('/accueil', require('./home'));
router.use('/ig', require('./ig'));
router.use('/do', require('./do'));

module.exports = router;
