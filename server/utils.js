import fetch from "node-fetch";
import { client } from "./db.js";

export const protect = (req, res, next) => {
    if (req.headers.authorization !== "logged" ) {
        res.status("401")
        throw new Error("not authorized")
    } 
    next()
}

export const getMovie = async (req, res) => {

    const APIKEY = process.env.APIKEY;

    const { title, year, type } = req.params;
    
    try {
        const response = await fetch(`http://www.omdbapi.com/?t=${title}&y=${year}&type=${type}&apikey=${APIKEY}`);
    
        const data = await response.json();

        client.setex(`${title}-${year}-${type}`, 3600,  JSON.stringify(data));

        res.json(data)

    } catch (e) {
        console.error(e);
        res.status(500);
    }
} 

export const auth = async (req, res) => {
    const { username,  password } = req.body;

    if (username === "rony" && password === "1234") {
        res.json({
            username,
            msg: "success",
            logged: true
        })
    } else {
        res.status(401)
        throw new Error("password or username are not correct")
    }
} 