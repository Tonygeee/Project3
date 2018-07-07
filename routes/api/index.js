const router = require("express").Router();

const profileRoutes = require("./profiles");

const mainRoutes = require("./main");

// profile routes
router.use("/profiles", profileRoutes);

router.use("/main", mainRoutes);

module.exports = router;
