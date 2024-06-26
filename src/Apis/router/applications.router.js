const router = require("express").Router();
const controller = require("../controller/applications.controller");

router.get("/my/:fk", controller.get_my);
router.get("/one/:id", controller.get_one);
router.get("/all/:fk", controller.get_all_custom);
router.post("/", controller.create);
router.patch("/:id", controller.update);
router.delete("/:id", controller.delete);

router.post("/count-applied", controller.getCountApplied);
router.post("/get-everything", controller.getEverything);
router.post("/get-summary", controller.getSummaryByStatus);

module.exports = router;
