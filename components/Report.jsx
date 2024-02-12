import Image from "next/image";

function Report({ img, incidentDetails, time }) {
  return (
    <>
      <div className="my-8 flex justify-between">
        <div className="flex items-center gap-2">
          <div className="w-[50px] h-[50px] rounded-full">
            <Image
              src={img}
              width={50}
              height={50}
              alt="report"
              className="rounded-full w-full h-full object-cover "
            />
          </div>

          <div>
            <h1 className="text-primarycolor">
              <span className="text-white">Incident Report @</span>{" "}
              {incidentDetails?.city}
            </h1>
            <p className="text-gray-400 text-sm">
              {incidentDetails?.desc.split(" ").slice(0, 5).join(" ")}
              {incidentDetails?.desc.split(" ").length > 5 ? " ..." : ""}
            </p>
          </div>
        </div>

        <p className="text-gray-400 text-[13px]">{time}</p>
      </div>
    </>
  );
}

export default Report;
