const express = require("express");
const bookingController = require("../controllers/bookingController");

let router = express.Router();


router.post("/add", bookingController.addBooking);
router.get("/get", bookingController.getAllBooking);
router.put("/update/:id", bookingController.updateBooking);
router.delete("/delete/:id", bookingController.deleteBooking);

module.exports = router;