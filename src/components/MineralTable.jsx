import CheddarRow from "./CheddarRow";
import CottageRow from "./CottageRow";
import FetaRow from "./FetaRow";
import MozzarellaRow from "./MozzarellaRow";
import SwissRow from "./SwissRow";
import TableHeader from "./TableHeader";

export default function MineralTable() {
  return (
    <table>
      <TableHeader />
      <SwissRow />
      <FetaRow />
      <CheddarRow />
      <MozzarellaRow />
      <CottageRow />
    </table>
  );
}