const router = require("express").Router();

const profileRoutes = require("./profiles");

const mainRoutes = require("./main");

const eventsRoutes = require("./events");

const authRoutes = require("./auth");

// profile routes
router.use("/profiles", profileRoutes);

router.use("/main", mainRoutes);

router.use("/events", eventsRoutes);

router.use("/auth", authRoutes);

module.exports = router;
