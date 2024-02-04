import Image from "next/image";

function AnonSent() {
  return (
    <>
      <section className="bg-secondarycolor w-full h-screen">
        <div className="flex flex-col items-center pt-40">
          <Image src={"/images/anon.png"} width={300} height={300} alt="anon" />

          <h1 className="text-4xl text-center text-primarycolor">
            Annonymous Tip Submitted
          </h1>
        </div>
      </section>
    </>
  );
}

export default AnonSent;
