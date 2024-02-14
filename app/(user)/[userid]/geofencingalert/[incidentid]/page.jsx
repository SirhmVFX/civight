"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { db } from "@/app/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

function IncidentId({ params }) {
  const incident = params.incidentid;
  console.log(incident);

  const [userData, setUserdata] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const q = query(
          collection(db, "incident"),
          where("uid", "==", incident)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          setUserdata(doc.data());
        });
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <section className="w-full h-screen">
        <div className="w-full h-2/4 bg-black">
          <Image
            src={"/images/mil.jpg"}
            width={1000}
            height={1000}
            alt="lk"
            className="w-full h-full object-cover "
          />
        </div>

        <div className="p-10">
          <h1>At the moment</h1>
          <div className="flex gap-8 mt-4">
            <div>
              <p className="text-sm">In the City of</p>
              <h1 className="text-gray-500 text-lg font-bold">*****</h1>
            </div>
          </div>

          <div className="flex gap-8 mt-4">
            <div>
              <p className="text-sm">Incident</p>
              <h1 className="text-gray-500 text-lg font-bold">*****</h1>
            </div>
          </div>

          <div className="flex gap-8 mt-4">
            <div>
              <p className="text-sm">At</p>
              <h1 className="text-gray-500 text-lg font-bold">*****</h1>
            </div>

            <div>
              <p className="text-sm">And it's </p>
              <h1 className="text-gray-500 text-lg font-bold">*****</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IncidentId;
