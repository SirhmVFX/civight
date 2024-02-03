function Panic({ option, icon }) {
  return (
    <>
      <div className="border-2 border-primarycolor p-2 rounded-full">
        <div className="w-[100px] h-[100px] bg-secondarycolor roudned-full flex flex-col items-center justify-center rounded-full">
          <div>{icon}</div>
          <p className="text-lg text-primarycolor">{option}</p>
        </div>
      </div>
    </>
  );
}

export default Panic;
