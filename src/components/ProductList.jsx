import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProductos } from "../store/productos";

import ProductBlock from "./ProductBlock";
import Pagination from "./Pagination";

export default function ProductList() {
    const dispatch = useDispatch();
    let productos = useSelector((state) => state.productos);
    let item = useSelector((state) => state.item);

    const [currentPage, setCurrentPage] = React.useState(1);
    const [productosPorPagina] = React.useState(12);

    const shuffle = (arr) => {
        let currentIndex = arr.length,
            randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [arr[currentIndex], arr[randomIndex]] = [
                arr[randomIndex],
                arr[currentIndex],
            ];
        }
        return arr;
    };

  let indexOfLastItem = currentPage * productosPorPagina;
  let indexOfFirstItem = indexOfLastItem - productosPorPagina;
  if (indexOfFirstItem >= productos.length) indexOfFirstItem = 0;
  let currentProducts = productos.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber, e) => {
        e.preventDefault();
        setCurrentPage(pageNumber);
    };

    React.useEffect(() => {
        axios
            .get(`/api/products?item=${item}`)
            .then((res) => res.data)
            .then((data) => {
                dispatch(setProductos(shuffle(data)));
            });
    }, [item, dispatch]);

    return (
        <div className="productList w-100">
            {!item ? (
                currentProducts.length ? (
                    <>
                        {currentProducts.map((producto, i) => {
                            return <ProductBlock key={i} producto={producto} />;
                        })}
                        <Pagination
                            productosPorPagina={productosPorPagina}
                            productosTotales={productos.length}
                            paginate={paginate}
                        />
                    </>
                ) : (
                    <h3 className="no-product d-flex justify-content-center align-items-center w-100">
                        No se encontró ningún producto.
                    </h3>
                )
            ) : currentProducts.length ? (
                <>
                    {currentProducts.map((producto, i) => {
                        return <ProductBlock key={i} producto={producto} />;
                    })}
                    <Pagination
                        productosPorPagina={productosPorPagina}
                        productosTotales={productos.length}
                        paginate={paginate}
                    />
                </>
            ) : (
                <h3 className="no-product d-flex justify-content-center align-items-center w-100">
                    "No se encontró ningún producto."
                </h3>
            )}
        </div>
    );
}
//   React.useEffect(() => {
//     axios
//       .get(`/api/products?item=${item}`)
//       .then((res) => res.data)
//       .then((data) => {
//         dispatch(setProductos(data));
//       });
//   }, [dispatch, item]);

//   return (
//     <div className="productList w-100">
//       {!item ? (
//         productos.length ? (
//           productos.map((producto, i) => {
//             return <ProductBlock key={i} producto={producto} />;
//           })
//         ) : (
//           <h3 className="no-product d-flex justify-content-center align-items-center w-100">
//             "No se encontró ningún producto."
//           </h3>
//         )
//       ) : (
//         productos.map((producto, i) => {
//           return <ProductBlock key={i} producto={producto} />;
//         })
//       )}
//     </div>
//   );
// }
