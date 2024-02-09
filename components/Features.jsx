import Link from "next/link";

function Features({ icon, name, link }) {
  return (
    <>
      <Link
        href={link}
        className="bg-secondarycolor p-4 rounded-3xl flex flex-col gap-2 items-center"
      >
        <div>{icon}</div>
        <p className="text-[10px] text-white text-center">{name}</p>
      </Link>
    </>
  );
}

export default Features;
