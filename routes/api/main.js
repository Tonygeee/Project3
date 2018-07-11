const router = require("express").Router();
const profileControler = require("../../controllers/profileController");

// Matches with "/api/main"
router.route("/")
    .get(profileControler.findAll)
    .put(profileControler.update)
    .post(profileControler.create);

// Matches with "/api/main/:email"
router
    .route("/:userName")
    .get(profileControler.findOne)
    .delete(profileControler.remove);

module.exports = router;