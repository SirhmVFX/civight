import SecondaryButton from "@/components/SecondaryButton";
import { CiCamera } from "react-icons/ci";

function FacialRecognition() {
  return (
    <>
      <section className="w-full h-screen p-8">
        <div className="w-full md:w-3/4 flex flex-col items-center">
          <div className="border border-dashed rounded-lg flex w-full h-[400px] justify-center items-center">
            <CiCamera className="text-5xl" />
          </div>

          <div className="flex flex-col items-center gap-4">
            <h1>Facial Recognition</h1>
            <p>Scan a face to find a record</p>
          </div>

          <div className="mt-32 w-full">
            <SecondaryButton label={"Scan"} />
          </div>
        </div>
      </section>
    </>
  );
}

export default FacialRecognition;
