const axios = require("axios");
const router = require("express").Router();
const eventController = require("../../controllers/eventController");

// router.get("/search", (req, res) => {
//   console.log(req.params);
//   axios
//     .get("https://app.ticketmaster.com/discovery/v2/events.json?size=1&postalCode=" + req.params + "&apikey=NyUgIOdhF4S6fXn0BFIY7Afii13kPKnc")
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

router.route("/")
  .get(eventController.findOne)
  .put(eventController.update)
  .post(eventController.create);

// Matches with "/api/profile/:id"
// router.route("/:id")
//   .get(eventController.findOne)
//   .put(eventController.update)
//   .delete(eventController.remove);

module.exports = router;