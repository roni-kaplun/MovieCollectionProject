import { Request, Response } from "express";
import prisma from "../prisma/client";

// Get all movies
export const getAllMovies = async (req: Request, res: Response) => {
  const movies = await prisma.movie.findMany();
  res.json(movies);
};

// Create a new movie
export const createMovie = async (req: Request, res: Response) => {
  const { title, year } = req.body;
  const movie = await prisma.movie.create({
    data: { title, year },
  });
  res.status(201).json(movie);
};