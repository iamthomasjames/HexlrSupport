import { useEffect, useState } from "react";

import logo from "../../Assets/Images/logo.png";
import sign from "../../Assets/Images/sign1.png";
import "../../Form.css";
import React from "react";
import Pdf from "react-to-pdf";

const BillPage = () => {
  const [isGenerated, setIsGenerated] = useState(false);
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState();
  const [billname, setBillname] = useState();
  const [phonenum, setPhonenum] = useState();
  const [invoice, setInvoice] = useState();
  const [date, setDate] = useState();
  const [totalbill, setTotalBill] = useState();
  const [totalAmount, settotalAmount] = useState();
  const ref = React.createRef();
 

  const convertToIndian = (x) => {
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != "") lastThree = "," + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
  };

  const price_in_words = (price) => {
    var sglDigit = [
        "Zero",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
      ],
      dblDigit = [
        "Ten",
        "Eleven",
        "Twelve",
        "Thirteen",
        "Fourteen",
        "Fifteen",
        "Sixteen",
        "Seventeen",
        "Eighteen",
        "Nineteen",
      ],
      tensPlace = [
        "",
        "Ten",
        "Twenty",
        "Thirty",
        "Forty",
        "Fifty",
        "Sixty",
        "Seventy",
        "Eighty",
        "Ninety",
      ],
      handle_tens = function (dgt, prevDgt) {
        return 0 == dgt
          ? ""
          : " " + (1 == dgt ? dblDigit[prevDgt] : tensPlace[dgt]);
      },
      handle_utlc = function (dgt, nxtDgt, denom) {
        return (
          (0 != dgt && 1 != nxtDgt ? " " + sglDigit[dgt] : "") +
          (0 != nxtDgt || dgt > 0 ? " " + denom : "")
        );
      };

    var str = "",
      digitIdx = 0,
      digit = 0,
      nxtDigit = 0,
      words = [];
    if (((price += ""), isNaN(parseInt(price)))) str = "";
    else if (parseInt(price) > 0 && price.length <= 10) {
      for (digitIdx = price.length - 1; digitIdx >= 0; digitIdx--)
        switch (
          ((digit = price[digitIdx] - 0),
          (nxtDigit = digitIdx > 0 ? price[digitIdx - 1] - 0 : 0),
          price.length - digitIdx - 1)
        ) {
          case 0:
            words.push(handle_utlc(digit, nxtDigit, ""));
            break;
          case 1:
            words.push(handle_tens(digit, price[digitIdx + 1]));
            break;
          case 2:
            words.push(
              0 != digit
                ? " " +
                    sglDigit[digit] +
                    " Hundred" +
                    (0 != price[digitIdx + 1] && 0 != price[digitIdx + 2]
                      ? " and"
                      : "")
                : ""
            );
            break;
          case 3:
            words.push(handle_utlc(digit, nxtDigit, "Thousand"));
            break;
          case 4:
            words.push(handle_tens(digit, price[digitIdx + 1]));
            break;
          case 5:
            words.push(handle_utlc(digit, nxtDigit, "Lakh"));
            break;
          case 6:
            words.push(handle_tens(digit, price[digitIdx + 1]));
            break;
          case 7:
            words.push(handle_utlc(digit, nxtDigit, "Crore"));
            break;
          case 8:
            words.push(handle_tens(digit, price[digitIdx + 1]));
            break;
          case 9:
            words.push(
              0 != digit
                ? " " +
                    sglDigit[digit] +
                    " Hundred" +
                    (0 != price[digitIdx + 1] || 0 != price[digitIdx + 2]
                      ? " and"
                      : " Crore")
                : ""
            );
        }
      str = words.reverse().join("");
    } else str = "";
    return str;
  };

  const renderTable = (e) => {
    setTotal(e);
    let a = [];
    for (let i = 0; i < e; i++) {
      a.push({ id: i });
    }
    setRows(a);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let billtotal = [];
    let totalamount = 0;
    for (let i = 0; i < total; i++) {
      totalamount =
        totalamount + parseInt(document.getElementById("price" + i).value);
      billtotal.push({
        id: i + 1,
        name: document.getElementById("item" + i).value,
        amount: document.getElementById("price" + i).value,
      });
    }
    settotalAmount(totalamount);
    setTotalBill(billtotal);
    setIsGenerated(true);
  };

  return (
    <>
      {isGenerated ? (
        <>
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
          </Pdf>
          <div style={{ }} ref={ref}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "start",
                }}
              >
                <h1>HEXLR TECH</h1>
                <span>Phone Number: +919645803089</span>
                <span>Email: contact@hexlr.com</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "start",
                }}
              >
                <img
                  src={logo}
                  width="150px"
                  height="150px"
                  alt=""
                  style={{ paddingTop: "30px" }}
                />
              </div>
            </div>
            <div style={{ justifyContent: "center" }}>
              <h1>SERVICE BILL</h1>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingRight: "60px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "start",
                }}
              >
                <span style={{ fontWeight: "600" }}>Bill to:</span>
                <span style={{ fontWeight: "600" }}>{billname}</span>
                <span>Contact: {phonenum}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "start",
                }}
              >
                <span style={{ fontWeight: "600" }}>Invoice No: {invoice}</span>
                <span style={{ fontWeight: "600" }}>Date: {date}</span>
              </div>
            </div>
            <div style={{ marginTop: "30px", padding: "0px 75px 0px 40px" }}>
              <table>
                <tr>
                  <th>Sl No</th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                  <th align="right" style={{ textAlign: "right" }}>
                    Price/Unit
                  </th>
                </tr>
                {totalbill.map((item) => {
                  return (
                    <>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>1</td>
                        <td style={{ textAlign: "right" }}>
                          {"₹" + item.amount}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </table>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "30px",
                justifyContent: "space-between",
              }}
            >
              <div style={{ flex: 1 }}>
                <h3 style={{ backgroundColor: "grey" }}>
                  INVOICE AMOUNT IN WORDS
                </h3>
                <h4>{price_in_words(totalAmount)}</h4>
                <h3 style={{ backgroundColor: "grey" }}>
                  TERMS AND CONDITIONS
                </h3>
                <h4>Thank you for doing business with us</h4>
              </div>
              <div style={{ flex: 1 }}></div>
              <div style={{ flex: 1, paddingLeft: "100px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <div>
                    <span>Sub Total</span>
                    <h2>Total</h2>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      flexDirection: "column",
                    }}
                  >
                    <span>{convertToIndian(totalAmount)}</span>
                    <h2>{convertToIndian(totalAmount)}</h2>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span>For, HEXLR TECH</span>
                  <img src={sign} width="110px" height="110px" alt="" />
                  <span>Athorized Signatory</span>
                </div>
              </div>
            </div>
            <br />
            <hr />
          </div>
        </>
      ) : (
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <form action="/action_page.php" style={{ padding: "30px" }}>
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Bill name"
              onChange={(e) => {
                setBillname(e.target.value);
              }}
            />
            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Bill contact number"
              onChange={(e) => {
                setPhonenum(e.target.value);
              }}
            />
            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Invoice number (HR/001)"
              onChange={(e) => {
                setInvoice(e.target.value);
              }}
            />
            <input
              type="date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            <label for="lname">total works</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="total works"
              onChange={(e) => {
                renderTable(e.target.value);
              }}
            />
            {rows.map((item) => {
              return (
                <>
                  <label for="fname">First Name</label>
                  <input
                    type="text"
                    id={"item" + item.id}
                    name="firstname"
                    placeholder="item name"
                  />
                  <label for="lname">Last Name</label>
                  <input
                    type="text"
                    id={"price" + item.id}
                    name="lastname"
                    placeholder="price"
                  />
                </>
              );
            })}

            <input type="submit" value="Submit" onClick={onSubmit} />
          </form>
        </div>
      )}
    </>
  );
};

export default BillPage;
