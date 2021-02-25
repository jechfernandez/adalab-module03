import React, {useState} from 'react';

// class Form extends React.Component{
//   constructor(props){
//     super(props);
//     this.state ={
//       name: '',
//       description: '',
//       language: '',
//     };

//     this.handleName = this.handleName.bind(this);
//     this.handleDescription = this.handleDescription.bind(this);
//     this.handleLanguage = this.handleLanguage.bind(this);
//   }

//   handleName(ev){
//     this.setState({
//       name: ev.target.value
//     });
//   }

//   handleDescription(ev){
//     this.setState({
//       description: ev.target.value
//     });
//   }

//   handleLanguage(ev){
//     this.setState({
//       language: ev.target.value
//     });
//   }

//   render() {

//     return(
//       <div>
//         <form>
//          <label>
//            Nombre
//            <input type="text" name="name" onChange={this.handleName}/>
//          </label>
//          <label>
//            Descripción
//            <textarea name="description" onChange={this.handleDescription}/>
//          </label>
//          <label>
//            {' '}Idioma
//            <select name="language" onChange={this.handleLanguage} >
//              <option value="español">Español</option>
//              <option value="inglés">Inglés</option>
//              <option value="portugués">Portugués</option>
//            </select>
//          </label>
//        </form>
//        <section>
//          <h4>
//            Previsualización:
//          </h4>
//          <h2>
//            {this.name}
//          </h2>
//          <p>
//            {this.description}
//          </p>
//          <p>
//            {this.language}
//          </p>
//        </section>
//       </div>
//     )
//   }
// }
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
            <option value="español">Español</option>
            <option value="inglés">Inglés</option>
            <option value="portugués">Portugués</option>
          </select>
        </label>
      </form>
      <section>
        <h4>
          Previsualización:
        </h4>
        <h2> Nombre: 
          {form.name}
        </h2>
        <p> Descripción: 
          {form.description}
        </p>
        <p> Lenguaje: 
          {form.language}
        </p>
      </section>
    </div>
  );
}

export default Form;
