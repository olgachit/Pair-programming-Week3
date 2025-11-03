const Tour = require("./tourLib");

const getAllTours = (req, res) => {
    res.json(Tour.getAll());
};

const createTour = (req, res) => {
    res.status(201).json(Tour.addOne(req.body.name, req.body.info, req.body.image, req.body.price));
};

const getTourById = (req, res) => {
    res.json(Tour.findById(Number(req.params.tourId)));
};

const updateTour = (req, res) => {
    res.json(Tour.updateOne(Number(req.params.tourId), req.body.name, req.body.info, req.body.image, req.body.price));
};

const deleteTour = (req, res) => {
    res.status(204).json(Tour.deleteOne(Number(req.params.tourId)));
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};