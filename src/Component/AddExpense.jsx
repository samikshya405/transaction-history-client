import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { addTransaction } from "../utilis/axioshelper";
import { CustomINput } from "./CustomInput";

const initialState = {
  type: "income",
  description: "",
  amount: "",
};
const inputs = [
  {
    name: "description",
    placeholder: "Salary....",
    required: true,
  },
  {
    name: "amount",
    placeholder: "$0.0",
    required: true,
  },
];
const AddExpense = ({getData}) => {
  const [formData, setformData] = useState(initialState);
  const [selection, setSelection] = useState(new Date());

  //handle change for date
  const handleChange = (userDate) => {
    setSelection(userDate);
    console.log(userDate.split(" "));
  };

  //handle chnage for form value
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value)
    setformData({ ...formData, [name]: value });
  };

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const year = selection.getFullYear();
    const month = (selection.getMonth() + 1).toString().padStart(2, "0");
    const day = selection.getDate().toString().padStart(2, "0");
    const formattedDate = `${day}/${month}/${year}`;

    const { data } = await addTransaction({ ...formData, date: formattedDate });
    console.log(data.status);
    getData()

    // console.log({ ...formData, date: formattedDate });
    setformData(initialState);
  };
  return (
    <div className="my-5 d-flex">
      <div>
        <DatePicker
          selected={selection}
          onChange={handleChange}
          showIcon
          toggleCalendarOnIconClick
        />
      </div>
      <Form className="d-flex" onSubmit={handleSubmit}>
        <div>
          <Form.Select
            aria-label="Default select example"
            value={formData.type}
            onChange={handleFormChange}
            name="type"
          >
            <option value="income">Income</option>
            <option value="expenses">expenses</option>
          </Form.Select>
        </div>
        {inputs.map((item, index) => {
          return (
            <CustomINput
              key={index}
              {...item}
              value={formData[item]}
              onChange={handleFormChange}
            />
          );
        })}

        <div>
          <Button type="submit">Add Amount</Button>
        </div>
      </Form>
    </div>
  );
};

export default AddExpense;
