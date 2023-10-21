import React, { useState } from "react";
import axios from "axios";
import Translator from "./Translator";
function Shopping() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  // Add state variables for the product name, price, and image

  const handleSearch = async () => {
    setLoader(true);
    try {
      const response = await axios.get(`http://localhost:3001/${keyword}`); // Replace with the actual backend URL
      console.log("response: ", response);
      setData(response.data);
      setLoader(false);
    } catch (error) {
      console.error("Scraping failed:", error);
    }
  };

  function Check(object) {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        if (!object[key]) {
          return true;
        }
      }
    }
    return false;
  }

  return (
    <div className="container">
      <h3 className="title">Product Search</h3>
      <div className="input_div">
        <span className="name">Write the product name</span>
        <div>
          <input
            className="input"
            type="text"
            placeholder="Enter a keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div>
          <button className="button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      {!loader && !Check(data[0]) && data.length > 0 ? (
        <div className="data_div">
          <div className="image">
            <img src={data[0].src} alt="" />
          </div>
          <div className="price">
            <p>
              The price of {data[0].title} is rupees {data[0].price}
            </p>
            <Translator text={data[0].title + data[0].price} />
          </div>
        </div>
      ) : (
        <div className="loader_div">
          {loader ? (
            <div className="loader"></div>
          ) : (
            <span>Sorry, no product Ad found</span>
          )}
        </div>
      )}
    </div>
  );
}

export default Shopping;
