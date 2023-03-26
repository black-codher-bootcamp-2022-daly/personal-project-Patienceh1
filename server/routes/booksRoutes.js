const mongoose = require("mongoose");
const Book = mongoose.model("books");

const booksRoutes = (app) => {
  app.get(`/api/books`, async (req, res) => {
    const profiles = await Book.find();

    return res.status(200).send(profiles);
  });

  app.post(`/api/books`, async (req, res) => {
    const profile = await Profile.create(req.body);

    return res.status(201).send({
      error: false,
      profile,
    });
  });

  app.put(`/api/books/:id`, async (req, res) => {
    const { id } = req.params;

    const profile = await Profile.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      profile,
    });
  });

  app.delete(`/api/books/:id`, async (req, res) => {
    const { id } = req.params;

    const profile = await Profile.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      profile,
    });
  });
};

module.exports = booksRoutes;
