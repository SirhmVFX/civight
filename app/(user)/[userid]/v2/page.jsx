import Image from "next/image";
import time from "@/public/images/time.png";

function V2() {
  return (
    <>
      <section className="w-full h-screen p-8 bg-secondarycolor">
        <div className="w-full md:w-3/4 flex flex-col items-center pt-28">
          <Image src={time} width={300} height={300} alt="time" />
          <h1 className="text-2xl font-semibold text-primarycolor text-center">
            This feature is still in production and would be available in the
            next version
          </h1>
        </div>
      </section>
    </>
  );
}

export default V2;
