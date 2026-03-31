export default function MineralColumn({ name }) {
  return (
    <th>
      {name} <i className="fa-solid fa-caret-down"></i>
    </th>
  );
}