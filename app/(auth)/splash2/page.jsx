import Image from "next/image";
import Link from "next/link";

function Splash2() {
  return (
    <>
      <section className="w-full h-screen p-8">
        <div className="w-full md:3/4 mx-auto flex flex-col justify-between h-full">
          <Image src={"/images/img2.png"} width={550} height={550} alt="img2" />

          <div>
            <h1 className="text-6xl">
              {" "}
              Defending your world, one byte at a time
            </h1>
            <p>Where security meets simplicity.</p>
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
