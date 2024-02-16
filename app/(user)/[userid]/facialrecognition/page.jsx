"use client";
import SecondaryButton from "@/components/SecondaryButton";
import { CiCamera } from "react-icons/ci";
import { useRouter } from "next/navigation";

function FacialRecognition() {
  const router = useRouter();
  const rou = () => {
    router.push(`v2`);
  };
  return (
    <>
      <section className="w-full h-screen p-8">
        <div className="w-full md:w-3/4 flex flex-col items-center">
          <div className="border border-dashed border-gray-500 rounded-lg flex w-full h-[400px] justify-center items-center">
            <CiCamera className="text-5xl" />
          </div>

          <div className="flex flex-col items-center gap-2 mt-8">
            <h1 className="text-3xl font-bold">Facial Recognition</h1>
            <p>Scan a face to find a record</p>
          </div>

          <div className="mt-28 w-full">
            <SecondaryButton
              label={"Scan"}
              color={"bg-secondarycolor"}
              onclick={rou}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default FacialRecognition;
