const router = require("express").Router();
const profileControler = require("../../controllers/profileController");

// Matches with "/api/books"
router.route("/")
    .get(profileControler.findAll)
    .post(profileControler.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(profileControler.findById)
    .put(profileControler.update)
    .delete(profileControler.remove);

module.exports = router;