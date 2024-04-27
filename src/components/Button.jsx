function Button({ type, children, onClick, disabled }) {
  if (type === "rounded")
    return (
      <button
        className="flex aspect-square h-[60px] items-center justify-center rounded-full bg-gradient-to-b from-blue-900  via-blue-800 to-blue-600 font-medium text-white  disabled:cursor-not-allowed"
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  return (
    <button
      className="cursor-not-allowed rounded-full bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 px-10  py-3 font-medium  text-white"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
