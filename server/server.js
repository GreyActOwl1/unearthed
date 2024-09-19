import express from "express";
import giftsRouter from "./routes/gifts.js";

const app = express();

app.use("/public", express.static("./public"));
app.use("/scripts", express.static("scripts"));

app.use("/gifts", giftsRouter);

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center; margin-top: 50px;'>UnEarthed API</h1>"
  );
});

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

