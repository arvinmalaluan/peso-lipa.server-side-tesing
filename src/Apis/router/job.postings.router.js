const router = require("express").Router();
const controller = require("../controller/job.postings.controller");

router.post("/create", controller.create);
router.get("/get", controller.get);
router.get("/get-w-profile/:id", controller.getWProfile);
router.get("/get_id/:id", controller.get_using_id);
router.get("/get_fk/:fk", controller.get_using_fk);
router.patch("/patch/:id", controller.patch);

router.post("/applicants", controller.getAllApplicants);
router.post("/active-count", controller.getActiveCount); // ! --> working but not implemented
router.post("/get-everything", controller.getEverything); // ! --> working but not implemented
router.post("/get-vc", controller.getViewsCounts); // ! --> working but not implemented

// router.get("/delete/:id")

module.exports = router;
