export default function StyButton({ content = "button", handleClick = () => {} }) {
  return (
    <button
      onClick={handleClick}
      className="px-3 py-2 border border-slate-300 rounded-sm"
    >
      {content}
    </button>
  );
}
