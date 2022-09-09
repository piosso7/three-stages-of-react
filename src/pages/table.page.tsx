import React, {useEffect, useState} from 'react';
import './home.page.scss';

interface IProduct {
    id: number;
    product_name: string;
    price: string;
    discontinued: string;
    units: string;
}

function TablePage() {
    const [products, setProducts] = useState<IProduct[]>([]);

    //Render a list from a JSON file function
    function getProduscts() {
        fetch('http://localhost:3000/data').then((result) => {
            result.json().then((resp) => {
                setProducts(resp);
            });
        });
    }
    useEffect(() => {
        getProduscts();
    }, []);

    return (
        <div>
            <tbody className="tbody">
                <button className="addBtn">Add New</button>
                <tr className="descriptions">
                    <th className="pName">Product Name</th>
                    <th>Price</th>
                    <th>Discontinued</th>
                    <th>Units In Stock</th>
                    <th>Command</th>
                </tr>
                {products.map((product, i) => (
                    <tr className="product" key={i}>
                        <td>{product.product_name}</td>
                        <td>$ {product.price}</td>
                        <td>{product.discontinued + ''}</td>
                        <td>{product.units}</td>
                        <td>
                            <button className="editBtn">Edit</button>
                            <button className="deleteBtn">Remove</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </div>
    );
}

export default TablePage;
