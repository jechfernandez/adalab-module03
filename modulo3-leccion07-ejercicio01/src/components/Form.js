import React, { useState } from 'react';

function Form() {
  const [form, setForm] =
    useState({
      name: '',
      description: '',
      language: ''
    });


  function handleChange(ev) {
    let formCopy = Object.assign({}, form);
    formCopy[ev.target.name] = ev.target.value;
    setForm(formCopy);
  }

  return (
    <div>
      <form onChange={handleChange}>
        <label>
          Nombre
    <input type="text" name="name" />
        </label>
        <label>
          Descripción
          <textarea name="description" />
        </label>
        <label> Idioma
          <select name="language">
            <option value="spanish">Español</option>
            <option value="english">Inglés</option>
            <option value="portuguese">Portugués</option>
          </select>
        </label>
      </form>
      <section>
        <h4>
          Previsualización
        </h4>
        <h2>
          {form.name}
        </h2>
        <p>
          {form.description}
        </p>
        <p>
          {form.language}
        </p>
      </section>
    </div>
  );
}

export default Form;