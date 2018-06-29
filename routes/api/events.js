const axios = require("axios");
const router = require("express").Router();

router.get("/:zipCode", (req, res) => {
    axios
        .get("https://app.ticketmaster.com/discovery/v2/events.json", { params: req.query })
        .then(({ data: { results } }) => res.json(results))
        .catch(err => res.status(422).json(err));
});

module.exports = router;