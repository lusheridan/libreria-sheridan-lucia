import React, { useState, useEffect } from 'react';
import { ItemList } from '../../components/ItemList/ItemList';
import { getProducts } from '../../helpers/getProducts';
import { Spinner } from 'react-bootstrap';
import './ItemListContainer.css'
import { useParams } from 'react-router';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        getProducts()
            .then((res) => {
                console.log(categoryId)
                if(categoryId){
                    setProducts(res.filter(products => products.category === categoryId))
                } else {   
                    setProducts(res)
                }
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div>
            <div>
                <section className="container my-5">
                    <h2>Productos</h2>
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
