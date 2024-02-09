import Panic from "@/components/Panic";
import ProfileHeader from "@/components/Profileheader";
import { panicoptions } from "@/data/data";
import Image from "next/image";

function PanicButton({ params }) {
  const userId = params.userid;
  return (
    <>
      <section className="p-8 w-full md:w-3/4 h-screen flex flex-col items-center">
        <div className="w-full">
          <ProfileHeader userId={userId} />
        </div>

        <div className="border rounded-full p-2 border-primarycolor mt-8">
          <div className="bg-primarycolor w-[300px] h-[300px] rounded-full flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Active...</h1>
            <p>Waiting for your response</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 p-10">
          {panicoptions.map((panic) => (
            <Panic key={panic.id} {...panic} />
          ))}
        </div>
      </section>
    </>
  );
}

export default PanicButton;
