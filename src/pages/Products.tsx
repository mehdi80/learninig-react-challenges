import { NavLink, Outlet } from "react-router";

export function Products() {
  return (
    <div>
        <nav>
            <NavLink to="cars">Cars</NavLink>
            <NavLink to="bikes">Bikes</NavLink>
        </nav>
        <h1>Products Page</h1>
        <p>This is the products page of the application.</p>
        <Outlet />
    </div>
  );
}