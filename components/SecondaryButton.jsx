function SecondaryButton({ label, onclick }) {
  return (
    <button
      className="bg-secondarycolor text-white rounded-full w-full p-4"
      onClick={onclick}
    >
      {label}
    </button>
  );
}

export default SecondaryButton;
