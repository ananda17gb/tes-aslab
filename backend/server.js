const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "iflabs",
});

const app = express();
const port = 3000;
app.use(cors());

app.get("/", (req, res) => {
  db.query("Select * from  tes_pendahuluan", (err, result) => {
    console.log(err, result);
    if (err) return res.json({ error: err.sqlMessage });
    else return res.json({ result });
  });
});

app.post("/", (req, res) => {
  const { judul, sub_judul, kategori, deadline_tp, deskripsi_tp } = req.body;
  db.query(
    "insert into tes_pendahuluan (judul, sub_judul, kategori, deadline_tp, deskripsi_tp) values (?,?,?,?,?)"
  ),
    [judul, sub_judul, kategori, deadline_tp, deskripsi_tp],
    (err, result) => {
      console.log(err, result);
      if (err) return res.json({ error: err.sqlMessage });
      else return res.json({ result });
    };
});

app.put("/user", (req, res) => {
  const { judul, sub_judul, kategori, deadline_tp, deskripsi_tp } = req.body;
  const id = req.params.id;
  const data = req.body;
  db.query(
    `update tes_pendahuluan set (judul, sub_judul, kategori, deadline_tp, deskripsi_tp) values (?,?,?,?,?) where id = ?>`
  ),
    [judul, sub_judul, kategori, deadline_tp, deskripsi_tp, id],
    (err, result) => {
      console.log(err, result);
      if (err) return res.json({ error: err.sqlMessage });
      else return res.json({ result });
    };
});

app.delete("/user", (req, res) => {
  const id = req.params.id;
  db.query("delete from tes_pendahuluan where id = ?", id, (err, result) => {
    console.log(err, result);
    if (err) return res.json({ error: err.sqlMessage });
    else return res.json({ result });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
