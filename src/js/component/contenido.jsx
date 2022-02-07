import React from "react";

const Contenido = ({ lista, index, borrarElemento }) => {
	return (
		<>
			<div className="contenedor ">
				<div className="texto">
					<h1 className="">{lista}</h1>
					<hr />
				</div>

				<div className="botonCerrar">
					<div
						className="btn-close"
						aria-label="Close"
						onClick={() => borrarElemento(index)}></div>
				</div>
			</div>
		</>
	);
};
export default Contenido;
