const axios = require("axios");
const router = require("express").Router();
const profileController = require("../../controllers/eventController");

router.get("/search", (req, res) => {
    axios
        .get("https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=NyUgIOdhF4S6fXn0BFIY7Afii13kPKnc", { params: req.query })
        .then(({ data: { results } }) => res.json(results))
        .catch(err => res.status(422).json(err));
});

router.route("/main")
  .get(eventController.findAll)
  .post(eventController.create);

// Matches with "/api/profile/:id"
// router
//   .route("/:id")
//   .get(profileController.findById)
//   .put(profileController.update)
//   .delete(profileController.remove);

module.exports = router;