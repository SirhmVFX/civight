import Incident from "@/components/Incident";
import Image from "next/image";

function GeofencingAlert() {
  return (
    <>
      <section className="w-full h-screen">
        <div className="w-full h-2/4">
          <Image
            src={"/images/map.png"}
            width={1100}
            height={1000}
            alt="map"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-3/4 p-8 bg-white mb-20">
          <h1>Environments with high risks at the moment</h1>

          <Incident />
          <Incident />
          <Incident />
          <Incident />
        </div>
      </section>
    </>
  );
}

export default GeofencingAlert;
