import { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [Q1, setQ1] = useState(false);
  const [Q2, setQ2] = useState(false);
  const [Q3, setQ3] = useState(false);

  const handleQ1 = () => {
    Q1 ? setQ1(false) : setQ1(true);
  };
  const handleQ2 = () => {
    Q2 ? setQ2(false) : setQ2(true);
  };
  const handleQ3 = () => {
    Q3 ? setQ3(false) : setQ3(true);
  };

  return (
    <>
      <hr />
      <div className="faq-container">
        <div className="faq-header">
          <h2>FAQ</h2>
        </div>
        <div className="faq-topics">
          <button onClick={handleQ1}>How I pay for the service ?</button>
          {Q1 ? (
            <p>
              Not only are they quick and easy to use, but they offer a
              relatively high level of security and protection of your private
              data. If you're using a credit card, you don't actually pay for
              the goods or services until your credit card bill is due.
            </p>
          ) : null}
          <button onClick={handleQ2}>Is there any payment protection ?</button>
          {Q2 ? (
            <p>
              The Paycheck Protection Program provides small businesses with
              funds to pay up to 8 weeks of payroll costs including benefits.
              Funds can also be used to pay interest on mortgages, rent, and
              utilities. Fully Forgiven.
            </p>
          ) : null}
          <button onClick={handleQ3}>
            What the documents required for agreement ?
          </button>
          {Q3 ? (
            <p>
              Whether you are submitting an entertainment reimbursement (ENT),
              travel reimbursement (TR), or disbursement voucher (DV), you will
              need to send your supporting documentation to be scanned. The
              guide below will help you determine what receipts, invoices, or
              proofs of payment you need to submit to be reimbursed in a timely
              manner.
            </p>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default FAQ;
