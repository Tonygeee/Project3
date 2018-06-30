const path = require("path");
const router = require("express").Router();
const multer = require("multer");
var upload = multer({ dest: '../../uploads/' })


router.post("/photo", upload.single('avatar'), function (req, res) {
	console.log("something")
	// var newItem = new Item();
	// newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
	// newItem.img.contentType = `image / png`;
	// newItem.save();
});



module.exports = router;