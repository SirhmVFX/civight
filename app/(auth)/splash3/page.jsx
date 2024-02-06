import Image from "next/image";
import Link from "next/link";

function Splash3() {
  return (
    <>
      <section className="w-full bg-secondarycolor h-screen p-8">
        <div className="w-full md:3/4 mx-auto flex flex-col pt-14 gap-20 ">
          <div>
            <h1 className="text-7xl text-white">Manage & Secure Yourself</h1>
            <p className="text-white">
              Stay Safe and Secured everywhere you go
            </p>
          </div>

          <Image src={"/images/img3.png"} width={550} height={550} alt="img3" />
          <Link href={"/signup1"} className="button">
            Create Account
          </Link>
        </div>
      </section>
    </>
  );
}

export default Splash3;
