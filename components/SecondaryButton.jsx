function SecondaryButton({ label, onclick, color }) {
  return (
    <button
      className={`${color} text-white rounded-full w-full p-4`}
      onClick={onclick}
    >
      {label}
    </button>
  );
}

export default SecondaryButton;
