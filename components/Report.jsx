import Image from "next/image";

function Report({ name, time, img, report }) {
  return (
    <>
      <div className="my-8 flex justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={"/images/profileimg.png"}
            width={50}
            height={50}
            alt="report"
            className="rounded-full"
          />

          <div>
            <h1 className="text-primarycolor">{name}</h1>
            <p className="text-gray-400 text-sm">{report}</p>
          </div>
        </div>

        <p className="text-gray-400 text-sm">{time}</p>
      </div>
    </>
  );
}

export default Report;
