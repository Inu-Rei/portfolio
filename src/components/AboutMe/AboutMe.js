import React from "react";
import logoGithub from "../../svg/github.svg";
import logoLinkeind from "../../svg/linkedin.svg";
import logoInstagram from "../../svg/instagram.svg";
import Foto from "../../images/FOTO.jpg";
import "../../StyleSheet/AboutMe.css"; // ¡NO necesitamos importar estilos aquí!

const AboutMe = () => {
    const socialNetworks = [
        {
            name: "Github",
            link: "https://github.com/dashboard",
            logo: logoGithub,
        },
        {
            name: "Linkedind",
            link: "https://www.linkedin.com/in/ronald-fabian-ramos-sierra-5b5223258/",
            logo: logoLinkeind,
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/ronaldfabianramos/",
            logo: logoInstagram,
        },
    ];

    return (
        <div> {/* Agregamos un div aquí para envolver todo el contenido */}
            <div id="about-me"> {/* Utilizamos un div para reemplazar el componente <S.ContainerAboutMe> */}
                <div className="ContainerFlex"> {/* Utilizamos div para reemplazar el componente <S.ContainerFlex> */}
                    <div className="ContainerText"> {/* Utilizamos div para reemplazar el componente <S.ContainerText> */}
                        <h1 className="Title"> {/* Utilizamos h1 para reemplazar el componente <S.Title> */}
                            <p>👋🏼 Hola, Soy</p>
                            <p>Ronald Fabian Ramos Sierra</p>
                            <p>Front-end</p>
                        </h1>
                        <div className="DescriptionText"> {/* Utilizamos div para reemplazar el componente <S.DescriptionText> */}
                            Junior Front End.
                        </div>
                        <div className="ContainerIcons"> {/* Utilizamos div para reemplazar el componente <S.ContainerIcons> */}
                            {socialNetworks.map((network, index) => (
                                <a
                                    key={index}
                                    href={network.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={network.logo} alt={network.name} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="ContainerImage"> {/* Utilizamos div para reemplazar el componente <S.ContainerImage> */}
                        <img src={Foto} alt="Ronald Ramos - Front-end" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
