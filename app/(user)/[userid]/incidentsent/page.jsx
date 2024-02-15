import Image from "next/image";
import envv from "@/public/images/env.png";

function IncidentSent() {
  return (
    <>
      <section>
        <div className="flex flex-col pt-48 gap-4 items-center">
          <Image src={envv} width={300} height={300} alt="sent" />
          <h1 className="text-4xl font-bold">Sent</h1>
        </div>
      </section>
    </>
  );
}

export default IncidentSent;
