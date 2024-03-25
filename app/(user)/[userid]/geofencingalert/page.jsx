"use client";

import Incident from "@/components/Incident";
import Image from "next/image";
import { useState, useEffect } from "react";
import { db } from "@/app/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import map from "@/public/images/location2.png";
import placeholder from "@/public/images/images.png";

function GeofencingAlert() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let incidents = [];
      try {
        const querySnapshot = await getDocs(collection(db, "incidents"));
        querySnapshot.forEach((doc) => {
          incidents.push(doc.data());
          console.log(doc.id, " => ", doc.data());
        });
        setData(incidents);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  console.log(data);

  return (
    <>
      <section className="w-full h-screen relative">
        <div className="w-full h-2/4">
          <Image
            src={map}
            width={1100}
            height={1000}
            alt="map"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-3/4 p-8 bg-white mb-20">
          <h1>Environments with high risks at the moment</h1>

          {data.slice(-4).map((d) => (
            <Incident
              img={d.image ? d.image : placeholder}
              incidentDetails={d.incidentDetails}
              time={d.time}
              key={d.who}
              link={d.who}
            />
          ))}
        </div>

        <div className="p-4"> 1</div>
      </section>
    </>
  );
}

export default GeofencingAlert;
