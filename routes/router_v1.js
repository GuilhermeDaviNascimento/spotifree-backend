const router = require('express').Router();
const authenticateToken = require('../middlewares/auth');

router.use("/users", authenticateToken, require('./v1/user'));
router.use("/albums", authenticateToken, require('./v1/album'));
router.use("/musics", authenticateToken, require('./v1/music'));
router.use("/", require('./v1/auth'));

module.exports = router;
