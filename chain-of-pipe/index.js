const express = require("express");
const sharp = require("sharp");
const busboy = require("busboy");
const { pipeline } = require("node:stream");

const app = express();
const PORT = 7072;

app.post("/use-stream", (req, res) => {
  console.log(req.headers);
  const bb = busboy({ headers: req.headers });

  const transformer = sharp({
    limitInputPixels: 0,
  }).resize({
    width: 300,
    height: 300,
    fit: sharp.fit.cover,
    position: sharp.strategy.entropy,
  });

  bb.on("file", (name, file, info) => {
    // fails
    // pipeline(file, transformer, res, (err) => {
    //   if (err) {
    //     console.log("err", err);
    //   }
    //   console.log("end of the pipeline");
    // });

    // fails
    file.pipe(transformer).pipe(res);
  });

  bb.on("close", () => {
    console.log("bb close");
  });

  req.pipe(bb);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
