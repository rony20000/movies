import redis from "redis";

const REDIS_PORT = process.env.REDIS_PORT || 6379;
export const client = redis.createClient(REDIS_PORT);

export const cache = (req, res, next) => {
    const { title, year, type } = req.params;
    console.log("step 3 cachce")
  
    client.get(`${title}-${year}-${type}`, (err, data) => {

      if (err) throw err;

      if (data !== null) {
        res.json(JSON.parse(data));
      } else {
        next();
      }

    });
}
