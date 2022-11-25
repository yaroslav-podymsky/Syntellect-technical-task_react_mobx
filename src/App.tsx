import React from "react";
import "./App.css";
import ButtonMapper from "./components/button-mapper/button-mapper";
import ElementSearch from "./components/element-search/element-search";

function App() {
	return (
		<div className="app">
			<ButtonMapper
				buttons={[
					{
						title: "clear",
						callback: (el: any) => {
							el.current.value = null;
						},
						position: "right",
					},
					{
						title: "change text",
						callback: (el: any) => {
							el.current.value = "Hello world!";
						},
						position: "right",
					},
				]}
			/>
			<ButtonMapper
				buttons={[
					{
						title: "alert number",
						callback: (el: any) => {
							if (el.current.value)
								if (!isNaN(Number(el.current.value))) {
									alert(el.current.value);
								} else {
									console.log("Not a Number!");
								}
						},
						position: "left",
					},
					{
						title: "alert",
						callback: (el: any) => {
							alert(el.current.value);
						},
						position: "right",
					},
				]}
			/>
			<div className="app__element-search-block">
				<ElementSearch maxElCount={3} />
				<ElementSearch maxElCount={10} />
			</div>
		</div>
	);
}

export default App;
