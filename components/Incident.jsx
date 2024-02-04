import Image from "next/image";

function Incident() {
  return (
    <>
      <div className="flex justify-between my-8">
        <div className="flex gap-2 items-center">
          <Image
            src={"/images/scene.png"}
            width={50}
            height={50}
            alt="scene"
            className="rounded-lg"
          />

          <div>
            <h1 className="text-sm font-bold">Ajegunle</h1>
            <p className="text-[11px] text-gray-300">
              Third Mainland Bridge, Ajegunle
            </p>
          </div>
        </div>
        <p className="text-[11px] text-gray-300">Severe</p>
      </div>
    </>
  );
}

export default Incident;
