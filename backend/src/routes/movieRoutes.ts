import { Router } from "express";
import { getAllMovies, createMovie } from "../controllers/movieController";

const router = Router();

router.get("/", getAllMovies);
router.post("/", createMovie);

export default router;