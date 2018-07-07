const router = require("express").Router();
const profileControler = require("../../controllers/profileController");

// Matches with "/api/main"
router.route("/")
    .get(profileControler.findAll)
    .post(profileControler.create);

// Matches with "/api/main/:email"
router
    .route("/:email")
    .get(profileControler.findOne)
    .put(profileControler.update)
    .delete(profileControler.remove);

module.exports = router;