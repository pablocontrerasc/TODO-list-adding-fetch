import React, { useEffect } from "react";

// const hoverHandler = (e) => {
// 	console.log("onMouseEnter");
// 	//e.target.style.display = "none";
// 	let elemento = document.getElementById("eliminar");
// 	elemento.style.display = "flex";
// 	console.log(elemento);
// };
// const outHandler = () => {
// 	console.log("onMouseLeave");
// 	let elemento = document.getElementById("eliminar");
// 	elemento.style.display = "none";
// };
// onMouseEnter={hoverHandler}
// onMouseLeave={outHandler}>

const Contenido = ({ lista, index, borrarElemento }) => {
	return (
		<>
			<div className="contenedor">
				<div className="texto">
					<h1 className="">{lista}</h1>

					<div className="botonCerrar">
						<div
							id="eliminar"
							className="btn-close"
							aria-label="Close"
							onClick={() => borrarElemento(index)}></div>
					</div>
				</div>
			</div>
			<hr />
		</>
	);
};
export default Contenido;
