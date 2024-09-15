import { Router } from "express";
import { createFood } from "../controller/food.js";


const foodRouter = Router();

foodRouter.post("/create", createFood)
// .get("/", getFoods)
// .get("/:id", getFoodByID)
// .put("/:id", updateFood)
// .delete("/:id", deleteFood);

export {foodRouter}