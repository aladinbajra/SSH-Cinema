import express, { Express, Request, Response } from "express";
import path from "path";
import { MongoClient } from "mongodb";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import usersRouter from "./src/routes/usersRoutes";
import filmsRouter from "./src/routes/filmRoutes";
import authRouter from "./src/routes/auth";
import authFilmsRouter from "./src/routes/authfilms";

const app: Express = express();
app.use(cors());
dotenv.config();

const isDev: boolean = app.get("env") === "development";

// Middleware to parse JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/films", filmsRouter);
app.use("/api/authfilms", authFilmsRouter);

const port: string | number = process.env.PORT || 3000;

const dbName: string = 'playground';
const uri: string = process.env.MONGODB_URI || "";

const options = {
    useNewUrlParser: true, // Use new URL parser
    useUnifiedTopology: true, // Use new Server Discover and Monitoring engine
};

// Connect to MongoDB
MongoClient.connect(uri, options)
    .then(client => {
        const db = client.db(dbName);
        app.set("db", db);

        // Define a route to serve the index.html file
        app.get("/", (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname, "./index.html"));
        });

        // Define a test route to send JSON response
        app.get("/api/test", (req: Request, res: Response) => {
            res.json({ mes: "Hello from express" });
        });

        app.listen(port, () => console.log(`Running on localhost:${port}`));
    })
    .catch(err => console.log("Error connect", err));
