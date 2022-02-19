import React from "react";
import { useEffect, useState } from "react";
import Contenido from "./contenido.jsx";

//include images into your bundle

//create your first component
const List = () => {
	const [lista, setLista] = useState([]);
	const [listaTarea, setListaTarea] = useState([]);
	let total = listaTarea.length;
	let cantidad = total > 0 ? `${total} item left` : "";
	const capturarTexto = (e) =>
		setLista({ [e.target.name]: e.target.value, ["done"]: false });
	//const handleClick = (e) => console.log("click click");

	console.log(total, "total de elementos");

	useEffect(() => {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/pablocontrerasc"
		)
			.then((response) => response.json())
			.then((data) => setListaTarea(data))
			.catch((error) => console.log(error));
	}, []);

	if (total == undefined) {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/pablocontrerasc",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify([]),
			}
		)
			.then((response) => response.json())
			.catch((error) => console.log(error));
	}

	const borrarElemento = (indice) => {
		console.log([...listaTarea], "lista tarea anterior");
		let nuevaListaTarea = [...listaTarea];

		nuevaListaTarea.splice(indice, 1);
		setListaTarea(nuevaListaTarea);
		console.log(nuevaListaTarea, "nueva lista");

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/pablocontrerasc",
			{
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(nuevaListaTarea),
			}
		)
			.then((res) => res.json())
			.catch((error) => console.error("Error:", error))
			.then((response) => console.log("Success:", response));
	};

	function agregarLista(e) {
		if (e.charCode == 13) {
			fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/pablocontrerasc",
				{
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify([...listaTarea, lista]),
				}
			)
				.then((response) => response.json())
				.catch((error) => console.log(error));
			setListaTarea([...listaTarea, lista]);
			console.log(setListaTarea);
		}
	}

	return (
		<>
			{" "}
			<div className="exterior">
				<div className="text-center titulo">todos</div>
				<div className="contenido">
					<div className="label">
						<input
							type="text"
							name="label"
							onChange={capturarTexto}
							onKeyPress={agregarLista}
						/>
						<hr />
					</div>

					<div className="">
						{/* {total !== undefined ? (
							listaTarea.map((value, index) => (
								//	<li key={index}> {value.label} </li>
								<Contenido
									key={index}
									lista={value.label}
									index={index}
									borrarElemento={borrarElemento}
								/>
							))
						) : (
							<h1> No hay elementos</h1>
						)} */}

						{listaTarea.map((value, index) => (
							//	<li key={index}> {value.label} </li>
							<Contenido
								key={index}
								lista={value.label}
								index={index}
								borrarElemento={borrarElemento}
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
