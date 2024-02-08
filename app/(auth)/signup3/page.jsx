"use client";
import {
  collection,
  query,
  where,
  getDoc,
  addDoc,
  setDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import SecondaryButton from "@/components/SecondaryButton";
import { useEffect, useState } from "react";
import { db, auth, storage } from "@/app/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Image from "next/image";
import { useRouter } from "next/navigation";
function SignUp3() {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [img, setImg] = useState(null);
  const [error, setError] = useState(false);
  const [isImg, setIsImg] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const uploadFile = () => {
      const filename = new Date().getTime() + file.name;
      const storageRef = ref(storage, filename);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploading(true);
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const file = downloadURL;
            setImg(downloadURL);
            console.log("File available at", file);
            setIsImg(true);
            setUploading(false);
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  const handleSignup = async () => {
    setClicked(true); // Assuming this sets some state related to a button click
    const userInfo = JSON.parse(localStorage.getItem("user"));
    const userId = userInfo.email;

    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setError(true); // Set an error if the user already exists
    } else {
      try {
        // Create the user in Firebase Authentication
        const res = await createUserWithEmailAndPassword(
          auth,
          userId,
          userInfo.password
        );

        // If user creation is successful, save additional data to Firestore
        await setDoc(doc(db, "users", userId), {
          userInfo,
          img,
          timeStamp: serverTimestamp(),
          cvrId: "CVR" + new Date().getTime(),
        });

        router.push("/signin"); // Redirect the user after successful signup
      } catch (error) {
        console.error("Error signing up:", error);
        // Handle any errors that occur during user creation or data saving
        setError(true); // Set an error state to inform the user
      }
    }
  };

  return (
    <>
      <section className="w-full h-screen p-8">
        {uploading ? (
          <div>
            <p className="font-bold text-lg">Uploading Image please wait...</p>
          </div>
        ) : (
          ""
        )}
        {error ? (
          <div className="bg-red-500 p-4 rounded-lg">
            <p className="text-white">This user already exist</p>
          </div>
        ) : (
          ""
        )}

        <div className="w-full md:w-3/4 mx-auto flex flex-col items-center gap-8 ">
          <div className="flex flex-col items-center text-center gap-2 p-10">
            <div className="w-[380px] h-[400px] mx-auto ">
              {isImg ? (
                img && (
                  <div className="w-full h-full">
                    <Image
                      src={img}
                      width={1100}
                      height={1100}
                      alt="img"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                )
              ) : (
                <div className=" border-2 p-36 rounded-full border-dashed ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55"
                    height="55"
                    viewBox="0 0 55 55"
                    fill="none"
                  >
                    <path
                      d="M42.0768 52.1352H12.8123C9.32901 52.1352 6.14359 50.3706 4.31026 47.3914C2.47693 44.4123 2.31651 40.7914 3.87484 37.6519L7.81651 29.7456C9.09984 27.1789 11.1623 25.5748 13.4769 25.3227C15.7915 25.0706 18.1519 26.2164 19.9394 28.4394L20.4436 29.081C21.4519 30.3185 22.6207 30.9831 23.7664 30.8685C24.9123 30.7769 25.9664 29.9519 26.7456 28.5539L31.0768 20.7394C32.8643 17.5082 35.2477 15.8353 37.8372 15.9498C40.4039 16.0873 42.6039 18.0123 44.0706 21.404L51.2435 38.156C52.5727 41.2498 52.2518 44.7789 50.3956 47.5977C48.5623 50.4623 45.4456 52.1352 42.0768 52.1352ZM14.1186 28.7602C14.0269 28.7602 13.9353 28.7602 13.8436 28.7831C12.6978 28.8977 11.6436 29.8144 10.8873 31.3039L6.94568 39.2102C5.91443 41.2498 6.02901 43.656 7.22068 45.6039C8.41234 47.5519 10.5207 48.7206 12.8123 48.7206H42.0539C44.2998 48.7206 46.2935 47.6435 47.531 45.7644C48.7685 43.8852 48.9748 41.6394 48.081 39.5769L40.9081 22.8248C40.0373 20.7623 38.8227 19.5019 37.6539 19.4561C36.5768 19.3873 35.1789 20.5332 34.0789 22.4811L29.7477 30.2956C28.4185 32.6789 26.3331 34.1685 24.0643 34.3748C21.7957 34.5581 19.4811 33.4581 17.7623 31.3039L17.2582 30.6623C16.2957 29.4019 15.1957 28.7602 14.1186 28.7602Z"
                      fill="#BFBFBF"
                    />
                    <path
                      d="M15.9745 20.0521C11.2537 20.0521 7.38078 16.2021 7.38078 11.4583C7.38078 6.71458 11.2308 2.86458 15.9745 2.86458C20.7183 2.86458 24.5683 6.71458 24.5683 11.4583C24.5683 16.2021 20.7183 20.0521 15.9745 20.0521ZM15.9745 6.30208C13.1329 6.30208 10.8183 8.61666 10.8183 11.4583C10.8183 14.3 13.1329 16.6146 15.9745 16.6146C18.8162 16.6146 21.1308 14.3 21.1308 11.4583C21.1308 8.61666 18.8162 6.30208 15.9745 6.30208Z"
                      fill="#BFBFBF"
                    />
                  </svg>
                </div>
              )}
            </div>
            <h1 className="text-4xl">Upload Image</h1>
            <p className="text-gray-300">
              You need to upload an image to verify you account
            </p>
          </div>

          <input type="file" onChange={(e) => setFile(e.target.files[0])} />

          <SecondaryButton
            label={`${
              clicked ? "Verifying account please wait..." : "Verify Account"
            }`}
            onclick={handleSignup}
            color={`${
              clicked ? "bg-secondarycolorlight" : "bg-secondarycolor"
            }`}
          />
        </div>
      </section>
    </>
  );
}

export default SignUp3;
