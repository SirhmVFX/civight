"use client";
import PrimaryButton from "@/components/PrimaryButton";
import ProfileHeader from "@/components/Profileheader";
import Image from "next/image";
import location2 from "@/public/images/location2.png";

import profileimggg from "@/public/images/profile.png";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { db } from "@/app/firebase/config";
import { doc, getDoc } from "firebase/firestore";

function ShareLocation() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      const docRef = doc(db, "users", currentUser.userInfo.email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const user = docSnap.data();
        console.log(user);
        setUser(user);
      } else {
        router.push("/signin");
      }
    };

    fetchDetails();
  }, [router]);

  const share = () => {
    if (navigator.share) {
      navigator.share({
        text:
          (user?.userInfo?.fullname,
          user?.cvrId,
          user?.userInfo?.cityResident,
          user?.userInfo?.stateResident,
          user?.userInfo?.country),
        url: "https://trycivight-v1.netlify.app/",
        title: "Civight",
      });
    } else {
      navigator.clipboard.writeText({
        text:
          (user?.userInfo?.fullname,
          user?.cvrId,
          user?.userInfo?.cityResident,
          user?.userInfo?.stateResident,
          user?.userInfo?.country),
        url: "https://trycivight-v1.netlify.app/",
        title: "Civight",
      });
    }
  };
  return (
    <>
      <section className="w-full h-screen">
        <div className="w-full h-2/4 relative">
          <div className="absolute w-full p-8">
            <ProfileHeader />
          </div>
          <Image
            src={location2}
            width={1100}
            height={1100}
            alt="location"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 bg-white">
          <h1>Share your location</h1>

          <div>
            <div className="flex items-center gap-2 py-6">
              <Image src={profileimggg} width={80} height={80} alt="prof" />

              <div>
                <h1 className="text-lg font-bold">
                  {user?.userInfo?.fullname}
                </h1>
                <p className="text-[12px] text-gray-300">{user?.cvrId}</p>
                <p className="text-[12px] text-gray-300">
                  {user?.userInfo?.cityResident},{" "}
                  {user?.userInfo?.stateResident}, {user?.userInfo?.country}
                </p>
              </div>
            </div>

            <PrimaryButton
              label={"Share Location"}
              color={"bg-primarycolor"}
              onclick={share}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ShareLocation;
