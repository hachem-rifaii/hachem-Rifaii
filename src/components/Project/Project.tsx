import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/hachem-rifaii/e-shop"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://e-shop-xf6x.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>{" "}
              </div>
            </header>
            <div className="body">
              <h3>
                E-Shop - Dynamic Multi vendor E-Commerce with Real-Time Seller-User
                Interaction
              </h3>
              <p>
                {" "}
                E-Shop is a cutting-edge e-commerce platform built with React,
                Tailwind CSS, and Material UI. It features a dynamic real-time
                messaging system powered by Socket.IO, enabling seamless
                communication between users and sellers. With integrated Stripe
                payments, cash on delivery options, and comprehensive dashboards
                for sellers and admins, users can easily manage products,
                orders, and events. This platform delivers a modern shopping
                experience with product ratings and full administrative control,
                enhancing convenience for both customers and merchants alike.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React</li> <li>Node.js</li> <li>TailwindCSS</li> <li>MaterialUI</li> <li>Socket.IO</li> <li>MongoDb</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://sayescell.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>
                Title: Sayes Cell - Your Trusted Mobile and Accessories Store
              </h3>
              <p>
                Sayes Cell is an online store offering the latest phones and
                accessories. The site features a user-friendly shopping
                experience, showcasing various products such as perfumes, games,
                tablets, and mobile phones. It also provides phone maintenance
                services like screen repairs and battery replacements. The
                business emphasizes high-quality products, customer
                satisfaction, and expert service. The site highlights the
                company's commitment to reliability, transparency, and
                exceptional customer support, making it a trusted choice for
                tech needs.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>laravel</li>
                <li>bootstrap</li>
                <li>chart js</li>
                <li>mysql</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://abbeautyfoundation.com/"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>AB Beauty Foundation - Over 20 Years of Excellence in Beauty</h3>
              <p>
              AB Beauty Foundation combines 24+ years of expertise with high-quality beauty treatments and products. Specializing in hairstyling, skincare, and nails, the business prides itself on using top-notch products and techniques in a welcoming, professional environment. With an online shop featuring affordable beauty essentials like gel polish and UV equipment, it ensures customer satisfaction with delivery options and 24/7 support.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Laravel</li>
                <li>Bootstrap</li>
                <li>mysql</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://medibook.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>
                MediBook: Medical Appointment Scheduler with Health History
              </h3>
              <p>
                Developed a secure medical appointment management platform with
                CRUD functionality, utilizing role-based access control,
                encryption techniques, and a robust MySQL database with
                normalized schema design and stored procedures for efficient
                scheduling, data privacy, and reliable retrieval of patient
                records.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/hachem-rifaii/code-magnet" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a  href="https://code-magnet.vercel.app/"target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Code Magnet</h3>
              <p>
              This project is a responsive  portfolio website built with React.js, styled with CSS, and enhanced with smooth animations using Framer Motion
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Framer motion</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
        <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
              <a href="https://github.com/hachem-rifaii/3D-spline-" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://loquacious-klepon-00d255.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>CyberSpace - A Unique Space-Themed Experience</h3>
              <p>
              This creative web project presents a futuristic and space-inspired theme with a bold, visually appealing design. Built with modern web technologies, it delivers a unique interactive experience, inviting users to explore the concept of distance and storytelling in cyberspace. Perfect for showcasing creativity and innovative web design.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Spline</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
