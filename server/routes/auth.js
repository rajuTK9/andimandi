const express = require("express");
const router = express.Router();

const Data = require("../model/schema");

router.get("/", (req, res) => {
  res.send("Bhadas Home");
});

router.get("/get-data/:id", async (req, res) => {
  try {
    const data = await Data.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/save", async (req, res) => {
  const { message, likes } = req.body;
  if (!(likes || message)) {
    return res.status(422).json({ error: "Incomplete information" });
  }
  try {
    const data = new Data({ message, likes });
    await data.save();
    res.status(500).json({
      message: `Ho gaya. Ab Maa Chuda!`,
    });
  } catch (err) {
    res.status(500).json({
      error: "An error occured, please try again later. \n Error:",
      err,
    });
  }
});

module.exports = router;
