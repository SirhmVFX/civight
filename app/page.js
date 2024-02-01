import PrimaryButton from "@/components/PrimaryButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-secondarycolor  w-full  p-8  h-screen ">
      <div className="w-full md:w-3/4 flex flex-col items-center mx-auto mt-44 gap-4 ">
        <Image
          src={"/images/civightlogo.png"}
          alt="logo"
          width={200}
          height={200}
        />

        <h1 className="text-white text-6xl">Civight</h1>

        <PrimaryButton label={"Get Started"} />
      </div>
    </main>
  );
}
