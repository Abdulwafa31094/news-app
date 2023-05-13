import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const FetchData = ({cat}) => {
  const [Data, setData] = useState("");
  const FetchData = async () => {
    await axios
      .get(
         cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=6be7e6b3715244c58c437818d844580d` :
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=6be7e6b3715244c58c437818d844580d"
      )
      .then((res) => setData(res.data.articles));
  };

  useEffect(() => {
    FetchData();
  }, [cat]);
  return (
    <div className="container my-4" >
      <h3>
        <u>TOP HEADINGS </u>
      </h3>
      <div className=" container d-flex justify-content-center align-items-center flex-column my-3" style={{minHeight:"100vh"}}>
        {" "}
        {Data
          ? Data.map((items, index) => (
              <>
                <div className="container my-3 p-3 " style={{ width: "600px", boxShadow:"2px 2px 10px silver", borderRadius:"10px" }}>
                  <h5 className="my-2">{items.title}</h5>
                  <div className=" d-flex justify-content-center align-items-center ">
                    <img
                      src={items.urlToImage}
                      alt="Image not found"
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <p className="my-1">{items.content} </p>
                  <Link to={items.url} target="_blank">
                    {" "}
                    view more...
                  </Link>
                </div>
              </>
            ))
          : "loading.."}{" "}
      </div>
    </div>
  );
};

export default FetchData;
