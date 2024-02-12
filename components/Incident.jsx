import Image from "next/image";

function Incident({ img, incidentDetails, time }) {
  return (
    <>
      <div className="flex justify-between my-8">
        <div className="flex gap-2 items-center">
          <div className="w-[50px] h-[50px]">
            <Image
              src={img}
              width={50}
              height={50}
              alt="scene"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-sm font-bold">{incidentDetails?.city}</h1>
            <p className="text-[11px] text-gray-500">
              {incidentDetails?.location}
            </p>
          </div>
        </div>
        <p className="text-[11px] text-gray-500">
          {incidentDetails?.condition}
        </p>
      </div>
    </>
  );
}

export default Incident;
