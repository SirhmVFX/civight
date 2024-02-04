import Image from "next/image";

function Record() {
  return (
    <>
      <div className="p-3 border-t border-b flex items-center ">
        <div className="w-2/4">
          <div className="flex gap-2 items-center ">
            <Image
              src={"/images/profile.png"}
              height={40}
              width={40}
              alt="img"
            />

            <div>
              <h1 className="text-sm">Theressa Webb</h1>
              <p className="text-[11px] text-gray-300">kenzi.lawson@ex...</p>
            </div>
          </div>
        </div>

        <div className="w-1/4 flex justify-center">
          <h1 className="text-sm">male</h1>
        </div>

        <div className="py-1 px-3 bg-green-100 flex justify-center rounded-full w-1/4">
          <h1 className="text-sm text-green-600">Active</h1>
        </div>
      </div>
    </>
  );
}
export default Record;
