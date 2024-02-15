import Image from "next/image";
import send from "@/public/images/send.png";

function SendingEmergency() {
  return (
    <>
      <section className="w-full h-screen p-10 ">
        <div className="flex flex-col gap-4 items-center mt-8">
          <Image src={send} width={200} height={200} alt="send" />
          <h1 className="text-4xl font-bold text-center">
            Sending <br /> Emergency
          </h1>
        </div>
      </section>
    </>
  );
}

export default SendingEmergency;
