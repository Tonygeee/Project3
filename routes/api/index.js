const router = require("express").Router();

const profileRoutes = require("./profiles");

const mainRoutes = require("./main");

const eventsRoutes = require("./events");

// profile routes
router.use("/profiles", profileRoutes);

router.use("/main", mainRoutes);

router.use("/events", eventsRoutes);

module.exports = router;
