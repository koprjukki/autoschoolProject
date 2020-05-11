import React, { Component } from "react";
import Select from "react-select";
import { Input } from "./Input/Input";
import styles from "./Form.module.scss";

const options = [
  { value: "Відновлення навичків", label: "Відновлення навичків" },
  { value: "Навчання до категорії B", label: "Навчання до категорії B" },
];

class Form extends Component {
  state = {
    name: "",
    number: "",
    select: "",
    text: "",
  };

  handelSubmit = (e) => {
    const { select } = this.state;
    e.preventDefault();

    if (select === "") {
      return alert("Виберіть навичок!");
    }

    this.props.getUserInfo({ ...this.state });
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
    console.log("--------->", this.state);
    return (
      <form onSubmit={this.handelSubmit} className={styles.form}>
        <h2 className={styles.head}>Залишити заявку</h2>
        <Select
          value={select.value}
          onChange={this.handleChangeSelect}
          placeholder="Виберіть що ви хочете вивчать"
          options={options}
          className={styles.formSelect}
        />
        <Input
          placeholder="Ваше Ім'я"
          onChange={this.handleChange}
          name="name"
          value={name}
          isRequired={true}
          labelHeading="Ім’я"
        />
        <Input
          onChange={this.handleChange}
          name="number"
          value={number}
          mask="+38(999)-999-99-99"
          isRequired={true}
          placeholder="+38(050)-555-66-33"
          labelHeading="Ваш номер телефону"
        />
        <Input
          placeholder="Ваше повідомлення (Не обов’язково)"
          onChange={this.handleChange}
          name="text"
          value={text}
          isRequired={false}
          labelHeading="Повідомлення"
        />
        <button type="submit" onSubmit={this.handelSubmit}>
          Запис на курс
        </button>
      </form>
    );
  }
}

export default Form;
