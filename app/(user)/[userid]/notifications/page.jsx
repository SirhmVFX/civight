"use client";

import NotificationComponent from "@/components/NotificationsComponent";
import ProfileHeader from "@/components/Profileheader";

import { useState, useEffect } from "react";
import { db } from "@/app/firebase/config";
import { collection, getDocs } from "firebase/firestore";

function Notifications() {
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
      <section className="w-full h-screen p-8">
        <ProfileHeader />

        <div className="py-4">
          <h1>Notifications</h1>
        </div>

        {data.map((d) => (
          <NotificationComponent
            img={d.image}
            incidentDetails={d.incidentDetails}
            time={d.time}
            key={d.who}
            link={d.who}
          />
        ))}
      </section>
    </>
  );
}

export default Notifications;
