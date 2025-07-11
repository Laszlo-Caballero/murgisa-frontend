import Badge from "@/components/ui/badge/Badge";
import CardInfo from "@/components/ui/card-info/CardInfo";

import { MantenimientoCorrectivo } from "@/interfaces/responsefinal.interface";
import { CorrectivoCards } from "@/cards/CorrectivoCards";
import CardsLoad from "@/components/share/cards-load/CardsLoad";


interface ListarCorrectivoProps {
  data: MantenimientoCorrectivo[];
}

export default function ListaCalendario({ data }: ListarCorrectivoProps) {
  return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CardsLoad data={data || []} render={CorrectivoCards} />
      </div>
  );
}
