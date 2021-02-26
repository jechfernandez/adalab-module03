import React from "react";

const finalNumbers = [1, 4, 6, 8, 45, 89];
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberFilter: 0,
      checkFilter: false,
    };
    this.onChangeListener = this.onChangeListener.bind(this);
  }

  onChangeListener(ev) {
    console.log(ev.target.name, ev.target.value);
    const inputKey = ev.target.name;
    if (inputKey === "numberInput") {
      this.setState({
        numberFilter: ev.target.value,
      });
    } else if (inputKey === "checkbox") {
      this.setState({
        checkFilter: ev.target.checked,
      });
    }
  }
  render() {
    console.log(this.state);
    const newArray = finalNumbers
      .filter((eachNumber) => {
        console.log(
          eachNumber,
          this.state.checkFilter
        );
        if (this.state.checkFilter === true) {
          //filtro
          return eachNumber % 2 === 0;
        } else {
          // todos cumplen el criterio de filtrado
          return true;
        }
      })
      .filter((eachNumber) => {
        return eachNumber > parseInt(this.state.numberFilter);
      })
      .map((eachNumber) => <li>{eachNumber}</li>);
    return (
      <>
        <form>
          <label htmlFor="">Enter your number here: </label>
          <input
            name="numberInput"
            type="text"
            onChange={this.onChangeListener}
          />
          <label htmlFor="">Filter even numbers: </label>
          <input
            name="checkbox"
            type="checkbox"
            onChange={this.onChangeListener}
            id=""
          />
          <ul>{newArray}</ul>
        </form>
      </>
    );
  }
}
export default Form;