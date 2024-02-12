"use client";

import PrimaryButton from "@/components/PrimaryButton";
import ProfileHeader from "@/components/Profileheader";
import { useEffect, useState } from "react";
import {
  setDoc,
  doc,
  serverTimestamp,
  addDoc,
  collection,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { db, storage } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

function ReportIncident({ params }) {
  const [incidentDetails, setIncidentDetails] = useState({
    fullname: "",
    city: "",
    location: "",
    condition: "",
    desc: "",
  });
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const userId = params.userid;
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const uploadFile = () => {
      const filename = new Date().getTime() + file.name;
      const storageRef = ref(storage, filename);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setUploading(true);
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setImage(downloadURL);
            setUploading(false);
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const submitIncident = async (e) => {
    e.preventDefault();
    console.log(incidentDetails);
    setSending(true);

    try {
      await addDoc(collection(db, "incidents"), {
        incidentDetails,
        image,
        who: userId,
        timeStamp: serverTimestamp(),
        time: new Date().getTime(),
      });
      console.log("Document written with ID: ");
      router.push(`incidentsent`);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <>
      <section className="w-full h-screen p-8 ">
        <ProfileHeader />

        {error ? (
          <div className="p-4 bg-red-500">
            <p className="text-white">Unable to send report please try again</p>
          </div>
        ) : (
          ""
        )}

        <h1 className="text-3xl">Report Incident</h1>

        <form>
          <div className="py-4">
            <label htmlFor="">Your Name *</label>
            <div className="flex gap-1 items-center p-4 rounded-full border bg-gray-100">
              <input
                type="text"
                placeholder="Enter your fullname"
                value={incidentDetails.fullname}
                onChange={(e) =>
                  setIncidentDetails({
                    ...incidentDetails,
                    fullname: e.target.value,
                  })
                }
                className="bg-transparent w-full outline-none"
              />
            </div>
          </div>

          <div className="py-4">
            <label htmlFor="">What City is it happening *</label>
            <div className="flex gap-1 items-center p-4 rounded-full border bg-gray-100">
              <input
                type="text"
                placeholder="Enter city name"
                value={setIncidentDetails.city}
                onChange={(e) => {
                  setIncidentDetails({
                    ...incidentDetails,
                    city: e.target.value,
                  });
                }}
                className="bg-transparent w-full outline-none"
              />
            </div>
          </div>

          <div className="py-4">
            <label htmlFor="">Tell us where in that city *</label>
            <div className="flex gap-1 items-center p-4 rounded-full border bg-gray-100">
              <input
                type="text"
                placeholder="Little area description"
                value={incidentDetails.location}
                onChange={(e) =>
                  setIncidentDetails({
                    ...incidentDetails,
                    location: e.target.value,
                  })
                }
                className="bg-transparent w-full outline-none"
              />
            </div>
          </div>

          <div className="py-4">
            <label htmlFor="">How bad is it *</label>
            <div className="flex gap-1 items-center p-4 rounded-full border bg-gray-100">
              <select
                name="condition"
                id=""
                onChange={(e) =>
                  setIncidentDetails({
                    ...incidentDetails,
                    condition: e.target.value,
                  })
                }
                className="bg-transparent outline-none"
              >
                <option value="select">Select</option>
                <option value="Severe">Severe</option>
                <option value="Fair">Fair</option>
                <option value="Terrible">Terrible</option>
                <option value="Emergency">
                  It requires an immediate attention
                </option>
              </select>
            </div>
          </div>

          <div className="py-4">
            <label htmlFor="">Give us a little more information *</label>
            <div className="flex gap-1 items-center p-4 rounded-xl border bg-gray-100">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                value={incidentDetails.desc}
                onChange={(e) =>
                  setIncidentDetails({
                    ...incidentDetails,
                    desc: e.target.value,
                  })
                }
                placeholder="Additional information"
                className="bg-transparent w-full outline-none"
              ></textarea>
            </div>
          </div>

          <div className="py-4">
            <label htmlFor="">Please upload and image *</label>
            <div className="flex gap-1 items-center p-4 rounded-full border bg-gray-100">
              <input
                type="file"
                placeholder=""
                onChange={(e) => setFile(e.target.files[0])}
                className="bg-transparent w-full outline-none"
              />
            </div>
          </div>
          {uploading ? (
            <p className="text-lg text-red-600">
              Uploading image please wait....
            </p>
          ) : (
            ""
          )}
          <PrimaryButton
            color={`${sending ? "bg-primarycolorlight" : "bg-primarycolor"}`}
            label={`${sending ? "Reporting Incident" : "Report Incident"}`}
            onclick={submitIncident}
          />
        </form>

        <div className="p-24">1</div>
      </section>
    </>
  );
}

export default ReportIncident;
