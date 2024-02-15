import Image from "next/image";
import Link from "next/link";
import img3 from "@/public/images/img3.png";

function Splash3() {
  return (
    <>
      <section className="w-full bg-secondarycolor h-screen p-8">
        <div className="w-full md:3/4 mx-auto flex flex-col h-full justify-between ">
          <div className="py-10">
            <h1 className="text-6xl text-white">
              Empowering your peace of mind.
            </h1>
            <p className="text-white">Stay secure, stay confident.</p>
          </div>

          <Image src={img3} width={550} height={550} alt="img3" />
          <Link href={"/signup1"} className="button">
            Create Account
          </Link>
        </div>
      </section>
    </>
  );
}

export default Splash3;
