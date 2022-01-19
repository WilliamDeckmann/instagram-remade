import { useParams, useNavigate } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";
export default function Invoice() {
  let navigate = useNavigate();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>{invoice.amount}</h2>
      <p>{invoice.name}: {invoice.number}</p>
      <p>Created: {invoice.due}</p>
      <button
        onClick={() => {
          deleteInvoice(invoice.number);
          navigate("/posts");
        }}
      >
        Delete
      </button>
    </main>
  );
}