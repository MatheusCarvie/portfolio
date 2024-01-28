import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from "./assets/gravata-dark.png"
import TextButton from './components/text_button'
import MyButton from './components/my_button'
import CircleButton from './components/circle_button'
import gitHub from "./assets/github.png"
import gitHubDark from "./assets/github-color-dark.png"
import linkedinDark from "./assets/linkedin-color-dark.png"
import linkedin from "./assets/linkedin.png"
import { useState, useEffect } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import anim_aboutme from "./assets/anim_aboutme.json"
import imgPortfolio from "./assets/portfolio.png"
import olho from "./assets/olho.png"
import olhoDark from "./assets/olho-dark.png"
import linkImg from "./assets/link.png"
import linkImgDark from "./assets/link-dark.png"
import projeting from "./assets/projecting.png"
import flaxEngine from "./assets/flaxengine.png"
import pokedex from "./assets/pokedex.png"
import MyInput from './components/my_input'

export default function App() {
  const [isScroll, setIsScroll] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);

  // Cria um ouvinte que vai obter o valor atual do scroll no eixo Y
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollValue(scrollY);
    setIsScroll(scrollY > 10);
  };

  const customStyle = {
    header: {
      backgroundColor: isScroll ? "white" : "transparent",
      boxShadow: isScroll ? "var(--boxShadow)" : "none"
    },
    textButton: {
      color: isScroll ? "none" : "var(--secondaryColor)"
    }
  };

  return (
    <div id='app_body'>
      <header style={customStyle.header}>
        <img src={logo} alt="tie" />
        <nav>
          <TextButton style={customStyle.textButton} text={"Sobre min"} />
          <TextButton style={customStyle.textButton} text={"Habilidades"} />
          <TextButton style={customStyle.textButton} text={"Projetos"} />
          <MyButton style={{ marginLeft: "10px" }} text={"Contato"} icon={"mail"} />
        </nav>
      </header>
      <main>
        <section className='one'>
          <article className='left'>
            <h3>Olá, eu sou</h3>
            <h1>Matheus Carvie</h1>
            <h2>Programador FRONT-END</h2>
            <h2>Desenvolvedor de jogos</h2>
            <div className='line_buttons'>
              <CircleButton tooltip={"Linkedin"} src={linkedinDark} srcHover={linkedin} alt={"Linkedin"} />
              <CircleButton tooltip={"GitHub"} src={gitHubDark} srcHover={gitHub} alt={"GitHub"} />
              <MyButton text={"Saiba mais"} />
            </div>
          </article>
          <article className='right'>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </article>
        </section>
        <section className='two'>
          <article className='left'>
            <Player
              autoplay
              loop
              src={anim_aboutme}>
            </Player>
          </article>
          <article className='right'>
            <h2>Sobre min</h2>
            <p>
              Me chamo Matheus Vieira, conhecido como Carvie. Ingressei no mundo da programação durante a pandemia em 2020 e desde então, transformar ideias em realidade se tornou minha paixão. Dedico-me especialmente ao React.js e também desenvolvo jogos em C# e C++. A possibilidade de criar algo a partir do zero é fascinante. Estou entusiasmado para continuar aprendendo e explorando novas áreas no campo da tecnologia. Meu objetivo futuro é me especializar como Fullstack.
            </p>
          </article>
        </section>
        <section className='three'>
          <h2>Habilidades</h2>
          <LineItem text={"ReactJS"} description={"Tenho habilidades com useState, useEffect e contextos para gerenciamento de estado eficaz, além de aplicar componentização para construir interfaces modulares. Estou sempre aprendendo para aprimorar minhas habilidades."} />
          <LineItem text={"Vite"} description={"Estou familiarizado com a criação ágil e eficaz de projetos front-end usando o Vite. Essa ferramenta proporciona uma abordagem eficiente no desenvolvimento, permitindo a construção rápida e fluida de aplicações."} />
          <LineItem text={"Vercel"} description={"Tenho facilidade em utilizar a plataforma Vercel para o deploy e hospedagem de aplicações web. Estou familiarizado com a simplicidade e eficiência que a Vercel oferece, tornando o processo de implantação rápido e descomplicado."} />
          <LineItem text={"Git"} description={"Tenho experiência na utilização do Git para controle de versionamento, assegurando um fluxo de trabalho eficiente e colaborativo. Estou familiarizado com as práticas que facilitam a colaboração e a organização no desenvolvimento de projetos."} />
          <LineItem text={"GitHub"} description={"O GitHub é meu cantinho preferido para guardar meus códigos e fazer push para as minhas branches com facilidade. Tenho o prazer de colaborar em projetos de código aberto, contribuindo para a comunidade de desenvolvedores."} />
          <LineItem text={"Firebase"} description={"Tenho um conhecimento abrangente no Firebase, cobrindo áreas como autenticação, banco de dados, armazenamento de arquivos e hospedagem. Essa plataforma oferece uma gama completa de recursos que me permitem lidar com diversas funcionalidades de maneira integrada."} />
          <LineItem text={"API"} description={"Com o Axios no ReactJS, é fácil pegar dados de uma API. A integração é tranquila e eficiente, facilitando o processo de obtenção de informações."} />
        </section>
        <section className='four'>
          <h2>Projetos Web 🎉</h2>
          <div className='line'>
            <CardProjects notView={true} src={imgPortfolio} alt={"Meu portfólio"} description={"Feito com ReactJS + Vite"} />
            <CardProjects disable={true} src={pokedex} alt={"Pokédex"} description={"Consumo de API. Em desenvolvimento"} />
            <CardProjects disable={true} src={projeting} alt={"Projeto pessoal"} description={"Ainda em desenvolvimento. 80% concluindo"} />
          </div>
          <h2>Projeto C++/C# 🎈</h2>
          <div className='line'>
            <CardProjects src={flaxEngine} alt={"Flax Engine"} description={"Minha colaboração em um Software Open Source."} />
          </div>
        </section>
        <section className='five'>
          <div className='container'>
            <h2>Contato 📩</h2>
            <form action="https://formsubmit.co/matheuspowerdev@gmail.com" method="POST">
              <MyInput name={"Nome"} type={"text"} placeholder={"Insira o seu nome e sobrenome"} />
              <MyInput name={"E-mail"} type={"email"} placeholder={"Insira o seu e-mail"} />
              <MyInput name={"Assunto"} type={"text"} placeholder={"Insira o assunto"} />
              <MyInput name={"Mensagem"} type={"area"} placeholder={"Insira sua mensagem"} />
              <MyButton type={"submit"} text={"Enviar"} />
            </form>
          </div>
        </section>
        <footer>
          <p>Créditos: Flaticon / Lottiefiles / FormSubmit</p>
          <p>Copyright © 2024 Matheus Carvie. Todos os direitos reservados.</p>
        </footer>
      </main>
      <UpArrow />
    </div>
  )
}

function UpArrow() {
  return (
    <div className="up_arrow">
      <span className="material-symbols-outlined">
        arrow_upward
      </span>
    </div>
  )
}

function LineItem({ text, description }) {
  return (
    <div className='line'>
      <div className='items'>
        <h3>{text}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

function CardProjects({ src, alt, description, disable, notView = false }) {
  return (
    <div className='card_projects'>
      <img src={src} alt={alt} />
      <div className='menu'>
        <h3>{alt}</h3>
        {description && <p>{description}</p>}
        <div className='line'>
          {!disable && (
            <>
              {!notView && <CircleButton src={olhoDark} srcHover={olho} alt={"Visualizar"} tooltip={"Visualizar o projeto"} />}
              <CircleButton src={linkImgDark} srcHover={linkImg} alt={"Link"} tooltip={"Visualizar o repositório"} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

