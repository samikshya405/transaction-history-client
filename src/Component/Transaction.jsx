import React from "react";
import { Form, Table } from "react-bootstrap";

const Transaction = ({ transactionList }) => {
  return (
    <>
      <div className="d-flex gap-2">
        <Form.Check />
        <label htmlFor=""> Select All Transaction</label>
      </div>
      <Table striped >
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactionList.map((item) => {
            return (
              <tr key={item._id}>
                <td className="d-flex gap-2">
                  {" "}
                  <Form.Check /> <div>{item.date} </div>{" "}
                </td>
                <td>{item.description}</td>
                {item.type === "income" ? (
                  <td className="text-success">+${item.amount}</td>
                ) : (
                  <td className="text-danger">-${item.amount}</td>
                )}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Transaction;
