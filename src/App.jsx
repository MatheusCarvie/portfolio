import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import logo from "./assets/gravata-dark.png";
import TextButton from "./components/text_button";
import MyButton from "./components/my_button";
import CircleButton from "./components/circle_button";
import gitHub from "./assets/github.png";
import gitHubDark from "./assets/github-color-dark.png";
import linkedinDark from "./assets/linkedin-color-dark.png";
import linkedin from "./assets/linkedin.png";
import { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import anim_aboutme from "./assets/anim_aboutme.json";
import imgPortfolio from "./assets/portfolio.png";
import olho from "./assets/olho.png";
import olhoDark from "./assets/olho-dark.png";
import linkImg from "./assets/link.png";
import linkImgDark from "./assets/link-dark.png";
import projeting from "./assets/projecting.png";
import flaxEngine from "./assets/flaxengine.png";
import pokedex from "./assets/pokedex.png";
import MyInput from "./components/my_input";
import game from "./assets/game.png";
import movieAi from "./assets/movie-ai.png";
import dohma from "./assets/dohma-home.png";
import apis from "./assets/APIs.png";

export default function App() {
  const [isScroll, setIsScroll] = useState(false);

  // Cria um ouvinte que vai obter o valor atual do scroll no eixo Y
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScroll(scrollY > 10);
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - (80 - window.scrollY);

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const navigatePag = (url) => {
    window.open(url, "_blank");
  };

  const customStyle = {
    header: {
      backgroundColor: isScroll ? "white" : "transparent",
      boxShadow: isScroll ? "var(--boxShadow)" : "none",
    },
    textButton: {
      color: isScroll ? "none" : "var(--secondaryColor)",
    },
  };

  return (
    <div id="app_body">
      <header style={customStyle.header}>
        <img src={logo} alt="tie" />
        <nav>
          <TextButton
            style={customStyle.textButton}
            text={"Sobre min"}
            onClick={() => scrollToElement("two")}
          />
          <TextButton
            style={customStyle.textButton}
            text={"Habilidades"}
            onClick={() => scrollToElement("three")}
          />
          <TextButton
            style={customStyle.textButton}
            text={"Projetos"}
            onClick={() => scrollToElement("four")}
          />
          <MyButton
            style={{ marginLeft: "10px" }}
            text={"Contato"}
            icon={"mail"}
            onClick={() => scrollToElement("five")}
          />
        </nav>
      </header>
      <main>
        <section className="one">
          <article className="left">
            <h3>Olá, eu sou</h3>
            <h1>Matheus Carvie</h1>
            <h2>
              Programador{" "}
              <span style={{ textTransform: "uppercase" }}>Full-Stack</span>
            </h2>
            <h2>Desenvolvedor de jogos</h2>
            <div className="line_buttons">
              <CircleButton
                tooltip={"Linkedin"}
                src={linkedinDark}
                srcHover={linkedin}
                alt={"Linkedin"}
                onClick={() =>
                  navigatePag("https://www.linkedin.com/in/matheuscarvie/")
                }
              />
              <CircleButton
                tooltip={"GitHub"}
                src={gitHubDark}
                srcHover={gitHub}
                alt={"GitHub"}
                onClick={() => navigatePag("https://github.com/MatheusCarvie")}
              />
              <MyButton
                text={"Saiba mais"}
                onClick={() => scrollToElement("two")}
              />
            </div>
          </article>
          <article className="right">
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </article>
        </section>
        <section className="two" id="two">
          <article className="left">
            <Player autoplay loop src={anim_aboutme}></Player>
          </article>
          <article className="right">
            <h2>Sobre min</h2>
            <p>
              Me chamo Matheus Vieira, conhecido como Carvie, e sou apaixonado
              por transformar ideias em realidade através da tecnologia. Minha
              jornada na programação começou durante a pandemia em 2020, e desde
              então venho me dedicando a aprender e evoluir constantemente.
              <br /> <br /> Tenho experiência na criação de APIs com NodeJS e
              Express utilizando boas práticas como DDD e já desenvolvi APIs
              usando ASP.NET.
              <br /> <br /> Desenvolvo aplicações Web utilizando frameworks
              modernos como Next.js, Vite e Angular.
              <br /> <br />
              Desenvolvo aplicativos móveis com Flutter e React Native,
              aplicando princípios de POO e integrando Firebase para
              gerenciamento de dados. Além disso, tenho experiência no
              desenvolvimento de jogos em 3D com C# e C++, focando em mecânicas
              imersivas e desempenho otimizado.
            </p>
          </article>
        </section>
        <section className="three" id="three">
          <h2>Habilidades</h2>
          <LineItem
            text={"ReactJS"}
            description={
              "Tenho habilidades com useState, useEffect e contextos para gerenciamento de estado eficaz, além de aplicar componentização para construir interfaces modulares. Estou sempre aprendendo para aprimorar minhas habilidades."
            }
          />
          <LineItem
            text={"Angular"}
            description={
              "Tenho experiência em Angular, aplicando componentização para criar interfaces modulares. Uso serviços e RxJS para gerenciar estado e fluxos assíncronos. Estou sempre buscando melhorar e aprender mais sobre o framework."
            }
          />
          <LineItem
            text={"NextJS"}
            description={
              "Tenho habilidades na criação de aplicações web utilizando Next.js, aproveitando a eficiência do mesmo para a construção do front-end."
            }
          />
          <LineItem
            text={"Vite"}
            description={
              "Estou familiarizado com a criação ágil e eficaz de projetos front-end usando o Vite. Essa ferramenta proporciona uma abordagem eficiente no desenvolvimento, permitindo a construção rápida e fluida de aplicações."
            }
          />
          <LineItem
            text={"Flutter"}
            description={
              "Tenho conhecimentos na criação de apps no Flutter, utilizando eficazmente princípios de programação orientada a objetos. Tenho experiência sólida na integração do Firebase para manipulação eficiente de dados em aplicativos móveis Flutter."
            }
          />
          <LineItem
            text={"Vercel"}
            description={
              "Tenho facilidade em utilizar a plataforma Vercel para o deploy e hospedagem de aplicações web. Estou familiarizado com a simplicidade e eficiência que a Vercel oferece, tornando o processo de implantação rápido e descomplicado."
            }
          />
          <LineItem
            text={"Git"}
            description={
              "Tenho experiência na utilização do Git para controle de versionamento, assegurando um fluxo de trabalho eficiente e colaborativo. Estou familiarizado com as práticas que facilitam a colaboração e a organização no desenvolvimento de projetos."
            }
          />
          <LineItem
            text={"GitHub"}
            description={
              "O GitHub é meu cantinho preferido para guardar meus códigos e fazer push para as minhas branches com facilidade. Tenho o prazer de colaborar em projetos de código aberto, contribuindo para a comunidade de desenvolvedores."
            }
          />
          <LineItem
            text={"Firebase"}
            description={
              "Tenho um conhecimento abrangente no Firebase, cobrindo áreas como autenticação, banco de dados, armazenamento de arquivos e hospedagem. Essa plataforma oferece uma gama completa de recursos que me permitem lidar com diversas funcionalidades de maneira integrada."
            }
          />
          <LineItem
            text={"API"}
            description={
              "Com o Axios no ReactJS, é fácil pegar dados de uma API. A integração é tranquila e eficiente, facilitando o processo de obtenção de informações."
            }
          />
          <LineItem
            text={"Back-End"}
            description={
              "Tenho experiência em desenvolvimento de APIs REST, usando Prisma como ORM para lidar com o banco de dados. Sei como implementar JWT para autenticação e estou acostumado a criar services e controllers pra organizar o código."
            }
          />
          <LineItem
            text={"Jogos"}
            description={
              "Conhecimento em C# e C++, desenvolvo jogos em 3D utilizando game engines. Implemento mecânicas envolventes e otimizo o desempenho para criar experiências imersivas. Estou sempre explorando novas tecnologias para aprimorar meus projetos de jogos."
            }
          />
        </section>
        <section className="four" id="four">
          <h2>Projetos Web 🎉</h2>
          <div className="line">
            <CardProjects
              src={dohma}
              alt={"Dohma"}
              notLink={true}
              description={"Cardápio digital feito com Angular"}
              viewClick={() =>
                navigatePag("https://www.dohmagastrobar.com.br/")
              }
            />
            <CardProjects
              src={apis}
              alt={"Api"}
              description={"API feita em NodeJs + Express"}
              notView={true}
              linkClick={() =>
                navigatePag("https://github.com/MatheusCarvie/Pizzaria-NodeJS")
              }
            />
            <CardProjects
              src={movieAi}
              alt={"MovieAI"}
              description={
                "Recomendador de filmes com alta avaliação com consumo de API TMDB em NextJS | Typescript."
              }
              linkClick={() =>
                navigatePag("https://github.com/MatheusCarvie/MovieAI")
              }
              viewClick={() => navigatePag("https://movie-ai-xi.vercel.app/")}
            />
            <CardProjects
              src={pokedex}
              alt={"Pokédex"}
              description={"Consumo de API em ReactJS | Vite | Typescript."}
              linkClick={() =>
                navigatePag("https://github.com/MatheusCarvie/pokedex")
              }
              viewClick={() => navigatePag("https://pokedex-white.vercel.app/")}
            />
            <CardProjects
              notView={true}
              src={imgPortfolio}
              alt={"Meu portfólio"}
              description={"Feito com ReactJS | Vite"}
              linkClick={() =>
                navigatePag("https://github.com/MatheusCarvie/portfolio")
              }
            />
          </div>
          <h2>Projeto C++/C# 🎈</h2>
          <div className="line">
            <CardProjects
              linkClick={() =>
                navigatePag(
                  "https://github.com/FlaxEngine/FlaxEngine/pull/1213"
                )
              }
              viewClick={() => navigatePag("https://flaxengine.com/")}
              src={flaxEngine}
              alt={"Flax Engine"}
              description={"Minha colaboração em um Software Open Source."}
            />
            <CardProjects
              notLink={true}
              viewClick={() =>
                navigatePag(
                  "https://drive.google.com/file/d/1uLLWJYaS7X87q4vCBckd7-wiYaQvVWL8/view?usp=sharing"
                )
              }
              src={game}
              alt={"Jogo FPS"}
              description={
                "Projeto de estudo para aprender sobre desenvolvimento de jogos."
              }
            />
          </div>
        </section>
        <section className="five" id="five">
          <div className="container">
            <h2>Contato 📩</h2>
            <form
              action="https://formsubmit.co/matheuspowerdev@gmail.com"
              method="POST"
            >
              <MyInput
                name={"Nome"}
                type={"text"}
                placeholder={"Insira o seu nome e sobrenome"}
              />
              <MyInput
                name={"E-mail"}
                type={"email"}
                placeholder={"Insira o seu e-mail"}
              />
              <MyInput
                name={"Assunto"}
                type={"text"}
                placeholder={"Insira o assunto"}
              />
              <MyInput
                name={"Mensagem"}
                type={"area"}
                placeholder={"Insira sua mensagem"}
              />
              <MyButton type={"submit"} text={"Enviar"} />
            </form>
          </div>
        </section>
        <footer>
          <p>Créditos: Flaticon / Lottiefiles / FormSubmit</p>
          <p>Copyright © 2024 Matheus Carvie. Todos os direitos reservados.</p>
        </footer>
      </main>
      <UpArrow onClick={() => scrollToElement("app_body")} />
    </div>
  );
}

function UpArrow({ onClick }) {
  return (
    <div className="up_arrow" onClick={onClick}>
      <span className="material-symbols-outlined">arrow_upward</span>
    </div>
  );
}

function LineItem({ text, description }) {
  return (
    <div className="line">
      <div className="items">
        <h3>{text}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function CardProjects({
  src,
  alt,
  description,
  disable,
  viewClick,
  linkClick,
  notView = false,
  notLink = false,
}) {
  return (
    <div className="card_projects">
      <img src={src} alt={alt} />
      <div className="menu">
        <h3>{alt}</h3>
        {description && <p>{description}</p>}
        <div className="line">
          {!disable && (
            <>
              {!notView && (
                <CircleButton
                  pulse={true}
                  onClick={viewClick}
                  src={olhoDark}
                  srcHover={olho}
                  alt={"Visualizar"}
                  tooltip={"Visualizar o projeto"}
                />
              )}
              {!notLink && (
                <CircleButton
                  pulse={true}
                  onClick={linkClick}
                  src={linkImgDark}
                  srcHover={linkImg}
                  alt={"Link"}
                  tooltip={"Visualizar o repositório"}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
