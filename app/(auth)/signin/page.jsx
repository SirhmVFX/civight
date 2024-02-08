"use client";

import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase/config";

function SignIn() {
  const [user, setUser] = useState({
    emailOrId: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setClicked(true);
    try {
      const docRef = doc(db, "users", user.emailOrId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        console.log(userData);

        if (userData.userInfo.password === user.password) {
          setSuccess(true);
          localStorage.setItem("currentUser", JSON.stringify(userData));
          router.push(`${userData.cvrId}/discover`);
        } else {
          setError(true);
        }
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const signUp = () => {
    router.push("/signup1");
  };
  return (
    <>
      <section className="w-full h-screen p-8">
        {success ? (
          <div className="p-4 rounded-lg bg-primarycolor m-4">
            <p>Login Successfull</p>
          </div>
        ) : (
          ""
        )}
        {error ? (
          <div className="p-4 rounded-lg bg-red-500 m-4">
            <p className="text-white">This user does not exist</p>
          </div>
        ) : (
          ""
        )}

        <div className="w-full md:w-2/3 mx-auto">
          <div>
            <h1 className="text-4xl">👋 Welcome Back </h1>
            <p className="text-gray-300">
              We are happy to have you. Enter your email and password
            </p>
          </div>

          <form>
            <div className="py-4">
              <label htmlFor="">Email of CVR ID *</label>
              <div className="flex gap-1 items-center p-4 rounded-full border bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.1004 11.275C10.0837 11.275 10.0587 11.275 10.0421 11.275C10.0171 11.275 9.98375 11.275 9.95875 11.275C8.06706 11.2167 6.65039 9.74167 6.65039 7.92498C6.65039 6.07498 8.15872 4.56665 10.0087 4.56665C11.8587 4.56665 13.3671 6.07498 13.3671 7.92498C13.3587 9.75 11.9337 11.2167 10.1254 11.275C10.1087 11.275 10.1087 11.275 10.1004 11.275ZM10.0004 5.80832C8.83375 5.80832 7.89206 6.75832 7.89206 7.91665C7.89206 9.05833 8.78375 9.98333 9.91708 10.025C9.94208 10.0167 10.0254 10.0167 10.1087 10.025C11.2254 9.96667 12.1004 9.05 12.1087 7.91665C12.1087 6.75832 11.1671 5.80832 10.0004 5.80832Z"
                    fill="#808080"
                  />
                  <path
                    d="M10.0007 18.9584C7.75903 18.9584 5.61736 18.1251 3.95903 16.6084C3.80903 16.4751 3.74236 16.2751 3.75903 16.0834C3.86736 15.0917 4.48403 14.1667 5.50903 13.4834C7.99236 11.8334 12.0174 11.8334 14.4924 13.4834C15.5174 14.1751 16.134 15.0917 16.2424 16.0834C16.2674 16.2834 16.1924 16.4751 16.0424 16.6084C14.384 18.1251 12.2424 18.9584 10.0007 18.9584ZM5.06736 15.9167C6.4507 17.0751 8.19236 17.7084 10.0007 17.7084C11.809 17.7084 13.5507 17.0751 14.934 15.9167C14.784 15.4084 14.384 14.9167 13.7924 14.5167C11.7424 13.1501 8.26736 13.1501 6.2007 14.5167C5.60903 14.9167 5.21736 15.4084 5.06736 15.9167Z"
                    fill="#808080"
                  />
                  <path
                    d="M10 18.9583C5.05835 18.9583 1.04169 14.9417 1.04169 10C1.04169 5.05834 5.05835 1.04167 10 1.04167C14.9417 1.04167 18.9584 5.05834 18.9584 10C18.9584 14.9417 14.9417 18.9583 10 18.9583ZM10 2.29167C5.75002 2.29167 2.29169 5.75001 2.29169 10C2.29169 14.25 5.75002 17.7083 10 17.7083C14.25 17.7083 17.7084 14.25 17.7084 10C17.7084 5.75001 14.25 2.29167 10 2.29167Z"
                    fill="#808080"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Enter your email or CVR ID"
                  value={user.emailOrId}
                  onChange={(e) =>
                    setUser({ ...user, emailOrId: e.target.value })
                  }
                  className="bg-transparent w-full outline-none"
                />
              </div>
            </div>

            <div className="py-4">
              <label htmlFor="">Password *</label>
              <div className="flex gap-1 items-center p-4 rounded-full border bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.1004 11.275C10.0837 11.275 10.0587 11.275 10.0421 11.275C10.0171 11.275 9.98375 11.275 9.95875 11.275C8.06706 11.2167 6.65039 9.74167 6.65039 7.92498C6.65039 6.07498 8.15872 4.56665 10.0087 4.56665C11.8587 4.56665 13.3671 6.07498 13.3671 7.92498C13.3587 9.75 11.9337 11.2167 10.1254 11.275C10.1087 11.275 10.1087 11.275 10.1004 11.275ZM10.0004 5.80832C8.83375 5.80832 7.89206 6.75832 7.89206 7.91665C7.89206 9.05833 8.78375 9.98333 9.91708 10.025C9.94208 10.0167 10.0254 10.0167 10.1087 10.025C11.2254 9.96667 12.1004 9.05 12.1087 7.91665C12.1087 6.75832 11.1671 5.80832 10.0004 5.80832Z"
                    fill="#808080"
                  />
                  <path
                    d="M10.0007 18.9584C7.75903 18.9584 5.61736 18.1251 3.95903 16.6084C3.80903 16.4751 3.74236 16.2751 3.75903 16.0834C3.86736 15.0917 4.48403 14.1667 5.50903 13.4834C7.99236 11.8334 12.0174 11.8334 14.4924 13.4834C15.5174 14.1751 16.134 15.0917 16.2424 16.0834C16.2674 16.2834 16.1924 16.4751 16.0424 16.6084C14.384 18.1251 12.2424 18.9584 10.0007 18.9584ZM5.06736 15.9167C6.4507 17.0751 8.19236 17.7084 10.0007 17.7084C11.809 17.7084 13.5507 17.0751 14.934 15.9167C14.784 15.4084 14.384 14.9167 13.7924 14.5167C11.7424 13.1501 8.26736 13.1501 6.2007 14.5167C5.60903 14.9167 5.21736 15.4084 5.06736 15.9167Z"
                    fill="#808080"
                  />
                  <path
                    d="M10 18.9583C5.05835 18.9583 1.04169 14.9417 1.04169 10C1.04169 5.05834 5.05835 1.04167 10 1.04167C14.9417 1.04167 18.9584 5.05834 18.9584 10C18.9584 14.9417 14.9417 18.9583 10 18.9583ZM10 2.29167C5.75002 2.29167 2.29169 5.75001 2.29169 10C2.29169 14.25 5.75002 17.7083 10 17.7083C14.25 17.7083 17.7084 14.25 17.7084 10C17.7084 5.75001 14.25 2.29167 10 2.29167Z"
                    fill="#808080"
                  />
                </svg>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  className="bg-transparent w-full outline-none"
                />
              </div>
            </div>

            <PrimaryButton
              label={`${clicked ? "Logging you in, please wait..." : "Log In"}`}
              onclick={handleSignIn}
              color={`${clicked ? "bg-primarycolorlight" : "bg-primarycolor"}`}
            />
          </form>
          <div className="flex p-8 justify-center mb-10">
            <Link href={"/forgotpassword"} className="font-bold">
              Forgot Password?
            </Link>
          </div>

          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-1/4 h-1 bg-gray-200"></div>
            <p className="text-gray-300">Or</p>
            <div className="w-1/4 h-1 bg-gray-200"></div>
          </div>

          <SecondaryButton
            label={"Create an Account"}
            color={"bg-secondarycolor"}
            onclick={signUp}
          />
        </div>
      </section>
    </>
  );
}

export default SignIn;
