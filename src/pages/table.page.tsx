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
    const uniqueId: number = randomId();

    const [products, setProducts] = useState<IProduct[]>([]);

    const [productId, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [discontinued, setDiscontinued] = useState('');
    const [units, setUnits] = useState('');

    const [choice, setChoice] = useState('');

    // Random ID generate function
    function randomId() {
        return Math.floor(Math.random() * 100000);
    }
    useEffect(() => {
        getProduscts();
    }, []);

    //Render a list from a JSON file function
    function getProduscts() {
        fetch('http://localhost:3000/data').then((result) => {
            result.json().then((resp) => {
                setProducts(resp);
            });
        });
    }

    //DELETE FUNCTION

    function deleteProduct(id: string) {
        fetch(`http://localhost:3000/data/${id}`, {
            method: 'DELETE',
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp);
                setDeleteIsOpen(false);
            });
        });
    }

    //CLEAR VALUE FUNCTION

    function clearValue() {
        setId('');
        setName('');
        setPrice('');
        setChoice('');
        setDiscontinued('default');
        setUnits('');
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

    // ADD PRODUCT MODAL

    const [addModalIsOpen, setAddIsOpen] = React.useState(false);

    function openAddModal() {
        setAddIsOpen(true);
    }

    const handleAddSubmit = async () => {
        axios
            .post('http://localhost:3000/data/', {
                id: uniqueId,
                product_name: name,
                price: price,
                discontinued: discontinued,
                units: units,
            })
            .then(function () {
                closeAddModal();
            })
            .catch(function (error: string) {
                console.log(error);
            });
    };

    function closeAddModal() {
        setAddIsOpen(false);
        clearValue();
    }

    return (
        <div>
            <tbody className="tbody">
                <button className="addBtn" onClick={openAddModal}>
                    Add New
                </button>
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
                                onClick={() => {
                                    openDeleteModal(product.id);
                                }}>
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
                            <button
                                onClick={() => {
                                    deleteProduct(productId);
                                }}>
                                Yes
                            </button>
                            <button onClick={closeDeleteModal}>No</button>
                        </Modal>

                        {/* ADD MODAL */}
                        <Modal
                            ariaHideApp={false}
                            isOpen={addModalIsOpen}
                            onRequestClose={closeAddModal}
                            style={productModalStyle}>
                            <h2>Add new product</h2>
                            <form>
                                <input
                                    className="modalInput modalInputName"
                                    type="text"
                                    placeholder="Product name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    className="modalInput modalInputPrice"
                                    type="number"
                                    placeholder="Price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                                <select
                                    className="modalSelect"
                                    value={choice}
                                    defaultValue={choice}
                                    onChange={(e) => {
                                        setChoice(e.target.value);
                                        setDiscontinued(e.target.value);
                                    }}>
                                    <option value={'Not selected!'}>Is discontinued?</option>
                                    <option value={'true'}>true</option>
                                    <option value={'false'}>false</option>
                                </select>

                                <input
                                    className="modalInput modalInputUnits"
                                    type="number"
                                    placeholder="Units"
                                    value={units}
                                    onChange={(e) => {
                                        setUnits(e.target.value);
                                    }}
                                />
                            </form>
                            <button onClick={handleAddSubmit}>Submit</button>
                            <button onClick={closeAddModal}>Close</button>
                        </Modal>
                    </tr>
                ))}
            </tbody>
        </div>
    );
}

export default TablePage;
