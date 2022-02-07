import React from "react";
import { useEffect, useState } from "react";
import Contenido from "./contenido.jsx";

//include images into your bundle

//create your first component
const List = () => {
	const [lista, setLista] = useState([]);
	const [listas, setListas] = useState([]);
	console.log(listas);
	let total = listas.length;
	let cantidad = total > 0 ? `${total} item left` : "";
	const capturarTexto = (e) => setLista({ [e.target.name]: e.target.value });
	//const handleClick = (e) => console.log("click click");

	// const handleClick = (e) => {
	// 	setListas([...listas, lista]);
	// };

	const borrarElemento = (indice) => {
		const newTodos = [...listas];
		newTodos.splice(indice, 1);
		setListas(newTodos);
	};
	function agregarLista(e) {
		if (e.charCode == 13) {
			setListas([...listas, lista]);
		}
		// if (e.keyCode == 13) {
		// 	alert("Enter... (KeyDown, use keyCode)");
		// }
	}
	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr")
			.then((response) => response.json())
			.then((listas) => setListas(listas));
	}, []);

	// var map = new Map(Object.entries(data));
	// console.log(map);

	return (
		<>
			{" "}
			<div className="exterior">
				<div className="text-center titulo">todos</div>
				<div className="contenido">
					<div className="label">
						<input
							type="text"
							name="lista"
							onChange={capturarTexto}
							onKeyPress={agregarLista}
						/>
						<hr />
					</div>
					<div className="">
						{listas.map((value, index) => (
							//	<li key={index}> {value.label} </li>
							<Contenido
								key={index}
								lista={value.label}
								index={index}
								//borrarElemento={borrarElemento}
							/>
						))}
					</div>

					<div className="cantidad">{cantidad}</div>
				</div>
			</div>
		</>
	);
};

export default List;
