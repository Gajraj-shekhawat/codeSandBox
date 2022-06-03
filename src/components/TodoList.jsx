export default TodoList = ({ todo, status }) => {
  return (
    <div style={{ display: "flex", gap: "100px" }}>
      <p>{todo}</p>
      <p>{status ? "completed" : "pending"}</p>
    </div>
  );
};
