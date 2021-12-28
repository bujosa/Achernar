const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));

app.post("/", (req, res) => {
  const { image, user } = decodeBase64Json(req.body.message.data);
  try {
    console.log(`Upload your picture`);
    res.status(200).send("OK");
  } catch (e) {
    console.log(e);
    res.status(500).send("Error");
  }
});

function decodeBase64Json(data) {
  return JSON.parse(Buffer.from(data, "base64").toString());
}

function uploadPicture(image) {
  console.log("Upload picture");
}
