const express = require("express");
const router = express.Router();
const controller = require("../controllers/docsControllers");
const protect = require("../middleware/hostMiddleware");

// router.route("/").get(protect, controller.getAllDocs);

router.route("/:id").get(protect, controller.getDoc);

module.exports = router;
