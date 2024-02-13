const { default: Image } = require("next/image");

function IncidentId() {
  return (
    <>
      <section className="w-full h-screen">
        <div className="w-full h-2/4 bg-black">
          <Image
            src={"/images/mil.jpg"}
            width={1000}
            height={1000}
            alt="lk"
            className="w-full h-full object-cover "
          />
        </div>
      </section>
    </>
  );
}

export default IncidentId;
