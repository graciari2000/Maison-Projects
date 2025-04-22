const express = require("express");
const router = express.Router();
const loanController = require("../controllers/loanController");

router.get("/", loanController.getLoans);
router.post("/", loanController.createLoan);
router.put("/:id/return", loanController.returnBook);

module.exports = router;