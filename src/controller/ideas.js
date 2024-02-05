const Idea = require("../models/idea");
const { RequestError, NotFoundError, ForbiddenError } = require("../errors");

const getIdeas = (req, res, next) => {
  Idea.find({})
    .then((ideas) => res.send({ data: ideas }))
    .catch(next);
};

const addIdea = (req, res, next) => {
  const { category, name, year, architects, description, links, feedback } =
    req.body;
  Idea.create({
    category,
    name,
    year,
    architects,
    description,
    links,
    feedback,
  })
    .then((idea) => res.status(201).send({ data: idea }))
    .catch((err) => {
      if (err.name === "ValidationError" || err.name === "CastError") {
        next(new RequestError("Data is not valid or Bad request"));
      } else {
        next(err);
      }
    });
};

const deleteIdea = (req, res, next) => {
  const { cardId } = req.params;
  Idea.findById(cardId)
    .orFail(() => {
      throw new NotFoundError(`Thre is no cards with id ${req.params.cardId}`);
    })
    .then((card) => {
      return card
        .remove()
        .then(() => res.send({ message: "The card was deleted" }));
    })
    .catch(next);
};

const updateIdea = (req, res, next) => {
  const { itemId, confirmed } = req.body;
  Idea.findByIdAndUpdate(itemId, { confirmed }, { new: true })
    .orFail(() => {
      throw new NotFoundError("Some Error");
    })
    .then((idea) => res.send({ data: idea }))
    .catch((err) => {
      if (err.name === "ValidationError" || err.name === "CastError") {
        next(new RequestError("Data is not valid or Bad request"));
      } else {
        next(err);
      }
    });
};

module.exports = {
  getIdeas,
  addIdea,
  deleteIdea,
};
