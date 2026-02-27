"use client"

import "./cadastro.css"


import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Link from "next/link";

const Input = () => {

  const [formData, setFormData] = useState({
    email: '',
    senha: '',
    logado: false
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonDados = JSON.stringify(formData, null, 2);

    localStorage.setItem('usuario', JSON.stringify(formData));
    alert("Cadastro bem-sucedido!");
    window.location.href = "/login";
  }

    return (
        <StyledWrapper>
            <div className="container-fluid row d-flex justify-content-center align-items-center ">
                <div className="col-12 col-lg-5 col-login ">
                    <div className="form-container">
                        <div className="newsletter-form-wrapper">
                            <form className="newsletter-form w-75" id="newsletterForm" action="#successMessage" onSubmit={handleSubmit}>
                                <h1>CADASTRO</h1>
                                <div className="input-group d-flex align-items-center justify-content-center flex-column">
                                    <div className="nebula-input w-100">
                                        <input required type="email" name="email" autoComplete="off" className="input" value={formData.email} onChange={handleChange} />
                                        <label className="user-label">Email Address</label>
                                        <svg className="email-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                    </div>
                                    <div className="nebula-input w-100">
                                        <input required type="password" name="senha" autoComplete="off" className="input" value={formData.senha} onChange={handleChange} />
                                        <label className="user-label" >Senha</label>
                                    </div>
                                    <button className="subscribe-button w-100 rounded" type="submit">Cadastrar</button>
                                    <p>Já tem uma conta? <a href="/Login" className="link">Entrar!</a></p>
                                </div>
                            </form>
                            <div className="success-message" id="successMessage">
                                <div className="checkmark-container">
                                    <svg viewBox="0 0 52 52">
                                        <circle className="checkmark-circle" cx={26} cy={26} r={25} fill="none" />
                                        <path className="checkmark-check" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                                    </svg>
                                </div>
                                <span className="success-title">LOGIN CONCLUIDO</span>
                                <p className="success-subtitle">Obrigado por mais um dia com a gente!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-bg"></div>
                <div className="col-6 col-image"></div>
                <div className="col-7 d-none d-lg-flex "></div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .nebula-input {
    position: relative;
    width: 250px;
    margin: 10px auto;
  }

  .nebula-input .input {
    width: 100%;
    padding: 15px;
    border: 2px solid #2a2a3a;
    background: #00000f;
    color: white;
    font-size: 16px;
    outline: none;
    border-radius: 8px;
    transition: all 0.4s ease-out;
  }

  .nebula-input .user-label {
    position: absolute;
    left: 15px;
    top: 15px;
    pointer-events: none;
    color: #6a6a8a;
    transition: all 0.4s ease-out;
    background: #00000f;
    padding: 0 5px;
  }

  .nebula-input .input:focus {
    border-color: #80dafd;
    box-shadow:
      0 5px 8px rgba(181, 106, 255, 0.3),
      0 10px 20px rgba(181, 106, 255, 0.2),
      0 15px 40px rgba(181, 106, 255, 0.15),
      0 20px 60px rgba(181, 106, 255, 0.1);
  }

  .nebula-input .input:focus ~ .user-label,
  .nebula-input .input:valid ~ .user-label {
    transform: translateY(-25px);
    font-size: 12px;
    color: #80dafd;
    left: 10px;
  }

 
  .nebula-particle {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    pointer-events: none;
    opacity: 0;
    top: 50%;
    left: 10px;
    filter: blur(0.8px);
    mix-blend-mode: screen;
    transition: opacity 0.3s ease;
  }

  .nebula-input .input:focus ~ .nebula-particle {
    animation: nebula-float 2s forwards ease-out;
  }

  @keyframes nebula-float {
    0% {
      transform: translate(0, -50%) scale(0.8);
      opacity: 0;
      background: #80dafd;
    }
    20% {
      opacity: 0.8;
    }
    100% {
      transform: translate(calc(var(--x) * 140px), calc(var(--y) * 35px))
        scale(1.1);
      opacity: 0;
      background: #6df2ff;
    }
  }
   /* ==================== General Styles ==================== */
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    padding: 20px;
    box-sizing: border-box;
    color: #fff;
  }

  .newsletter-form-wrapper {
    position: relative;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .newsletter-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    align-items: center;
    transition:
      opacity 0.5s ease-in-out,
      transform 0.5s ease-in-out;
    flex-wrap: nowrap;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    gap: 12px;
    width: 100%;
    align-items: center;
    flex-wrap: nowrap; /* always one line on desktop/tablet */
  }

  .nebula-input {
    position: relative;
    flex: 1 1 auto;
    min-width: 120px;
  }

  .nebula-input .input {
    width: 100%;
    padding: 12px 12px 12px 40px;
    border: 2px solid #2a2a3a;
    background: #00000f;
    color: white;
    font-size: 16px;
    outline: none;
    border-radius: 8px;
    transition: all 0.4s ease-out;
    box-sizing: border-box;
  }

  .nebula-input .user-label {
    position: absolute;
    left: 12px;
    top: 12px;
    pointer-events: none;
    color: #6a6a8a;
    transition: all 0.4s ease-out;
    background: #00000f;
    padding: 0 5px;
    z-index: 1;
  }

  .nebula-input .input:focus {
    border-color: #80dafd;
    box-shadow:
     0 5px 8px rgba(106, 245, 255, 0.3),
      0 10px 20px rgba(106, 233, 255, 0.2),
      0 15px 40px rgba(106, 213, 255, 0.15),
      0 20px 60px rgba(106, 176, 255, 0.1);
  }

  .nebula-input .input:focus ~ .user-label,
  .nebula-input .input:valid ~ .user-label {
    transform: translateY(-25px);
    font-size: 12px;
    color: #80dafd;
    left: 7px;
    background: #00000f;
  }

  .email-icon {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    fill: #6a6a8a;
    transition: fill 0.4s ease-out;
  }

  .nebula-input .input:focus ~ .email-icon {
    fill: #80dafd;
  }

  .nebula-particle {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    pointer-events: none;
    opacity: 0;
    top: 50%;
    left: 7px;
    filter: blur(0.8px);
    mix-blend-mode: screen;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  .nebula-input .input:focus ~ .nebula-particle {
    animation: nebula-float 2s forwards ease-out;
  }

  @keyframes nebula-float {
    0% {
      transform: translate(0, -50%) scale(0.8);
      opacity: 0;
      background: #80dafd;
    }
    20% {
      opacity: 0.8;
    }
    100% {
      transform: translate(calc(var(--x) * 140px), calc(var(--y) * 35px))
        scale(1.1);
      opacity: 0;
      background: #6df2ff;
    }
  }

  .subscribe-button {
    flex-shrink: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: bold;
    color: #80dafd;
    background: #00000f;
    border: 2px solid #80dafd;
    border-radius: 8px;
    cursor: pointer;
    outline: none;
    transition: all 0.4s ease-out;
  }

  .subscribe-button:hover,
  .subscribe-button:focus {
    background: #80dafd;
    color: #fff;
    border-color: #a2e0f8;
    box-shadow:
      0 5px 8px rgba(106, 245, 255, 0.3),
      0 10px 20px rgba(106, 233, 255, 0.2),
      0 15px 40px rgba(106, 213, 255, 0.15),
      0 20px 60px rgba(106, 176, 255, 0.1);
    transform: translateY(-3px);
  }

  .success-message {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    opacity: 0;
    transform: scale(0.8);
    transition:
      opacity 0.5s ease-in-out,
      transform 0.5s ease-in-out;
  }

  .success-message:target {
    display: flex;
    opacity: 1;
    transform: scale(1);
  }

  .newsletter-form-wrapper:has(.success-message:target) .newsletter-form {
    display: none;
  }

  .success-message .success-title {
    font-size: 24px;
    color: #80dafd;
    margin-bottom: 10px;
    animation: fade-in-up 0.5s ease-out 1.2s forwards;
    opacity: 0;
  }

  .success-message .success-subtitle {
    font-size: 16px;
    color: #80dafd;
    animation: fade-in-up 0.5s ease-out 1.4s forwards;
    opacity: 0;
  }

  .checkmark-container {
    width: 70px;
    height: 70px;
    margin-bottom: 20px;
    animation: success-bounce 1s ease-out;
  }

  .checkmark-container svg {
    width: 100%;
    height: 100%;
  }

  .checkmark-circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: #80dafd;
    fill: none;
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }

  .checkmark-check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    stroke: #80dafd;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
  }

  @keyframes stroke {
    100% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes success-bounce {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    60% {
      transform: scale(1.1);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* ==================== Responsive Styles ==================== */
  @media (max-width: 1024px) {
    /* tablets */
    .nebula-input .input {
      font-size: 15px;
      padding: 10px 10px 10px 35px;
    }
    .subscribe-button {
      font-size: 15px;
      padding: 10px 14px;
    }
    .input-group {
      gap: 10px;
    }
  }

  @media (max-width: 768px) {
    /* small tablets / large phones */
    .nebula-input .input {
      font-size: 14px;
      padding: 9px 9px 9px 32px;
    }
    .subscribe-button {
      font-size: 14px;
      padding: 9px 12px;
    }
    .input-group {
      gap: 8px;
    }
  }

  @media (max-width: 480px) {
    /* mobile */
    .input-group {
      flex-direction: column;
      gap: 6px;
    } /* stack vertically */
    .nebula-input .input {
      font-size: 13px;
      padding: 8px 8px 8px 28px;
    }
    .subscribe-button {
      font-size: 12px;
      padding: 6px 10px;
      width: 100%;
      min-width: unset;
    }
    .nebula-input .user-label {
      font-size: 12px;
      top: 8px;
    }
    .email-icon {
      width: 16px;
      height: 16px;
      left: 8px;
    }
    .form-container {
      padding: 10px;
    }
  }

  @media (max-width: 320px) {
    /* ultra-small screens, including 300px width */
    .input-group {
      flex-direction: column;
      gap: 4px;
      flex-wrap: wrap;
    }
    .nebula-input .input {
      font-size: 12px;
      padding: 6px 6px 6px 25px;
    }
    .subscribe-button {
      font-size: 11px;
      padding: 5px 8px;
      width: 100%;
      min-width: 0;
    }
    .nebula-input .user-label {
      font-size: 12px;
      top: 12px;
      left: 5px;
    }
    .email-icon {
      width: 14px;
      height: 14px;
      left: 5px;
    }
    .form-container {
      padding: 5px;
    }
  }`;

export default Input;
