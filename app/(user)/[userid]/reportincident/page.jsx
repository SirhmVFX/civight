import PrimaryButton from "@/components/PrimaryButton";
import ProfileHeader from "@/components/Profileheader";

function ReportIncident() {
  return (
    <>
      <section className="w-full h-screen p-8 ">
        <ProfileHeader />

        <h1 className="text-3xl">Report Incident</h1>

        <form>
          <div className="py-4">
            <label htmlFor="">Your Name *</label>
            <div className="flex gap-1 items-center p-4 rounded-full border bg-gray-100">
              <input
                type="text"
                placeholder="Enter your fullname"
                className="bg-transparent w-full outline-none"
              />
            </div>
          </div>

          <div className="py-4">
            <label htmlFor="">What City is it happening *</label>
            <div className="flex gap-1 items-center p-4 rounded-full border bg-gray-100">
              <input
                type="text"
                placeholder="Enter city name"
                className="bg-transparent w-full outline-none"
              />
            </div>
          </div>

          <div className="py-4">
            <label htmlFor="">Tell us where in that city *</label>
            <div className="flex gap-1 items-center p-4 rounded-full border bg-gray-100">
              <input
                type="text"
                placeholder="Little area description"
                className="bg-transparent w-full outline-none"
              />
            </div>
          </div>

          <div className="py-4">
            <label htmlFor="">How bad is it *</label>
            <div className="flex gap-1 items-center p-4 rounded-full border bg-gray-100">
              <select
                name="incident_situation"
                id=""
                className="bg-transparent outline-none"
              >
                <option value="Severe">Severe</option>
                <option value="Fair">Fair</option>
                <option value="Terrible">Terrible</option>
                <option value="Emergency">
                  It requires an immediate attention
                </option>
              </select>
            </div>
          </div>

          <div className="py-4">
            <label htmlFor="">Give us a little more information *</label>
            <div className="flex gap-1 items-center p-4 rounded-xl border bg-gray-100">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Additional information"
                className="bg-transparent w-full outline-none"
              ></textarea>
            </div>
          </div>

          <div className="py-4">
            <label htmlFor="">Please upload and image *</label>
            <div className="flex gap-1 items-center p-4 rounded-full border bg-gray-100">
              <input
                type="file"
                placeholder=""
                className="bg-transparent w-full outline-none"
              />
            </div>
          </div>

          <PrimaryButton label={"Report Incident"} />
        </form>

        <div className="p-24">1</div>
      </section>
    </>
  );
}

export default ReportIncident;
