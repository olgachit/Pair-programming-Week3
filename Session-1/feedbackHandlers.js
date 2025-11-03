const Feedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
  const feedbacks = Feedback.getAll();
  res.status(200).json(feedbacks);
};

const createFeedback = (req, res) => {
  const { sender, message, rating } = req.body;

  if (!sender || !message || !rating) {
    return res.status(400).json({ message: "Missing data" });
  }

  const newFeedback = Feedback.addOne(sender, message, rating);
  res.status(201).json(newFeedback);
};

const getFeedbackById = (req, res) => {
  const feedback = Feedback.findById(req.params.feedbackId);
  if (!feedback) return res.status(404).json({ message: "Feedback not found" });
  res.status(200).json(feedback);
};

const updateFeedback = (req, res) => {
  const updated = Feedback.updateById(req.params.feedbackId, req.body);
  if (!updated) return res.status(404).json({ message: "Feedback not found" });
  res.status(200).json(updated);
};

const deleteFeedback = (req, res) => {
  const deleted = Feedback.deleteById(req.params.feedbackId);
  if (!deleted) return res.status(404).json({ message: "Feedback not found" });
  res.status(204).send();
};

module.exports = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};
