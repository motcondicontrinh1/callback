let fs = require("fs");
fs.readFile("./a.txtt", "utf8", (err, data) => {
  if (err) return console.log("Loi:" + err);
  console.log("Du lieu: " + data);
});

console.log("Ket thuc");
