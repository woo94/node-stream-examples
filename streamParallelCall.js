const { exec } = require("child_process");

exec(
  "curl -X GET http://localhost:7070/use-stream",
  (error, stdout, stderr) => {
    console.error("error", error);
    console.info("stdout", stdout);
    console.info("stderr", stderr);
  }
);

exec(
  "curl -X GET http://localhost:7070/use-stream",
  (error, stdout, stderr) => {
    console.error("error", error);
    console.info("stdout", stdout);
    console.info("stderr", stderr);
  }
);

exec(
  "curl -X GET http://localhost:7070/use-stream",
  (error, stdout, stderr) => {
    console.error("error", error);
    console.info("stdout", stdout);
    console.info("stderr", stderr);
  }
);
