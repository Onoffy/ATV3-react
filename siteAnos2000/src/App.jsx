import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import logo_2x from './assets/logo_2x.png'
import DaysForLaunch from './components/daysForLaunch'
import library_capsule_2x from './assets/library_capsule_2x.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img id='STHLogo' src={logo_2x} alt="STH Logo"/>
        </div>

        <hr />

        <div id='daysForLaunch'>
          <DaysForLaunch></DaysForLaunch>
        </div>

        <hr />

        <div id='textCover'>
          <div>
            <h3>ENFRENTE O DESTINO</h3>
            <p>Uma saga de cinquenta anos daqueles que não têm destino e da luta desesperada para encontrar um lar. São Francisco, 1915. Nossa história começa quando um jovem clandestino embarca num navio misterioso, na calada da noite.</p>

            <h3>VIOLÊNCIA CRIATIVA, INTUITIVA E EXTREMA</h3>
            <p>Nestes tempos turbulentos,
              lutar para sobreviver significa uma só coisa: fazer tudo o que for necessário.
              Viva essa luta em meio à brutalidade de um sistema de combate dinâmico e cheio de vida.</p>
          </div>
          <div>
            <img id='STHCover' src={library_capsule_2x} alt="STH Cover" width={400}/>
          </div>
          <div>
            <h3>5 ERAS, 5 CIDADES</h3>
            <p>A história se passa numa versão do Japão que poderia ter existido
              numa dimensão paralela e é ambientada em 5 cidades imersivas,
              todas inspiradas em locais reais de suas respectivas épocas.</p>
            <ul>
              <li>1915, Kokura, Fukuoka</li>
              <li>1929, Kure, Hiroshima</li>
              <li>1943, Minami, Osaka</li>
              <li>1951, Atami, Shizuoka</li>
              <li>1965, Shinjuku, Tóquio</li>
            </ul>

            <h3>A VIDA DE PRODUTOR</h3>
            <p>Nos primeiros capítulos da história, o guia e mentor do Makoto descobre que ele tem um talento musical.
              Não demora para que Makoto se veja não apenas cantando, mas também desempenhando o papel de produtor,
              viabilizando uma série de espetáculos incríveis por todo o Japão.</p>
          </div>
        </div>
      </section>

      
    </>
  )
}

export default App
