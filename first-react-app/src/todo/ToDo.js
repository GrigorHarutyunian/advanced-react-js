import "./Todo.css";
export function Todo({ className }) {
  return (
    <section className={className}>
      <input placeholder="Type Smt"></input>
    </section>
  );
}
