"use client";
import ProfileHeader from "@/components/Profileheader";
import Record from "@/components/Record";
import Image from "next/image";

import { useState, useEffect } from "react";
import { db } from "@/app/firebase/config";
import { collection, getDocs } from "firebase/firestore";

function DatabaseRecords() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      let incidents = [];
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
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
  const filteredData = data.filter((item) =>
    item.userInfo.fullname.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <section className="w-full h-screen p-8 bg-gray-100">
        <div className="w-full md:w-3/4">
          <ProfileHeader />

          <div>
            <h1>Database Records</h1>
            <p className="text-[11px] text-gray-300">
              List of all individuals and their details
            </p>
          </div>

          <div className="flex items-center justify-between py-4">
            <div className="p-2 bg-white border rounded-lg">
              <input
                type="text"
                placeholder="search"
                className="bg-transparent outline-none w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="p-2 bg-white border rounded-lg">
              <select
                name="filter"
                id=""
                className="bg-transparent outline-none w-full"
              >
                <option value="nill">filter</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="rounded-lg border bg-white ">
            <div className="flex">
              <div className="p-3 w-2/4">
                <h1 className="text-[12px]">Vendor Name</h1>
              </div>

              <div className="p-3 w-1/4">
                <h1 className="text-[12px]">Gender</h1>
              </div>

              <div className="p-3 w-1/4">
                <h1 className="text-[12px]">Status</h1>
              </div>
            </div>

            {filteredData.map((d) => (
              <Record key={d.id} userInfo={d.userInfo} image={d.img} />
            ))}
          </div>
        </div>

        <div className="p-20">1</div>
      </section>
    </>
  );
}
export default DatabaseRecords;
