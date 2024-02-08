import PrimaryButton from "@/components/PrimaryButton";
import Image from "next/image";

function AccountCreated() {
  return (
    <>
      <section className="bg-secondarycolor w-full h-screen p-8 flex items-center">
        <div className="w-full md:w-2/4 mx-auto flex flex-col justify-between h-full">
          <div className="pt-20 flex flex-col gap-4 px-8">
            <Image
              src={"/images/img4.png"}
              width={550}
              height={550}
              alt="img4"
            />

            <div className="flex flex-col items-center text-center">
              <h1 className="text-3xl text-white">
                Account Created Successfully
              </h1>
              <p className="text-gray-700">
                Your account has been created and verified successfully.
              </p>
            </div>
          </div>

          <PrimaryButton label={"Log In"} color={"bg-primarycolor"} />
        </div>
      </section>
    </>
  );
}

export default AccountCreated;
