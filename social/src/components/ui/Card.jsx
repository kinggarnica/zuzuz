export default function Card({ title, children }) {
  return (
    <div className="card">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
}