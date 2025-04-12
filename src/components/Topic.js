import React from "react";
import { Link } from "react-router-dom";


export default function Topic() {
  const categories = [
    "business", "crime", "domestic", "education", "entertainment",
    "environment", "food", "health", "lifestyle", "other",
    "politics", "science", "sports", "technology", "top",
    "tourism", "world"
  ];

  return (
    <>

      <div
        style={{
          height: "calc(100vh - 55px)", width: "16vw", backgroundColor: "#282828",
          display: "flex", alignItems: "center", justifyContent: "center", flexDirection: 'column'
        }} id="topicContainer"
      >
        <p style={{ fontSize: '25px', margin: '10px 0px' }} className="text-center">Categories</p>

        <div style={{
          display: "flex", flexDirection: "column", gap: "15px",
          overflowY: "auto", height: "90%", backgroundColor: "rgb(23 22 22)",
          width: "200px", minHeight: "0", padding: "10px", position: 'relative', borderRadius: '8px'
        }}>

          <ul style={{ padding: "0", margin: "0", listStyle: "none", width: "100%" }}>
            {categories.map((category, index) => (
              <li key={index} style={{ fontSize: "18px", textAlign: "center" }} >
                <Link
                  className="nav-link"
                  to={`/${category}`}
                  style={{ color: "white", textDecoration: "none", display: "block", padding: "15px 0" }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
          <img style={{ position: 'sticky', bottom: '12px', left: '100px', height: '30px' }} src="down.svg" alt="" />
        </div>
      </div>
    </>
  );
}
