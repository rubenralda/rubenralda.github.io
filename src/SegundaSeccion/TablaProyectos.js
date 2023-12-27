import { datos } from "../datosProyect";
import Fila from "./FilaProyecto";

export default function ListCard() {
  return (
    <table>
      <thead>
        <tr style={{borderBottom: "1px solid #484848"}}>
          <th>Año</th>
          <th>Proyecto</th>
          <th>Descripcion</th>
          <th>Contruido con</th>
          <th>Repositorio</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((valor, index) => (
          <tr key={index} style={{borderBottom: "1px solid #484848"}}>
            <Fila
              year={valor.year}
              title={valor.title}
              descripcion={valor.descripcion}
              tags={valor.tags}
              repositorio={valor.repositorio}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
