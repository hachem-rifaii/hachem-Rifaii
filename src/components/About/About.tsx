import { Container } from "./styles";
import HachemRifaii from "../../assets/me.png";
import mongoDbIcon from "../../assets/mongodb.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import laravelIcon from "../../assets/laravel.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import tailwindIcon from "../../assets/tailwindcss.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
    <div className="about-text">
      <ScrollAnimation animateIn="fadeInLeft">
        <h2>About me</h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
        <p>
          Hello! My name is <strong>Hachem Mostafa Rifaii</strong>, a passionate full-stack web developer from Lebanon. With over a year of experience in building modern and scalable web applications, I specialize in creating user-friendly and impactful solutions.
        </p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <p>
          I hold a <strong>degree in Computer Science (2021–2024)</strong> and have completed diplomas in <strong>Full Stack Laravel</strong> and <strong>MERN Stack</strong>. Throughout my journey, I’ve developed various projects including multi-vendor platforms, e-commerce solutions, and learning management systems using tools like <strong>React</strong>, <strong>Laravel</strong>, <strong>Node.js</strong>, <strong>MySQL</strong>, and <strong>MongoDB</strong>.
        </p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
        <p>
          My mission is to craft high-quality web solutions that solve real-world problems and help businesses grow. I’m always excited to learn, explore new technologies, and collaborate with creative teams to deliver exceptional results.
        </p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
        <h3>Here are my main skills:</h3>
      </ScrollAnimation>
      <div className="hard-skills">
        <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
            <img src={laravelIcon} alt="laravel" />
          </ScrollAnimation>
        </div>
        <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
            <img src={reactIcon} alt="React" />
          </ScrollAnimation>
        </div>
        <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
            <img src={typescriptIcon} alt="Typescript" />
          </ScrollAnimation>
        </div>
        <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
            <img src={nodeIcon} alt="Node" />
          </ScrollAnimation>
        </div>
        <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
            <img src={mysqlIcon} alt="mysqlIcon" />
          </ScrollAnimation>
        </div>
        <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
            <img src={mongoDbIcon} alt="mongodb" />
          </ScrollAnimation>
        </div>
        <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
            <img src={tailwindIcon} alt="tailwind" />
          </ScrollAnimation>
        </div>
        <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
            <img src={boostrapIcon} alt="bootstrap" />
          </ScrollAnimation>
        </div>
        <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
            <img src={jsIcon} alt="JavaScript" />
          </ScrollAnimation>
        </div>
      </div>
    </div>
    <div className="about-image">
      <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
        <img src={HachemRifaii} alt="Hachem Mostafa Rifaii" />
      </ScrollAnimation>
    </div>
  </Container>
  
  )
}
