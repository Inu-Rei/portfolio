import chakraImage from "../../images/techs/chakra.png";
import reactBootstrapImage from "../../images/techs/react-bootstrap.png";
import reactRouterdomImage from "../../images/techs/react-router-dom.png";
import sassImage from "../../images/techs/sass.png";
import reactImage from "../../images/techs/react.png";
import semanticImage from "../../images/techs/semantic.png";
import styledImage from "../../images/techs/styled-logo.png";
import viteImage from "../../images/techs/vite.png";
import cssImage from "../../images/techs/css.png";
import simpsonProject from "../../images/projects/simpson.jpeg";
import dynamicFormProject from "../../images/projects/dynamic.jpeg";
import gasolineraProject from "../../images/projects/gasolinera.jpeg";
import marvelProject from "../../images/projects/marvel.jpeg";
import rickMorty from "../../images/projects/rick-morty.jpeg";
import tareasProject from "../../images/projects/todo.jpeg";
import criptoProject from "../../images/projects/cripto-react.jpeg";
import citasProject from "../../images/projects/citas-react.JPG";

export const projectsPortfolio = [
    {
        title: "Rick & Morty API",
        image: rickMorty,
        techs: [
            { name: "React", src: reactImage },
            { name: "CSS", src: cssImage },
        ],
        description: "Application created with React JS and CSS to make a request to an external API of Rick & Morty.",
        repository: "https://github.com/sandraosr25/rick-and-morty.git",
        website: "https://rick-and-morty-app-sandra.netlify.app/" //ustedes deben colocar aquí el link del enlace público de netlify
    },
    {
        title: "To-do list",
        image: tareasProject,
        techs: [
            { name: "React", src: reactImage },
            { name: "Semantic UI React", src: semanticImage },
        ],
        description: "Application created with React JS and Semantic UI React to make a 'To-do' list of tasks, where you can add or remove tasks.",
        repository: "https://github.com/sandraosr25/Editor-de-tareas.git",
        website: "https://listado-tareas-app.netlify.app/" //ustedes deben colocar aquí el link del enlace público de netlify
    },
    {
        title: "Simpsons API",
        image: simpsonProject,
        techs: [
            { name: "React JS", src: reactImage },
            { name: "Styled Components", src: styledImage },
        ],
        description: "Application created with React JS and Styled Components to make a request to an external API of The Simpsons.",
        repository: "https://github.com/sandraosr25/los-simpsons.git",
        website: "https://los-simpsos-react-app.netlify.app/" //ustedes deben colocar aquí el link del enlace público de netlify
    },
    {
        title: "Marvel API",
        image: marvelProject,
        techs: [
            { name: "React", src: reactImage },
            { name: "React Router", src: reactRouterdomImage },
            { name: "Sass", src: sassImage },
            { name: "Semantic", src: semanticImage },
        ],
        description: "Application created with React JS, React-Router, Sass, and Semantic UI React to make a request to an external API of Marvel.",
        repository: "https://github.com/sandraosr25/marvel.git",
        website: "#!" //ustedes deben colocar aquí el link del enlace público de netlify
    },
    {
        title: "Dynamic Form",
        image: dynamicFormProject,
        techs: [
            { name: "React JS", src: reactImage },
            { name: "React Bootstrap", src: reactBootstrapImage },
        ],
        description: "Application of a landing page created with React JS and React Bootstrap to make a form with dynamic fields.",
        repository: "https://github.com/sandraosr25/dynamic-form.git",
        website: "https://dynamic-form-sandra-app.netlify.app/" //ustedes deben colocar aquí el link del enlace público de netlify
    },
    {
        title: "Fuel Station",
        image: gasolineraProject,
        techs: [
            { name: "Vite", src: viteImage },
            { name: "Chakra", src: chakraImage },
            { name: "React Router DOM", src: reactRouterdomImage },
        ],
        description: "Application created with Vite, using Chakra and React Router DOM, to handle and present a fuel-station information.",
        repository: "https://github.com/sandraosr25/gasolinera-react.git",
        website: "https://gasolinera-react-sandra.netlify.app/" //ustedes deben colocar aquí el link del enlace público de netlify
    },

    {
        title: "Crypto Conversor",
        image: criptoProject,
        techs: [
            { name: "Vite", src: viteImage },
            { name: "Styled Componentes", src: styledImage },
        ],
        description: "Application created with Vite and Styled Componentes where you can convert currencies to different cryptos.",
        repository: "https://github.com/sandraosr25/cripto-react.git",
        website: "https://crypto-conversor-sandra-673573.netlify.app/" //ustedes deben colocar aquí el link del enlace público de netlify
    },

    {
        title: "Appointments CRM",
        image: citasProject,
        techs: [
            { name: "Vite", src: viteImage },
            { name: "Tail CSS", src: styledImage },
        ],
        description: "Application created with Vite and Tail CSS for managing pets appointments.",
        repository: "https://github.com/sandraosr25/citas-mascotas.git",
        website: "https://6495a9f3e0bcfe3edce0e460--fascinating-jelly-00b095.netlify.app/" //ustedes deben colocar aquí el link del enlace público de netlify
    },

];