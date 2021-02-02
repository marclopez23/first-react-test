import List from "./List";
function Body({ lista, descripcion }) {
  return (
    <div>
      <p className="descripcion">{descripcion}</p>
      <List items={lista} />
    </div>
  );
}

export default Body;
