'use client'
import React from 'react'
import { useState } from 'react';

const FormRegisterComponent = () => {

  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    ciudad: '',
    modalidadSkate: '',
    email: '',
    tiempoActividad: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar o procesar los datos del formulario
    console.log(formData);
  };

  return (
  <section id="section-registrar" className="h-screen flex">

    <form onSubmit={handleSubmit} className='mb-6'>
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Apodo:
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Ciudad:
        <input
          type="text"
          name="ciudad"
          value={formData.ciudad}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Modalidad de Skate:
        <input
          type="text"
          name="modalidadSkate"
          value={formData.modalidadSkate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Tiempo en Actividad:
        <input
          type="text"
          name="tiempoActividad"
          value={formData.tiempoActividad}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
    </section>

  );
};


export default FormRegisterComponent