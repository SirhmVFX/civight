import Image from "next/image";
function NotificationComponent() {
  return (
    <>
      <div className="py-2 border-t">
        <div className="flex items-center gap-2">
          <Image src={"/images/profile.png"} width={50} height={50} alt="img" />

          <div>
            <h1 className="text-sm font-bold text-gray-400">
              Femi reported an event at Mile 12
            </h1>
            <div className="flex gap-3">
              <p className="text-[12px]">People fighting</p>
              <p className="text-[12px] text-gray-400">at 14:58</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotificationComponent;
