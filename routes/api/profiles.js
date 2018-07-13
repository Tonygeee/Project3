const router = require("express").Router();
const profileController = require("../../controllers/profileController");

// app.post("/authenticate", (req, res) => {
//     const authData = chatkit.authenticate({ userId: req.query.user_id });
//     res.status(authData.status).send(authData.body);
// });

router.route("/main")
    .get(profileController.findAll)
    .post(profileController.create);

module.exports = router;
