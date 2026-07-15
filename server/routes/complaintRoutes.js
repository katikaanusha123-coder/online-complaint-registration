const express = require("express");
const router = express.Router();
console.log("Complaint routes loaded");

const addComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.create(req.body);
    res.status(201).json(complaint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addComplaint };