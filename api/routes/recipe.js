const Recipe = require("../models/Recipe");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newRecipe = new Recipe(req.body);

  try {
    const savedRecipe = await newRecipe.save();
    res.status(200).json(savedRecipe);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRecipe);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.status(200).json("Recipe has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET RECIPE
router.get("/find/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL RECIPES
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let recipes;

    if (qNew) {
      recipes = await Recipe.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      recipes = await Recipe.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      recipes = await Recipe.find();
    }

    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
