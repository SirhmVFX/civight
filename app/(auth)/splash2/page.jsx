import Image from "next/image";
import Link from "next/link";

function Splash2() {
  return (
    <>
      <section className="w-full h-screen p-8">
        <div className="w-full md:3/4 mx-auto flex flex-col gap-20">
          <Image src={"/images/img2.png"} width={550} height={550} alt="img2" />

          <div>
            <h1 className="text-7xl"> Manage & Secure your Yourself</h1>
            <p>Stay Safe and Secured everywhere you go</p>
          </div>

          <Link href={"/splash3"} className="button">
            Next
          </Link>
        </div>
      </section>
    </>
  );
}

export default Splash2;
