const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./API");

// API Routes //
router.use("./API", apiRoutes);

// Default route if no routes are hit //
router.use(function(req, res) {
	res.sendfile(path.join(__dirname,"../client/build/index.html"));
});

module.exports = router;