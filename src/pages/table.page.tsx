import React, {useEffect, useState} from 'react';
import './home.page.scss';
import axios from 'axios';
import Modal from 'react-modal';

interface IProduct {
    id: string;
    product_name: string;
    price: string;
    discontinued: string;
    units: string;
}

function TablePage() {
    const [products, setProducts] = useState<IProduct[]>([]);

    const [productId, setId] = useState('');

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

    //DELETE FUNCTION

    function deleteProduct(id: string) {
        fetch(`http://localhost:3000/data/${id}`, {
            method: 'DELETE',
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp);
                getProduscts();
                setDeleteIsOpen(false);
            });
        });
    }

    //MODALS
    // STYLE
    const productModalStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '24px',
        },
    };

    // DELETE PRODUCT MODAL

    const [deleteModalIsOpen, setDeleteIsOpen] = React.useState(false);

    function openDeleteModal(id: string) {
        setDeleteIsOpen(true);
        axios
            .get(`http://localhost:3000/data/${id}`)
            .then(function () {
                setId(id);
            })
            .catch(function (error: string) {
                console.log(error);
            });
    }

    function closeDeleteModal() {
        setDeleteIsOpen(false);
    }
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
                            <button
                                className="deleteBtn"
                                onClick={() => openDeleteModal(product.id)}>
                                Remove
                            </button>
                        </td>
                        {/* DELETE MODAL */}

                        <Modal
                            ariaHideApp={false}
                            isOpen={deleteModalIsOpen}
                            onRequestClose={closeDeleteModal}
                            style={productModalStyle}>
                            <h2>Are you sure you want to delete?</h2>
                            <button onClick={() => deleteProduct(productId)}>Yes</button>
                            <button onClick={closeDeleteModal}>No</button>
                        </Modal>
                    </tr>
                ))}
            </tbody>
        </div>
    );
}

export default TablePage;
