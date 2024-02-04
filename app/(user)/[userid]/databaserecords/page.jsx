import ProfileHeader from "@/components/Profileheader";
import Record from "@/components/Record";
import Image from "next/image";

function DatabaseRecords() {
  return (
    <>
      <section className="w-full h-screen p-8 bg-gray-100">
        <div className="w-full md:w-3/4">
          <ProfileHeader />

          <div>
            <h1>Database Records</h1>
            <p className="text-[11px] text-gray-300">
              List of all individuals and their details
            </p>
          </div>

          <div className="flex items-center justify-between py-4">
            <div className="p-2 bg-white border rounded-lg">
              <input
                type="text"
                placeholder="search"
                className="bg-transparent outline-none w-full"
              />
            </div>

            <div className="p-2 bg-white border rounded-lg">
              <select
                name="filter"
                id=""
                className="bg-transparent outline-none w-full"
              >
                <option value="nill">filter</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="rounded-lg border bg-white ">
            <div className="flex">
              <div className="p-3 w-2/4">
                <h1 className="text-[12px]">Vendor Name</h1>
              </div>

              <div className="p-3 w-1/4">
                <h1 className="text-[12px]">Gender</h1>
              </div>

              <div className="p-3 w-1/4">
                <h1 className="text-[12px]">Status</h1>
              </div>
            </div>

            <Record />
            <Record />
            <Record />
            <Record />
            <Record />
            <Record />
            <Record />
            <Record />
            <Record />
            <Record />
          </div>
        </div>

        <div className="p-20">1</div>
      </section>
    </>
  );
}
export default DatabaseRecords;
