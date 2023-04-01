import React, { useEffect, useState } from "react";
import fetchJsonp from "fetch-jsonp";
import AirlineCard from "../components/AirlineCard";

function Airlines() {
  const [allAirlines, setAllAirlines] = useState([]);
//   const [fValue, setFValue] = useState([])

  const cValue = [];

  useEffect(() => {
    fetchJsonp(
      "https://www.kayak.com/h/mobileapis/directory/airlines/homework",
      {
        jsonpCallback: "jsonp",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setAllAirlines(data);
      });
  }, []);

  const filterData = () => {
    console.log(cValue);
    // continue -----------------------------------------------------------------------------------
  }


  const handleCheak = (e) => {
    const name = e.target.name;
    if (e.target.checked) {

        cValue.push(name)
        filterData()
        
      } else {

        const index = cValue.indexOf(name);
        if (index > -1) {
            cValue.splice(index, 1);
          }
          filterData();
      }
      
  }

  return (
    <div style={{ margin: "60px 83px" }}>
      <h1 style={{ fontSize: "36px" }}>Airlines</h1>
      <p style={{ fontWeight: "700", fontSize: "20px" }}>Filter by Alliances</p>

      <div style={{display:'flex', marginBottom:'50px'}}>
        <div  style={{marginRight:'15px'}}>
          <input onChange={handleCheak} type="checkbox" id="coding" name="OW" value="coding" />
          <label for="coding">Oneworld</label>
        </div>
        <div style={{marginRight:'15px'}}>
          <input onChange={handleCheak}  type="checkbox" id="coding" name="ST" value="coding" />
          <label for="coding">Sky Team</label>
        </div>
        <div style={{marginRight:'15px'}}>
          <input onChange={handleCheak} type="checkbox" id="coding" name="SA" value="coding" />
          <label for="coding">Star Allience</label>
        </div>
      </div>

      <div className="airlineContainer" style={{ gap: "42px" }}>
        {allAirlines.map((airline) => (
          <AirlineCard key={airline?.code} airline={airline}></AirlineCard>
        ))}
      </div>
    </div>
  );
}

export default Airlines;
