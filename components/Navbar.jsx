"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { db } from "@/app/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

function Navbar() {
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
  }, []);
  return (
    <>
      <div className="w-full bg-primarycolor p-8  bottom-0 fixed">
        <div className="flex items-center justify-between px-4 relative w-full">
          <Link
            href={`/${user?.cvrId}/discover`}
            className="flex flex-col items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M14.6666 18.8001H5.33321C3.81654 18.8001 2.43321 17.6334 2.18321 16.1334L1.07487 9.50007C0.89987 8.46674 1.39988 7.14175 2.22488 6.48342L7.99989 1.85837C9.11659 0.958374 10.8748 0.966716 11.9998 1.86672L17.7749 6.48342C18.5916 7.14175 19.0916 8.46674 18.9249 9.50007L17.8166 16.1334C17.5666 17.6084 16.1583 18.8001 14.6666 18.8001ZM9.99159 2.45006C9.54992 2.45006 9.10817 2.58337 8.78317 2.8417L3.00821 7.46674C2.53321 7.85007 2.20822 8.70007 2.30822 9.30007L3.41655 15.9334C3.56655 16.8084 4.44154 17.5501 5.33321 17.5501H14.6666C15.5583 17.5501 16.4332 16.8084 16.5832 15.9251L17.6915 9.29174C17.7915 8.69174 17.4583 7.8334 16.9916 7.4584L11.2166 2.8417C10.8833 2.58337 10.4416 2.45006 9.99159 2.45006Z"
                fill="#0F1719"
              />
              <path
                d="M10.0001 13.5417C8.50841 13.5417 7.29175 12.325 7.29175 10.8333C7.29175 9.34167 8.50841 8.125 10.0001 8.125C11.4917 8.125 12.7084 9.34167 12.7084 10.8333C12.7084 12.325 11.4917 13.5417 10.0001 13.5417ZM10.0001 9.375C9.20008 9.375 8.54175 10.0333 8.54175 10.8333C8.54175 11.6333 9.20008 12.2917 10.0001 12.2917C10.8001 12.2917 11.4584 11.6333 11.4584 10.8333C11.4584 10.0333 10.8001 9.375 10.0001 9.375Z"
                fill="#0F1719"
              />
            </svg>

            <p>Home</p>
          </Link>

          <Link
            href={`/${user?.cvrId}/panicbutton`}
            className="bg-secondarycolor p-1 w-[120px] absolute bottom-0 right-0 left-0 mx-auto h-[120px] border-8 border-white rounded-full flex flex-col items-center justify-center "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M10.4996 11.45C9.84958 11.45 9.23292 11.2 8.75788 10.7333C8.14955 10.125 7.90788 9.25 8.10788 8.39167C8.31622 7.51668 9.01625 6.81666 9.89125 6.60833C10.7412 6.39999 11.6162 6.64169 12.2329 7.25835C12.8496 7.87502 13.0829 8.74167 12.8829 9.6C12.6746 10.475 11.9746 11.175 11.0996 11.3833C10.8996 11.425 10.6996 11.45 10.4996 11.45ZM10.4996 7.78336C10.3996 7.78336 10.2912 7.80001 10.1913 7.82501C9.77458 7.92501 9.43292 8.26665 9.33292 8.68334C9.22458 9.11667 9.34125 9.54167 9.64958 9.84167C9.95792 10.15 10.3746 10.2583 10.8163 10.1583C11.2329 10.0583 11.5746 9.71667 11.6746 9.3C11.7829 8.86667 11.6662 8.44167 11.3579 8.14168C11.1246 7.90835 10.8246 7.78336 10.4996 7.78336Z"
                fill="#FBFBFB"
              />
              <path
                d="M5.51672 14.975C5.36672 14.975 5.20837 14.9167 5.09171 14.8083C3.47504 13.3083 2.55005 11.1917 2.55005 8.99166C2.55005 4.60831 6.11671 1.04166 10.5001 1.04166C14.8834 1.04166 18.45 4.60831 18.45 8.99166C18.45 11.2083 17.5584 13.2583 15.9417 14.7833C15.6917 15.0167 15.2917 15.0083 15.0584 14.7583C14.8251 14.5083 14.8334 14.1083 15.0834 13.875C16.4501 12.5917 17.2 10.8667 17.2 8.99999C17.2 5.30831 14.1917 2.3 10.5001 2.3C6.80837 2.3 3.80005 5.30831 3.80005 8.99999C3.80005 10.8833 4.55837 12.6167 5.94171 13.9C6.19171 14.1333 6.20838 14.5333 5.97505 14.7833C5.85005 14.9083 5.68338 14.975 5.51672 14.975Z"
                fill="#FBFBFB"
              />
              <path
                d="M13.8328 12.75C13.6828 12.75 13.5245 12.6917 13.4078 12.5833C13.1578 12.35 13.1412 11.95 13.3828 11.7C14.0745 10.9667 14.4578 10 14.4578 9C14.4578 6.81671 12.6828 5.05005 10.5078 5.05005C8.33285 5.05005 6.55786 6.82504 6.55786 9C6.55786 10.0083 6.94119 10.9667 7.63285 11.7C7.86619 11.95 7.85786 12.35 7.60786 12.5833C7.35786 12.8167 6.95786 12.8084 6.72453 12.5584C5.81619 11.5917 5.30786 10.325 5.30786 9C5.30786 6.13337 7.64119 3.80005 10.5078 3.80005C13.3745 3.80005 15.7078 6.13337 15.7078 9C15.7078 10.325 15.2078 11.5917 14.2912 12.5584C14.1662 12.6834 13.9995 12.75 13.8328 12.75Z"
                fill="#FBFBFB"
              />
              <path
                d="M11.6998 18.9584H9.30816C8.35816 18.9584 7.51648 18.4251 7.10815 17.5751C6.69981 16.7251 6.80815 15.7334 7.39981 14.9917L8.59982 13.5001C9.0665 12.9167 9.75816 12.5834 10.5082 12.5834C11.2582 12.5834 11.9498 12.9167 12.4165 13.5001L13.6165 14.9917C14.2082 15.7334 14.3248 16.7251 13.9082 17.5751C13.4832 18.4251 12.6415 18.9584 11.6998 18.9584ZM9.5665 14.2751L8.36649 15.7667C8.07482 16.1334 8.01649 16.6084 8.22482 17.0251C8.42482 17.4501 8.83315 17.7001 9.29983 17.7001H11.6915C12.1582 17.7001 12.5665 17.4501 12.7665 17.0251C12.9665 16.6001 12.9165 16.1334 12.6248 15.7667L11.4248 14.2751C10.9748 13.7084 10.0248 13.7084 9.5665 14.2751Z"
                fill="#FBFBFB"
              />
            </svg>

            <p className="font-bold text-center text-[11px] text-white">
              Panic <br /> Button
            </p>
          </Link>

          <Link
            href={`/${user?.cvrId}/profile`}
            className="flex flex-col items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M10.6004 11.275C10.5837 11.275 10.5587 11.275 10.5421 11.275C10.5171 11.275 10.4837 11.275 10.4587 11.275C8.56706 11.2167 7.15039 9.74167 7.15039 7.92498C7.15039 6.07498 8.65872 4.56665 10.5087 4.56665C12.3587 4.56665 13.8671 6.07498 13.8671 7.92498C13.8587 9.75 12.4337 11.2167 10.6254 11.275C10.6087 11.275 10.6087 11.275 10.6004 11.275ZM10.5004 5.80832C9.33375 5.80832 8.39206 6.75832 8.39206 7.91665C8.39206 9.05833 9.28375 9.98333 10.4171 10.025C10.4421 10.0167 10.5254 10.0167 10.6087 10.025C11.7254 9.96667 12.6004 9.05 12.6087 7.91665C12.6087 6.75832 11.6671 5.80832 10.5004 5.80832Z"
                fill="#0F1719"
              />
              <path
                d="M10.5008 18.9584C8.25909 18.9584 6.11743 18.1251 4.45909 16.6084C4.30909 16.4751 4.24243 16.2751 4.25909 16.0834C4.36743 15.0917 4.98409 14.1667 6.00909 13.4834C8.49243 11.8334 12.5174 11.8334 14.9924 13.4834C16.0174 14.1751 16.6341 15.0917 16.7424 16.0834C16.7674 16.2834 16.6924 16.4751 16.5424 16.6084C14.8841 18.1251 12.7424 18.9584 10.5008 18.9584ZM5.56743 15.9167C6.95076 17.0751 8.69243 17.7084 10.5008 17.7084C12.3091 17.7084 14.0508 17.0751 15.4341 15.9167C15.2841 15.4084 14.8841 14.9167 14.2924 14.5167C12.2424 13.1501 8.76743 13.1501 6.70076 14.5167C6.10909 14.9167 5.71743 15.4084 5.56743 15.9167Z"
                fill="#0F1719"
              />
              <path
                d="M10.5001 18.9583C5.55841 18.9583 1.54175 14.9417 1.54175 9.99999C1.54175 5.05832 5.55841 1.04166 10.5001 1.04166C15.4417 1.04166 19.4584 5.05832 19.4584 9.99999C19.4584 14.9417 15.4417 18.9583 10.5001 18.9583ZM10.5001 2.29166C6.25008 2.29166 2.79175 5.74999 2.79175 9.99999C2.79175 14.25 6.25008 17.7083 10.5001 17.7083C14.7501 17.7083 18.2084 14.25 18.2084 9.99999C18.2084 5.74999 14.7501 2.29166 10.5001 2.29166Z"
                fill="#0F1719"
              />
            </svg>

            <p>Profile</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
