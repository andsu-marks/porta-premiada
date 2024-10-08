import styles from "../../../styles/jogo.module.css"
import { useEffect, useState } from "react";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import Porta from "../../../components/Porta";
import Link from "next/link";
import { useRouter } from "next/router";

export default function jogo() {
  const router = useRouter();

  const [portas, setPortas] = useState(criarPortas(15,2));

  useEffect(() => {
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;
    setPortas(criarPortas(portas, temPresente))
  }, [router?.query])

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} 
        onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
    })
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>  
        {renderizarPortas()}
      </div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  )
}