import PrimaryButton from "@/components/PrimaryButton";
import ProfileHeader from "@/components/Profileheader";
import Image from "next/image";

function ShareLocation() {
  return (
    <>
      <section className="w-full h-screen">
        <div className="w-full h-2/4 relative">
          <div className="absolute w-full p-8">
            <ProfileHeader />
          </div>
          <Image
            src={"/images/location2.png"}
            width={1100}
            height={1100}
            alt="location"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 bg-white">
          <h1>Share your location</h1>

          <div>
            <div className="flex items-center gap-2 py-6">
              <Image
                src={"/images/profile.png"}
                width={80}
                height={80}
                alt="prof"
              />

              <div>
                <h1 className="text-lg font-bold">Fullstack Mechanic</h1>
                <p className="text-[12px] text-gray-300">CVR102946128848276</p>
                <p className="text-[12px] text-gray-300">Lagos, Nigeria.</p>
              </div>
            </div>

            <PrimaryButton label={"Share Location"} />
          </div>
        </div>
      </section>
    </>
  );
}

export default ShareLocation;
