import React, { useState, useEffect } from 'react'
import CrearProducto from "./CrearProducto"
import ModificarProducto from "./ModificarProducto"
const Productos = () => {

    const [activeSection, setActiveSection] = useState("Crear")
    const adminSections = ["Crear", "Modificar"]

    const changeSection = (section) => {
        setActiveSection(section)
    }
    return (
        <div className="mw-100">
                <div className="row  m-0 w-100 admin-navbar-section-products" >
                    {adminSections.map(e => {
                        return (
                            <div className="col-6 d-flex justify-content-center align-items-center 
                                        "
                                onClick={() => changeSection(e)}
                            >
                                <p className="m-0">{e}</p>
                                {activeSection === e ? <span className="navbar-active" ></span> : null}
                            </div>
                        )
                    })}
                </div>
                <>
                    {activeSection === "Crear" ? <CrearProducto /> : null}
                    {activeSection === "Modificar" ? <ModificarProducto /> : null}
                </>

        </div>
    )
}


export default Productos
