import { useParams } from "react-router";

export function Product() {
    const { pId } = useParams();
    return (
        <div>
            <h1>Product: {pId}</h1>
            <h1>Product Page</h1>
            <p>This is the product page of the application.</p>
        </div>
    );
}