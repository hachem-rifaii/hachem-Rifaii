import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 3.5rem; /* Adjusted for smaller screens */
    margin-bottom: 2rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-template-rows: auto;
    gap: 1.5rem; /* Adjusted for smaller spacing */
    padding: 1rem;
    overflow: hidden;

    .project {
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #fff;

      &:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 2rem;

        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        a > img {
          width: 3.5rem; /* Adjusted size for smaller screens */
        }
      }

      h3 {
        margin-bottom: 1rem;
        font-size: 1.8rem;
        word-wrap: break-word;
      }

      p {
        font-size: 1.4rem;
        letter-spacing: 0.12rem;
        line-height: 1.5; /* Improved readability */
        margin-bottom: 1.5rem;

        a {
          color: #fff;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;

          &:hover {
            color: var(--green);
          }
        }
      }

      footer {
        margin-top: auto;

        .tech-list {
          display: flex;
          align-items: center;
          flex-wrap: wrap; /* Wrap items on smaller screens */
          gap: 0.8rem;
          font-size: 1.2rem;
          opacity: 0.8;
        }
      }
    }
  }

  @media (max-width: 960px) {
    h2 {
      font-size: 3rem;
    }

    .projects {
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem; /* Consistent spacing */
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }

    .project {
      padding: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 2.5rem;
    }

    .projects {
      gap: 1rem; /* Smaller gap for compact screens */
    }

    .project {
      padding: 1rem;
      border-radius: 0.5rem;
    }

    header {
      svg {
        width: 35px; /* Adjusted size */
      }
    }

    p {
      font-size: 1.2rem;
    }

    footer .tech-list {
      gap: 0.5rem;
      font-size: 1rem;
    }
  }
`;
