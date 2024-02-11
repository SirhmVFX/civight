"use client";
import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/app/firebase/config";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

function AnonymousTip() {
  const router = useRouter();
  const [annonReport, setanonReport] = useState({
    city: "",
    location: "",
    condition: "",
    desc: "",
  });

  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const uploadImage = () => {
      const filename = new Date().getTime() + file.name;
      const storageRef = ref(storage, filename);
    };

    file && uploadImage();
  }, [file]);

  const sendAnonReport = async (e) => {
    e.preventDefault();

    try {
      await setDoc(doc(db, "incidents"), {
        annonReport,
        image,
        who: "Anon",
        timeStamp: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="bg-secondarycolor w-full h-full p-8">
        <div className="w-full md:w-3/4 mx-auto">
          <div className="flex justify-between mb-4">
            <div className="flex items-center gap-2">
              <Image
                src={"/images/profileimg.png"}
                width={50}
                height={50}
                alt="profile image"
                className="rounded-full"
              />
              <div>
                <h1 className="font-bold text-primarycolor">
                  Hi👋, FullStack Mechanic
                </h1>
                <p className="text-gray-300 text-sm">CVR102946128848276</p>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11 20.75C5.62 20.75 1.25 16.38 1.25 11C1.25 5.62 5.62 1.25 11 1.25C16.38 1.25 20.75 5.62 20.75 11C20.75 16.38 16.38 20.75 11 20.75ZM11 2.75C6.45 2.75 2.75 6.45 2.75 11C2.75 15.55 6.45 19.25 11 19.25C15.55 19.25 19.25 15.55 19.25 11C19.25 6.45 15.55 2.75 11 2.75Z"
                  fill="#fff"
                />
                <path
                  d="M20.1601 22.79C20.0801 22.79 20.0001 22.78 19.9301 22.77C19.4601 22.71 18.6101 22.39 18.1301 20.96C17.8801 20.21 17.9701 19.46 18.3801 18.89C18.7901 18.32 19.4801 18 20.2701 18C21.2901 18 22.0901 18.39 22.4501 19.08C22.8101 19.77 22.7101 20.65 22.1401 21.5C21.4301 22.57 20.6601 22.79 20.1601 22.79ZM19.5601 20.49C19.7301 21.01 19.9701 21.27 20.1301 21.29C20.2901 21.31 20.5901 21.12 20.9001 20.67C21.1901 20.24 21.2101 19.93 21.1401 19.79C21.0701 19.65 20.7901 19.5 20.2701 19.5C19.9601 19.5 19.7301 19.6 19.6001 19.77C19.4801 19.94 19.4601 20.2 19.5601 20.49Z"
                  fill="#fff"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.0199 20.5299C9.68987 20.5299 7.35987 20.1599 5.14987 19.4199C4.30987 19.1299 3.66987 18.5399 3.38987 17.7699C3.09987 16.9999 3.19987 16.1499 3.65987 15.3899L4.80987 13.4799C5.04987 13.0799 5.26987 12.2799 5.26987 11.8099V8.91992C5.26987 5.19992 8.29987 2.16992 12.0199 2.16992C15.7399 2.16992 18.7699 5.19992 18.7699 8.91992V11.8099C18.7699 12.2699 18.9899 13.0799 19.2299 13.4899L20.3699 15.3899C20.7999 16.1099 20.8799 16.9799 20.5899 17.7699C20.2999 18.5599 19.6699 19.1599 18.8799 19.4199C16.6799 20.1599 14.3499 20.5299 12.0199 20.5299ZM12.0199 3.66992C9.12987 3.66992 6.76987 6.01992 6.76987 8.91992V11.8099C6.76987 12.5399 6.46987 13.6199 6.09987 14.2499L4.94987 16.1599C4.72987 16.5299 4.66987 16.9199 4.79987 17.2499C4.91987 17.5899 5.21987 17.8499 5.62987 17.9899C9.80987 19.3899 14.2399 19.3899 18.4199 17.9899C18.7799 17.8699 19.0599 17.5999 19.1899 17.2399C19.3199 16.8799 19.2899 16.4899 19.0899 16.1599L17.9399 14.2499C17.5599 13.5999 17.2699 12.5299 17.2699 11.7999V8.91992C17.2699 6.01992 14.9199 3.66992 12.0199 3.66992Z"
                  fill="#fff"
                />
                <path
                  d="M13.8796 3.94018C13.8096 3.94018 13.7396 3.93018 13.6696 3.91018C13.3796 3.83018 13.0996 3.77018 12.8296 3.73018C11.9796 3.62018 11.1596 3.68018 10.3896 3.91018C10.1096 4.00018 9.80962 3.91018 9.61962 3.70018C9.42962 3.49018 9.36963 3.19018 9.47963 2.92018C9.88963 1.87018 10.8896 1.18018 12.0296 1.18018C13.1696 1.18018 14.1696 1.86018 14.5796 2.92018C14.6796 3.19018 14.6296 3.49018 14.4396 3.70018C14.2896 3.86018 14.0796 3.94018 13.8796 3.94018Z"
                  fill="#fff"
                />
                <path
                  d="M12.0195 22.8101C11.0295 22.8101 10.0695 22.4101 9.36953 21.7101C8.66953 21.0101 8.26953 20.0501 8.26953 19.0601H9.76953C9.76953 19.6501 10.0095 20.2301 10.4295 20.6501C10.8495 21.0701 11.4295 21.3101 12.0195 21.3101C13.2595 21.3101 14.2695 20.3001 14.2695 19.0601H15.7695C15.7695 21.1301 14.0895 22.8101 12.0195 22.8101Z"
                  fill="#fff"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl text-primarycolor">
            Annonymous Tip Submission
          </h1>

          <form>
            <div className="py-4">
              <label className="text-primarycolor" htmlFor="">
                What City is it happening *
              </label>
              <div className="flex gap-1 items-center p-4 rounded-full border bg-gray-100">
                <input
                  type="text"
                  placeholder="Enter city name"
                  value={annonReport.city}
                  onChange={(e) =>
                    setanonReport({ ...annonReport, city: e.target.value })
                  }
                  className="bg-transparent w-full outline-none"
                />
              </div>
            </div>

            <div className="py-4">
              <label className="text-primarycolor" htmlFor="">
                Tell us where in that city *
              </label>
              <div className="flex gap-1 items-center p-4 rounded-full border bg-gray-100">
                <input
                  type="text"
                  placeholder="Little area description"
                  value={annonReport.location}
                  onChange={(e) =>
                    setanonReport({ ...annonReport, location: e.target.value })
                  }
                  className="bg-transparent w-full outline-none"
                />
              </div>
            </div>

            <div className="py-4">
              <label className="text-primarycolor" htmlFor="">
                How bad is it *
              </label>
              <div className="flex gap-1 items-center p-4 rounded-full border bg-gray-100">
                <select
                  name="condition"
                  id=""
                  onChange={(e) =>
                    setanonReport({ ...annonReport, condition: e.target.value })
                  }
                  className="bg-transparent outline-none"
                >
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
              <label className="text-primarycolor" htmlFor="">
                Give us a little more information *
              </label>
              <div className="flex gap-1 items-center p-4 rounded-xl border bg-gray-100">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  value={annonReport.desc}
                  onChange={(e) =>
                    setanonReport({ ...annonReport, desc: e.target.value })
                  }
                  placeholder="Additional information"
                  className="bg-transparent w-full outline-none"
                ></textarea>
              </div>
            </div>

            <div className="py-4">
              <label className="text-primarycolor" htmlFor="">
                Please upload and image *
              </label>
              <div className="flex gap-1 items-center p-4 rounded-full border bg-gray-100">
                <input
                  type="file"
                  placeholder=""
                  onChange={(e) => setFile(e.target.files[0])}
                  className="bg-transparent w-full outline-none"
                />
              </div>
            </div>

            <PrimaryButton
              label={`${
                sending ? "Sending anon message..." : "Send anon message"
              }`}
              color={`${sending ? "bg-primarycolorlight" : "bg-primarycolor"}`}
              onclick={sendAnonReport}
            />
          </form>

          <div className="p-20">1</div>
        </div>
      </section>
    </>
  );
}

export default AnonymousTip;
