import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getCategories, 
        setNewCategory, 
        removeCategory,
        editCategory 
    } from '../../store/categories'

export default function Categorias() {

    const dispatch = useDispatch()
    const token = useSelector(store => store.token)
    
    React.useEffect(() => {
        dispatch(getCategories())
            .then(catgs => catgs.payload)
    }, [dispatch])

    const [categoryName, setCategoryName] = React.useState("")
    let categories = useSelector(store => store.categories)

    const handlePut = (id) => {
        const data = { 
            id: id, 
            name: categoryName.target.value,
            token: token
        }
        dispatch(editCategory(data))
            .then(() => dispatch(getCategories()))
            .then(catgs => catgs.payload)
            .then(() => setCategoryName(""))
    }

    const handleRemove = (id) => {
        const dato = {
            id: id,
            token: token
        }
        dispatch(removeCategory(dato))
            .then(() => dispatch(getCategories()))
            .then(catgs => catgs.payload)
    }

    const handleAdd = () => {
        const dat = { 
            name: categoryName.target.value, 
            token: token}
        dispatch(setNewCategory(dat))
            .then(() => dispatch(getCategories()))
            .then(catgs => catgs.payload)
            .then(() => setCategoryName(""))
    }

    const mayus = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }


    return (
        <div className='categories-list'>
            <h3>Categorías:</h3>
            {!categories.length ? (<h4>No se encontraron categorías</h4>)
            :
            categories.map((category, i) => 
            <div key={i}>
                <h5 className='cat-title'>➔ {mayus(category.name)}</h5>
                <div className='category-block'>
                    <input placeholder="Nombre nuevo" onChange={data => setCategoryName(data)}/>
                    <button onClick={() => handlePut(category.id)} categoryname={categoryName} className='cat-btn'>Editar</button>
                    <button onClick={() => handleRemove(category.id)} className='cat-btn'>Eliminar</button>
                </div>
            </div>
            )}
            <br/>
            <br/>
            <br/>
            <br/>
            <h5>Nueva categoría:</h5>
            <input styles={{ fontSize: '25px' }} placeholder="Nombre de categoría" onChange={data => setCategoryName(data)}/>
            <button className='cat-btn' type='button' categoryname={categoryName} onClick={handleAdd}>Añadir</button>
        </div>
    )
}