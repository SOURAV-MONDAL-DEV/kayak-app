import React, { useEffect, useState } from 'react'
import fetchJsonp from 'fetch-jsonp';
import AirlineCard from '../components/AirlineCard'

function Airlines() {

    const [allAirlines, setAllAirlines] = useState([]);


    useEffect(() => {
        fetchJsonp('https://www.kayak.com/h/mobileapis/directory/airlines/homework', {
            jsonpCallback: "jsonp"
          })
            .then(res => res.json())
            .then(data => {
                setAllAirlines(data);
            })
    }, [])




  return (
    <div style={{margin: '60px 83px'}}>
        <h1 style={{fontSize:'36px'}}>Airlines</h1>
        <p style={{fontWeight:'700', fontSize:'20px'}}>Filter by Alliances</p>
        <div>
            <p>filter</p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'42px'}} >
            {
                allAirlines.map(airline => <AirlineCard
                    key={airline?.code}
                    airline={airline}
                ></AirlineCard>
                )
            }
        </div>
    </div>
  )
}

export default Airlines