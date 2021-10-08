import React, { useState, useEffect } from 'react';
import { ItemList } from '../components/ItemList/ItemList';
import { getProducts } from '../helpers/getProducts';
import { Spinner } from 'react-bootstrap';
import './ItemListContainer.css'

export const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        getProducts()
            .then((res) => {
                setProducts(res)
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <hr/>
            <h2 className="greeting">{greeting}</h2>
            <div>
                <section className="container my-5">
                    <h2>Productos</h2>
                    <hr/>
                    {
                        loading
                            ? <div className="d-flex justify-content-center"><Spinner animation="border" role="status"></Spinner></div>
                            : <ItemList products={products}/>
                    }
                </section>
            </div>
        </div>
    )
}
