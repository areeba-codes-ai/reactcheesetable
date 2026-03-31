import MineralColumn from "./MineralColumn";


export default function TableHeader() {
  const minerals = ["Cl","Ca","Fe","Mg","P","K","Na","Zn","Cu","Mn","Se"];

  return (
    <tr>
      <th></th>
      {minerals.map((mineral) => (
        <MineralColumn key={mineral} name={mineral} />
      ))}
    </tr>
  );
}