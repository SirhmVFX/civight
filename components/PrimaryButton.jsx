function PrimaryButton({ label, onclick, color }) {
  return (
    <button className={`${color}  rounded-full w-full p-4`} onClick={onclick}>
      {label}
    </button>
  );
}

export default PrimaryButton;
