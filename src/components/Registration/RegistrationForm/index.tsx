import React, { useState } from "react";
import Input from "../../common/Input";

const RegistrationForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handler = () => {
    if (repeatPassword === password) {
      console.log({
        firstName,
        lastName,
        email,
        password,
        repeatPassword,
      });
    } else {
      console.log("Пароли не совпадают");
    }
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
  };
  return (
    <div>
      <Input
        value={firstName}
        setValue={setFirstName}
        placeholder="Введите имя"
        type="text"
        title="User First Name"
      />
      <Input
        value={lastName}
        setValue={setLastName}
        placeholder="Введите фамилию"
        type="text"
        title="User Last Name"
      />
      <Input
        value={email}
        setValue={setEmail}
        placeholder="Введите почту"
        type="email"
        title="User email"
      />
      <Input
        value={password}
        setValue={setPassword}
        placeholder="Введите пароль"
        type="password"
        title="User password"
      />
      <Input
        value={repeatPassword}
        setValue={setRepeatPassword}
        placeholder="Повторите пароль"
        type="password"
        title="User repeat password"
      />
      <button onClick={handler} type="submit">
        PUSH ME
      </button>
      <button onClick={clearForm} type="button">
        CLEAR FORM
      </button>
    </div>
  );
};

export default RegistrationForm;
