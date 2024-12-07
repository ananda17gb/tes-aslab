import axios from "axios";
import { useEffect, useState } from "react";

function HomePage() {
  const [postTP, setPostTP] = useState([]);

  const [judul, setJudul] = useState("");
  const [subJudul, setSubJudul] = useState("");
  const [kategori, setKategori] = useState("");
  const [deadlineTP, setDeadlineTP] = useState("");
  const [deskripsiTP, setDeskripsiTP] = useState("");

  // const getTP = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:3000/");
  //     return res.data;
  //   } catch (err) {
  //     console.log(err);
  //     return err;
  //   }
  // };

  useEffect(() => {
    axios.get("http://localhost:3000/").then((data) => {
      setPostTP(data.data);
    });
  }, []);

  const addTP = async (
    judul,
    sub_judul,
    kategori,
    deadline_tp,
    deskripsi_tp
  ) => {
    try {
      const res = await axios.post("http://localhost:3000/", {
        judul,
        sub_judul,
        kategori,
        deadline_tp,
        deskripsi_tp,
      });
      return res.data;
    } catch (err) {
      console.log(err);
      return { error: err };
    }
  };

  const updateTP = async (
    judul,
    sub_judul,
    kategori,
    deadline_tp,
    deskripsi_tp,
    id
  ) => {
    try {
      const res = await axios.put("http://localhost:3000/" + id, {
        judul,
        sub_judul,
        kategori,
        deadline_tp,
        deskripsi_tp,
      });
      return res.data;
    } catch (err) {
      return {
        error: err,
      };
    }
  };
  const deleteTP = async (id) => {
    try {
      const res = await axios.delete("http://localhost:3000/" + id);
      return res.data;
    } catch (err) {
      return { error: err };
    }
  };

  return (
    <>
      <div>
        {Object.keys(postTP).map((val, key) => {
          return (
            <div key={key} className="flex justify-evenly">
              {postTP[val].map((tp, i) => (
                <div key={i}>
                  <p>{tp.judul}</p>
                  <p>{tp.sub_judul}</p>
                  <p>{tp.kategori}</p>
                  <p>{tp.deadline_tp}</p>
                  <p>{tp.deskripsi_tp}</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HomePage;
