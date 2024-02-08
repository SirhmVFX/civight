import PrimaryButton from "@/components/PrimaryButton";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-secondarycolor  w-full h-screen p-8">
      <div className="w-full md:w-3/4 flex flex-col items-center h-full justify-between gap-4 ">
        <div className="flex flex-col items-center pt-36">
          <Image
            src={"/images/civightlogo.png"}
            alt="logo"
            width={200}
            height={200}
          />

          <h1 className="text-white text-6xl">Civight</h1>
          <p className="text-primarycolor">
            Protecting the civil rights of citizens...
          </p>
        </div>

        <Link href={"/splash1"} className="button">
          Get Started
        </Link>
      </div>
    </main>
  );
}
