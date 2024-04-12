import express from "express";
import * as filmController from "../controllers/filmController";
const router = express.Router();
router.get("/", filmController.getAllFilms); 
