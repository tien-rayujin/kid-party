export default function StyButton({ content, type, handleClick }) {
  return (
    <button
      onClick={handleClick}
      type={type}
      className="px-3 py-2 border border-slate-300 rounded-sm"
    >
      {content}
    </button>
  );
}
