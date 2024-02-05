const express = require("express");
const ideasControllers = require("../controller/ideas");

const ideasRoutes = express.Router();

ideasRoutes.get("/", ideasControllers.getIdeas);
ideasRoutes.post("/", ideasControllers.addIdea);
ideasRoutes.delete("/", ideasControllers.deleteIdea);

module.exports = {
  ideasRoutes,
};
