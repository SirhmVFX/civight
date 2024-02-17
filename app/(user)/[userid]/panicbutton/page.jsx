import Panic from "@/components/Panic";
import ProfileHeader from "@/components/Profileheader";
import { panicoptions } from "@/data/data";
import Image from "next/image";
import loadinggif from "@/public/loading.gif";

function PanicButton({ params }) {
  const userId = params.userid;
  return (
    <>
      <section className="p-8 w-full md:w-3/4 h-screen flex flex-col items-center">
        <div className="w-full">
          <ProfileHeader userId={userId} />
        </div>

        <div className="border rounded-full p-2 border-primarycolor mt-8">
          <div className="border w-[250px] h-[250px] rounded-full flex flex-col items-center justify-center">
            <div className="w-full h-1/4">
              <Image
                src={
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F31234507%2FOpen-source-Loading-GIF-Icons-Vol-1&psig=AOvVaw1r_X65Q5IG-gk5-yHET3y9&ust=1708254961547000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLiRl-OfsoQDFQAAAAAdAAAAABAE"
                }
                width={1200}
                height={1200}
                alt="loadin"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-xl font-bold text-center">Is Active...</h1>
            <p className="text-center">
              Waiting for <br /> your response...
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 p-10">
          {panicoptions.map((panic) => (
            <Panic key={panic.id} {...panic} />
          ))}
        </div>
      </section>
    </>
  );
}

export default PanicButton;
