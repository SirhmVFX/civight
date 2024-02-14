import Image from "next/image";
import Link from "next/link";
function NotificationComponent({ link, img, incidentDetails }) {
  return (
    <>
      <Link href={`geofencingalert/${link}`}>
        <div className="py-2 border-t">
          <div className="flex items-center gap-2">
            <div className="w-[50px] h-[50px] rounded-full">
              <Image
                src={img}
                width={50}
                height={50}
                alt="img"
                className="w-full h-full object-cover rounded"
              />
            </div>

            <div>
              <h1 className="text-sm font-bold text-gray-400">
                {incidentDetails?.fullname
                  ? `${
                      incidentDetails.fullname.split(" ")[0]
                    } reported an event at ${incidentDetails.city}`
                  : `Anon reported an event at ${incidentDetails.city}`}
              </h1>
              <div className="">
                <p className="text-[12px]">{incidentDetails?.desc}</p>
                <p className="text-[12px] text-gray-400">at 14:58</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default NotificationComponent;
