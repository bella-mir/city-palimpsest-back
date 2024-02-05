const router = require("express").Router();
const { ideasRoutes } = require("./ideas");
const { NotFoundError } = require("../errors");

router.use("/ideas", ideasRoutes);

router.use((req, res, next) => {
  next(new NotFoundError("Route doesnt exist"));
});

module.exports = router;
