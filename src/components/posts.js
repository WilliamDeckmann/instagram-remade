import {
  NavLink,
  Outlet,
  useSearchParams,
  useLocation
} from "react-router-dom";
import Linkstuff from "../components/Linkstuff";
import { getInvoices } from "../data";

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default function Posts() {
  let invoices = getInvoices();
  let [searchParams] = useSearchParams();
  return (
    <div style={{ display: "flex" }}>
      <Linkstuff />
      <nav>
        {invoices
          .filter(invoice => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map(invoice => (
            <QueryNavLink
            key={invoice.number}
            style={({ isActive }) => {
              return {
                display: 'block',
                margin: '1rem 0',
                color: isActive ? 'red' : '',
              };
            }}
            to={`/posts/${invoice.number}`}
            >
            {invoice.name}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}