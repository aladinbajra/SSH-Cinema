import FilmModel from "../models/film";
const getAllFilms = async (req, res) => {
  try {
    const films = await FilmModel.find();
    res.json(films);
  } catch (error) {
    res.status(500).send(error.message);
  }
}; 
