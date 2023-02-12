export default function Link({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
    >
      {children}
    </div>
  );
}
