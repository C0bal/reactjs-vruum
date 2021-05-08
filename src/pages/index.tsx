import Head from 'next/head'
import { HomeCard } from '../components/HomeCard';
import { HomeLogo } from '../components/HomeLogo';

import styles from '../styles/pages/Home.module.css';
import { HomeContainer } from '../styles/pages/index';

export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>Homepage | Vruum</title>
      </Head>

      <header>
        <HomeLogo />
      </header>
      <main>
        <HomeCard 
          img="cooper" 
          title="Consumo" 
          description="Calcular a média de consumo do seu carro." 
          route="consumption"
          color="var(--red)"
        />
        <HomeCard 
          img="fuel" 
          title="Combustíveis" 
          description="Comparar o preço do Álcool e da Gasolina para saber qual o mais vantajoso para abastecer." 
          route="fuel"
          color="var(--green)"
        />
        <HomeCard 
          img="road" 
          title="Percurso" 
          description="Calcular qual será o gasto total em uma viagem." 
          route="course"
          color="var(--blue)"
        />
      </main>
    </HomeContainer>
  );
}