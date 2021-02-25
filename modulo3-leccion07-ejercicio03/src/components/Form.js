import React, {useState} from 'react';

function Form () {
  const [form, setForm] = useState ({
    name: '',
    description: '',
    language: '',
  });
//   object.assign copia todas las propiedades enumerables de uno o más objetos fuente a un objeto destino. Devuelve el objeto destino. 
  function handleChange (ev) {
    let formCopy = Object.assign ({}, form);
    formCopy[ev.target.name] = ev.target.value;
    setForm (formCopy);
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
        <label>
          {' '}Idioma
          <select name="language">
            <option value="Español">Español</option>
            <option value="Inglés">Inglés</option>
            <option value="Portugués">Portugués</option>
          </select>
        </label>
      </form>
      <section>
        <h4>
          Previsualización:
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
