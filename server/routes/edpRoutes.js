const express = require("express");
const router = express.Router();

//controller functions
const {
	createEDPData,
	getEDPDataByEmail,
	getEDPDataByID,
	updateEDPData,
	deleteEDPData,
	getNonCompletedEDPDataByEmail,
} = require("../controllers/edpController.js");

//goals module
router.post("/createEDP", createEDPData);
router.get("/getEDPByEmail/:staffEmail", getEDPDataByEmail);
router.get("/getEDPByID/:edpID", getEDPDataByID);
router.get(
	"/getNonCompletedEDPByEmail/:staffEmail",
	getNonCompletedEDPDataByEmail,
);
router.put("/updateEDP/:edpID", updateEDPData);
router.delete("/deleteEDPByID/:edpID", deleteEDPData);

module.exports = router;
