import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

// Adjust the path to match your project structure

function App() {
  return (
    <>
      <Container>
        <div className="row">
          <div className="col-3">
            <div className="row medico">Medico Sales</div>
            <div className="row dashboard">
              <div className="hello d-flex">
                <img src="./public/element-3.png"></img>
                <div className="medicine">Dashboard</div>
              </div>
            </div>
            <div className="row dashboard">
              <div className="hello d-flex">
                <img src="./public/clipboard-tick.png"></img>
                <div className="medicine">LabTest</div>
              </div>
            </div>
            <div className="row dashboard">
              <div className="hello d-flex">
                <img src="./public/bag-tick-2.png"></img>
                <div className="medicine">Appointment</div>
              </div>
            </div>
            <div className="row dashboard">
              <div className="hello d-flex">
                <img src="./public/bag-tick-2.png"></img>
                <div className="medicine">Medicine Order</div>
              </div>
            </div>
            <div className="row dashboard">
              <div className="hello d-flex">
                <img src="./public/sms.png"></img>
                <div className="medicine">Message</div>
              </div>
            </div>
            <div className="row dashboard">
              <div className="hello d-flex">
                <img src="./public/empty-wallet.png"></img>
                <div className="medicine">Payment</div>
              </div>
            </div>
            <div className="row dashboard">
              <div className="hello d-flex">
                <img src="./public/setting-2.png"></img>
                <div className="medicine">Settings</div>
              </div>
            </div>
            <div className="row help">
              <div className="hello d-flex">
                <img src="./public/Question.png"></img>
                <div className="medicine">Help</div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="frame d-flex">
                <Form.Control size="lg" type="text" placeholder="Search" />
                <img className="frame-1" src="./public/Frame 3.png" />
              </div>
            </div>
            <div className="row">
              <h4 className="sales">Sales Information</h4>
            </div>
            <div className="row p-2">
              <div className="col-3">
                <h6>Customer</h6>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Enter Customer Name"
                />
              </div>
              <div className="col-3">
                <h6>Invoice Id</h6>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Enter Invoice Id"
                />
              </div>
              <div className="col-3">
                <h6>Start Date</h6>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Enter Start Date"
                />
              </div>
              <div className="col-3">
                <h6>End Date</h6>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Enter End Date"
                />
              </div>
            </div>
            <div>
              <Table>
                <thead>
                  <tr>
                    <th>
                      <img src="./public/minus-square.png"></img>
                    </th>
                    <th>Invoice Id</th>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Payable Amount</th>
                    <th>Paid Amount</th>
                    <th>Due</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  <tr>
                    <img src="./public/minus-square.png"></img>
                    <td className="text-color">#AHGA68</td>
                    <td className="grey-color">23/09/2022</td>
                    <td className="grey-color">Jacob Marcus</td>
                    <td className="grey-color">$100</td>
                    <td className="grey-color">$000</td>
                    <td className="grey-color">$000</td>
                  </tr>
                  <tr>
                    <img src="./public/minus-square.png"></img>
                    <td className="text-color">#AHGA68</td>
                    <td className="grey-color">23/09/2022</td>
                    <td className="grey-color">Jacob Marcus</td>
                    <td className="grey-color">$100</td>
                    <td className="grey-color">$000</td>
                    <td className="grey-color">$000</td>
                  </tr>
                  <tr>
                    <img src="./public/minus-square.png"></img>
                    <td className="text-color">#AHGA68</td>
                    <td className="grey-color">23/09/2022</td>
                    <td className="grey-color">Jacob Marcus</td>
                    <td className="grey-color">$100</td>
                    <td className="grey-color">$000</td>
                    <td className="grey-color">$000</td>
                  </tr>
                  <tr>
                    <img src="./public/minus-square.png"></img>
                    <td className="text-color">#AHGA68</td>
                    <td className="grey-color">23/09/2022</td>
                    <td className="grey-color">Jacob Marcus</td>
                    <td className="grey-color">$100</td>
                    <td className="grey-color">$000</td>
                    <td className="grey-color">$000</td>
                  </tr>
                  <tr>
                    <img src="./public/minus-square.png"></img>
                    <td className="text-color">#AHGA68</td>
                    <td className="grey-color">23/09/2022</td>
                    <td className="grey-color">Jacob Marcus</td>
                    <td className="grey-color">$100</td>
                    <td className="grey-color">$000</td>
                    <td className="grey-color">$000</td>
                  </tr>
                  <tr>
                    <img src="./public/minus-square.png"></img>
                    <td className="text-color">#AHGA68</td>
                    <td className="grey-color">23/09/2022</td>
                    <td className="grey-color">Jacob Marcus</td>
                    <td className="grey-color">$100</td>
                    <td className="grey-color">$000</td>
                    <td className="grey-color">$000</td>
                  </tr>
                  <tr>
                    <img src="./public/minus-square.png"></img>
                    <td className="text-color">#AHGA68</td>
                    <td className="grey-color">23/09/2022</td>
                    <td className="grey-color">Jacob Marcus</td>
                    <td className="grey-color">$100</td>
                    <td className="grey-color">$000</td>
                    <td className="grey-color">$000</td>
                  </tr>
                  <tr>
                    <img src="./public/minus-square.png"></img>
                    <td className="text-color">#AHGA68</td>
                    <td className="grey-color">23/09/2022</td>
                    <td className="grey-color">Jacob Marcus</td>
                    <td className="grey-color">$100</td>
                    <td className="grey-color">$000</td>
                    <td className="grey-color">$000</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
