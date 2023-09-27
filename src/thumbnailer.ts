import axios from "axios";
import express from "express";
import sharp from "sharp";

const app = express();

app.get("/:imageUrl", async (req, res) => {
    // Set up the resizer
    const resizer = sharp().resize(400).jpeg();

    // Fetch the *LARGE* image from the URL
    const { data } = await axios.get(req.params.imageUrl, { responseType: "stream" });

    // Cache response so we don't have to re-download the image every time
    res.header("Cache-Control", "public, max-age=31536000");

    // Pipe the image through the resizer and then to the response
    data.pipe(resizer).pipe(res);
});

app.listen(3333, () => {
    console.log("Server is running");
});
