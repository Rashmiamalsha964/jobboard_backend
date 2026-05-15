const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Job = require("./models/Job");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


// GET all jobs
app.get("/api/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();

    res.status(200).json(jobs);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// GET single job
app.get("/api/jobs/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        error: "Job not found",
      });
    }

    res.json(job);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// CREATE job
app.post("/api/jobs", async (req, res) => {
  try {
    const newJob = new Job(req.body);

    const savedJob = await newJob.save();

    res.status(201).json(savedJob);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// UPDATE status
app.patch("/api/jobs/:id", async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      { new: true }
    );

    res.json(updatedJob);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// DELETE job
app.delete("/api/jobs/:id", async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);

    res.json({
      message: "Job deleted successfully",
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// 404 route
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});