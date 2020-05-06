import React, { Component } from "react";
import Select from "react-select";

const options = [
  { value: "Автоматична КПП", label: "Автоматична КПП" },
  { value: "Механічна КПП", label: "Механічна КПП" },
];

class Form extends Component {
  state = {
    name: "",
    number: "",
    select: "",
    text: "",
  };

  handelSubmit = (e) => {
    const { name, number } = this.state;
    e.preventDefault();

    if (name.length > 1 && number.length === 10) {
      this.props.getUserInfo({ ...this.state });
    }
    this.reset();
  };

  handleChangeSelect = (elem) => {
    this.setState({ select: elem.value });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: "", number: "", select: "", text: "" });
  };

  render() {
    const { name, number, select, text } = this.state;
    return (
      <form onSubmit={this.handelSubmit}>
        <Select
          value={select.value}
          onChange={this.handleChangeSelect}
          placeholder="Виберіть Коробку передач"
          options={options}
        />
        <label>
          Ім’я <br />
          <input
            name="name"
            value={name}
            onChange={this.handleChange}
            type="text"
            placeholder="Ваше Ім'я"
          />
        </label>
        <br />

        <label>
          Ваш номер телефону <br />
          <input
            name="number"
            value={number}
            onChange={this.handleChange}
            type="number"
            min="0"
            placeholder="+38 ___ ___ __ __"
          />
        </label>
        <br />

        <label>
          Повідомлення <br />
          <input
            value={text}
            onChange={this.handleChange}
            name="text"
            placeholder="Ваше повідомлення (Не обов’язково)"
            type="text"
            minLength="20"
          />
        </label>
        <br />

        <button type="submit">Запис на курс</button>
      </form>
    );
  }
}

export default Form;
