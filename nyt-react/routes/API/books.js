const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches /api/books //
router.route("/")
	.get(booksController.findAll)
	.post(booksController.create);

