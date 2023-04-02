import React, { useEffect, useState } from "react";
import fetchJsonp from "fetch-jsonp";
import AirlineCard from "../components/AirlineCard";

function Airlines() {
  const [allAirlines, setAllAirlines] = useState([]);
  const [newData, setNewData] = useState([]);

  const [cValue, setCValue] = useState([]);

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
        setNewData(data);
      });
  }, []);

  const matchData = (cv) => {
    let rv;

    cValue.forEach((fval) => {
      if (cv?.alliance == fval) {
        rv = cv;
      } else {
        return;
      }
    });

    return rv;
  };

  const filterData = () => {
      if (cValue.length > 0) {
      const result = allAirlines.filter(matchData);
      setNewData(result);
    } else {
        console.log('ok')
      setNewData(allAirlines);
    }

  };

  const handleCheak = (e) => {
    const name = e.target.name;
    if (e.target.checked) {
      cValue.push(name);
      filterData();
    } else {
      const index = cValue.indexOf(name);
      if (index > -1) {
        cValue.splice(index, 1);
        filterData();
      }
    }
  };

  return (
    <div className="airlines" style={{ margin: "60px 83px" }}>
      <h1 style={{ fontSize: "36px" }}>Airlines</h1>
      <p style={{ fontWeight: "700", fontSize: "20px" }}>Filter by Alliances</p>

      <div style={{ display: "flex", marginBottom: "50px" }}>
        <div style={{ marginRight: "15px" }}>
          <input
            onChange={handleCheak}
            type="checkbox"
            id="OW"
            name="OW"
            value="coding"
          />
          <label for="OW">Oneworld</label>
        </div>
        <div style={{ marginRight: "15px" }}>
          <input
            onChange={handleCheak}
            type="checkbox"
            id="ST"
            name="ST"
            value="coding"
          />
          <label for="ST">Sky Team</label>
        </div>
        <div style={{ marginRight: "15px" }}>
          <input
            onChange={handleCheak}
            type="checkbox"
            id="SA"
            name="SA"
            value="coding"
          />
          <label for="SA">Star Allience</label>
        </div>
      </div>

      <div className="airlineContainer" style={{ gap: "42px" }}>
        {newData.map((airline) => (
          <AirlineCard key={airline?.code} airline={airline}></AirlineCard>
        ))}
      </div>
    </div>
  );
}

export default Airlines;
