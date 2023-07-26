import React, { useState, useRef } from "react";
import * as S from "./Contact.styles";
import emailjs from "@emailjs/browser";
import styled from 'styled-components';


const Contact = () => {
    const [contactDates, setContactDates] = useState({
        name: "",
        email: "",
        message: "",
        checkedTerms: false,
    });
    const [emptyInputs, setEmptyInputs] = useState(false);
    const [successSendForm, setsuccessSendForm] = useState(false);
    const [errorSendForm, setErrorSendForm] = useState(false);

    const form = useRef();

    const onSubmit = (e) => {
        //evitar el recargo de la página
        e.preventDefault();

        //validar formulario
        if (contactDates.name === "" ||
            contactDates.email === "" ||
            contactDates.message === "" ||
            contactDates.checkedTerms === false) {
            setEmptyInputs(true);
        }
        else {
            emailjs.sendForm(
                'service_xk6p1m7',//AQUí va su ID DE SERVICIO EMAILJS HOTMAIL
                'template_js3c1vj',//AQUÍ VA EL TEMPLATE ID
                    //gmail
                form.current,
                'PJyNJlXp2XB3eSQxt'//AQUÍ VA LA PUBLIC KEY
            ).then(
                (result) => {
                    setsuccessSendForm(true);
                },
                (error) => {
                    setErrorSendForm(true);
                }
            );
        }

    };
    return (
        <S.ContainerContact id="contact">
            <S.Title>👋🏽 Contact me</S.Title>
            <S.ContainerForm>
                {successSendForm ? (
                    <S.SuccessMessage>
                    La forma fue enviada exitosamente.</S.SuccessMessage>
                ) : (
                    <S.Form onSubmit={onSubmit} ref={form}>
                        <S.InputForm
                            placeholder="Escribe tu nombre"
                            type="text"
                            name="user_name"
                            onChange={(e) =>
                                setContactDates({ ...contactDates, name: e.target.value })
                            }
                            value={contactDates.name}
                        />
                        <S.InputForm
                            placeholder="Correo"
                            type="email"
                            name="user_email"
                            onChange={(e) =>
                                setContactDates({ ...contactDates, email: e.target.value })
                            }
                            value={contactDates.email}
                        />
                        <S.TextArea
                            placeholder="Escribe tu mensaje"
                            name="user_message"
                            onChange={(e) =>
                                setContactDates({ ...contactDates, message: e.target.value })
                            }
                            value={contactDates.message}
                        />
                        <S.ContainerConditions>
                            <input
                                type="checkbox"
                                onChange={(e) =>
                                    setContactDates({
                                        ...contactDates,
                                        checkedTerms: e.target.checked,
                                    })
                                }
                            />
                            <span>Aceptar los términos y condiciones.</span>
                        </S.ContainerConditions>
                        <S.Button type="submit">Enviar.</S.Button>
                    </S.Form>
                )}
                {emptyInputs && (
                    <p>Debes completar todos los campos e aceptar los términos</p>
                )}
                {errorSendForm && (
                    <S.TextError>Hubo un error, inténtalo más tarde</S.TextError>
                )}

            </S.ContainerForm>
        </S.ContainerContact>
    );

};


export default Contact;