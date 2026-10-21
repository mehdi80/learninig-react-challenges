import { Link, Outlet } from "react-router";

export function Products() {
  return (
    <div>
        <nav>
        <Link to="cars">Cars</Link>
        <Link to="bikes">Bikes</Link>
      </nav>
      <h1>Products Page</h1>
      <p>This is the products page of the application.</p>
      <Outlet />
    </div>
  );
}