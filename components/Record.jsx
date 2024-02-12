import Image from "next/image";
import Link from "next/link";

function Record({ link, image, userInfo }) {
  return (
    <>
      <Link
        href={`databaserecords/${link}`}
        className="p-3 border-t border-b flex items-center "
      >
        <div className="w-2/4">
          <div className="flex gap-2 items-center ">
            <div className="w-[40px] h-[40px]">
              <Image
                src={image}
                height={40}
                width={40}
                alt="img"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div>
              <h1 className="text-sm">{userInfo.fullname}</h1>
              <p className="text-[11px] text-gray-500">{userInfo.email}</p>
            </div>
          </div>
        </div>

        <div className="w-1/4 flex justify-center">
          <h1 className="text-sm">male</h1>
        </div>

        <div className="py-1 px-3 bg-green-100 flex justify-center rounded-full w-1/4">
          <h1 className="text-sm text-green-600">Active</h1>
        </div>
      </Link>
    </>
  );
}
export default Record;
