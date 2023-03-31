import React from "react";

function AirlineCard({ airline }) {
  console.log("paici", airline);

  const {
    __clazz,
    usName,
    site,
    phone,
    name,
    logoURL,
    defaultNamec,
    code,
    alliance,
  } = airline;
  const photoURL = "https://www.kayak.com/" + logoURL;

  return (
    <div
        className="card"
      style={{
        display: "flex",
        gap: "15px",
        alignItems: "center",
        justifyContent: "center",
        overflowWrap: "hidden",
        width: "252px",
        height: "185px",
        border: "1px solid #D4D4D4",
        borderRadius: "2px",
        boxShadow: "0px 2px 6px 1px #D4D4D4",
      }}
    >
      <div>
        <img
          style={{ maxWidth: "50px", height: "auto" }}
          src={photoURL}
          alt="logo"
        />
      </div>
      <div style={{}}>
        <p style={{ fontWeight: "700" }}>{name}</p>
        <div className='cardText'>
          <p>{code}</p>
          <p>{phone}</p>
          <p style={{ inlineSize: "130px", overflowWrap: "break-word" }}>
            {site}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AirlineCard;
