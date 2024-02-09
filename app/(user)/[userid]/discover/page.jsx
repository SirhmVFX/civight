import Image from "next/image";
import { features, report } from "@/data/data";
import Features from "@/components/Features";
import Report from "@/components/Report";
import ProfileHeader from "@/components/Profileheader";

function Discover({ params }) {
  const cvrId = params.userid;

  return (
    <>
      <section className="w-full h-screen ">
        <div className="p-8">
          <ProfileHeader userId={cvrId} />

          <div className="bg-primarycolor w-full h-[200px] rounded-2xl"></div>

          <div className="grid grid-cols-4 gap-2 py-4">
            {features.map((feature) => (
              <Features {...feature} key={feature.id} />
            ))}
          </div>
        </div>

        <div className="bg-secondarycolor p-8">
          <h1 className="text-white">Recent Reports</h1>

          {report.map((repo) => (
            <Report {...repo} key={repo.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Discover;
