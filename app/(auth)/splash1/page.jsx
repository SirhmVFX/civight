import Image from "next/image";
import Link from "next/link";

function Splash1() {
  return (
    <>
      <section className="bg-secondarycolor w-full h-full py-4">
        <div className="w-full md:w-3/4 mx-auto flex flex-col py-4 px- gap-10">
          <div className="p-8">
            <h1 className="text-7xl text-white">
              Manage & Secure your Yourself
            </h1>

            <p className="text-white">
              Stay Safe and Secured everywhere you go
            </p>
          </div>
          <Image src={"/images/img1.png"} width={550} height={550} alt="img1" />
          <div className="px-4">
            <Link href={"/splash2"} className="button">
              Next
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Splash1;
