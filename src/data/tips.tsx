import { Tip } from "@/interfaces/data.interface";
// Algunos iconos relacionados con construcción
import { FaHardHat } from "react-icons/fa";
import { GiConcreteBag } from "react-icons/gi";
import { MdConstruction } from "react-icons/md";
import { RiToolsFill } from "react-icons/ri";

export const tips: Tip[] = [
  {
    label: "Asesoría en maquinaria",
    type: "Construccion",
    icon: <FaHardHat size={20} className="dark:text-blue-300" />,
    color: "blue",
    description:
      "Consúltanos antes de contratar maquinaria para tu proyecto. Nuestro equipo te asesorará según tus necesidades.",
  },
  {
    label: "Mantenimiento preventivo",
    type: "Construccion",
    icon: <RiToolsFill size={20} className="dark:text-orange-300" />,
    color: "orange",
    description:
      "Mantener tus maquinaria en buen estado prolongará su vida útil y evitará averías costosas.",
  },
  {
    label: "Alquila si así conviene",
    type: "Construccion",
    icon: <MdConstruction size={20} className="dark:text-purple-300" />,
    color: "purple",
    description:
      "Considera contratar el servicio de alquiler si el proyecto es de corto plazo, así optimizarás tus recursos.",
  },
  {
    label: "Capacitación del operador",
    type: "Construccion",
    icon: <RiToolsFill size={20} className="dark:text-green-500" />,
    color: "green",
    description:
      "Capacita a tus operadores para que trabajen de forma más segura y aumenten así la productividad en la obra.",
  },
  {
    label: "Calidad de los materiales",
    type: "construccion",
    icon: <GiConcreteBag size={20} className="dark:text-blue-300" />,
    color: "blue",
    description:
      "Usar materiales de calidad junto con maquinaria adecuada proporciona mejores resultados y más seguridad.",
  },
];
