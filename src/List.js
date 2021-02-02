function List({ items }) {
  console.log(items);
  return (
    <ul>
      {items.map((item, id) => (
        <li id={id} key={id}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default List;
