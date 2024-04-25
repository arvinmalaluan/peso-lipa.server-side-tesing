const router = require("express").Router();
const controller = require("../controller/interview.controller");

router.get("/one/:id", controller.get_one);
router.get("/all/:fk", controller.get_all);
router.post("/", controller.create);
router.put("/", controller.update);
router.delete("/", controller.delete);

module.exports = router;
