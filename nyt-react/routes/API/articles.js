const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Goes with api/books //
router.route("/")
	.get(articleController.findAll)
	.post(articleController.create);

router.route("/:id")
	.get(articleController.findById)
	.put(articleController.update)
	.delete(articleController.remove);


module.exports = router;

