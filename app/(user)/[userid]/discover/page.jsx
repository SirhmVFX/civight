"use client";

import Image from "next/image";
import { features, report } from "@/data/data";
import Features from "@/components/Features";
import Report from "@/components/Report";
import ProfileHeader from "@/components/Profileheader";
import { useEffect, useState } from "react";
import { db } from "@/app/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { FaRegCirclePlay } from "react-icons/fa6";
import placeholder from "@/public/images/images.png";

import giff from "@/public/images/Untitled.png";

function Discover({ params }) {
  const cvrId = params.userid;
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
      <section className="w-full h-screen ">
        <div className="p-8">
          <ProfileHeader userId={cvrId} />

          <div className="bg-primarycolor w-full h-[150px] rounded-2xl relative">
            {/* <div className="w-full h-full absolute flex justify-center items-center z-50">
              <FaRegCirclePlay className="text-3xl  bg-primarycolor p-1 rounded-full" />
            </div> */}

            <Image
              src={giff}
              width={1000}
              height={1000}
              alt="sec"
              className="w-full h-full object-cover rounded-xl opacity-50"
            />
          </div>

          <div className="grid grid-cols-4 gap-2 py-4">
            {features.map((feature) => (
              <Features {...feature} key={feature.id} />
            ))}
          </div>
        </div>

        <div className="bg-secondarycolor p-8">
          <h1 className="text-white">Recent Reports</h1>

          {data &&
            data
              .slice(-5)
              .map((d) => (
                <Report
                  img={d.image ? d.image : placeholder}
                  incidentDetails={d.incidentDetails}
                  time={d.time}
                  key={d.who}
                />
              ))}
          <div className="p-10">1</div>
        </div>
      </section>
    </>
  );
}

export default Discover;
