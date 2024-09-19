import styles from "../styles/Formulario.module.css"
import Cartao from "../components/Cartao";
import Link from "next/link";
import { useState } from "react";
import EntradaNumerica from "../components/EntradaNumerica";

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3);

  return (
   <div className={styles.formulario}>
    <div>
      <Cartao bgcolor="#c0392c">
        <h1 style={{backgroundColor: "#c0392c"}}>Monty Hall</h1>
      </Cartao>
      <Cartao>
        <EntradaNumerica text="Qtde Portas" 
          value={qtdePortas}
          onChange={novaQtde => setQtdePortas(novaQtde)}/>
      </Cartao>
    </div>
    <div>
      <Cartao></Cartao>
      <Cartao bgcolor="#28a085">
        <Link href={`/jogo/4/2`}>
          <h1 className={styles.link}>Iniciar</h1>
        </Link>
      </Cartao>
    </div>
   </div>
  )
}
