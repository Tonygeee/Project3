const router = require("express").Router();
const profileControler = require("../../controllers/profileController");

// Matches with "/api/main"
router.route("/")
    .get(profileControler.findAll)
    .post(profileControler.create);

// Matches with "/api/main/:id"
router
    .route("/:id")
    .get(profileControler.findById)
    .put(profileControler.update)
    .delete(profileControler.remove);

module.exports = router;