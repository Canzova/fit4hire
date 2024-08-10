const Btn = (prop) => {
  const text = prop.text;
  return (
    <div>
      <button className="bg-secondary py-1 px-6 rounded-2xl text-black font-bold md:px-4 md:py-2">
        {text}
      </button>
    </div>
  );
};
export default Btn;
