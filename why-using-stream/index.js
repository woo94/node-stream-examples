const express = require("express");
const fs = require("fs");
const path = require("path");

const PORT = 7070;

const app = express();

app.get("/use-buffer", (req, res) => {
  const srcPath = path.join(__dirname, "./file");
  fs.readFile(srcPath, (err, data) => {
    console.log("read file end");

    const destPath = path.join(__dirname, "./file-copy1");
    const dest = fs.createWriteStream(destPath);
    dest.write(data);
    dest.end(() => {
      res.json({ ok: 1 });
    });
  });
});

app.get("/use-stream", (req, res) => {
  const srcPath = path.join(__dirname, "./file");
  const destPath = path.join(__dirname, "./file-copy2");

  const src = fs.createReadStream(srcPath);
  const dest = fs.createWriteStream(destPath);

  src.on("close", () => {
    res.json({ ok: 1 });
  });

  src.pipe(dest);
});

app.listen(PORT, () => {
  console.info(`server is running on port ${PORT}`);
});
