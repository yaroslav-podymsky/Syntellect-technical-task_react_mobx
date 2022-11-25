import React, { useRef } from "react";
import "./button-mapper.css";
type TProps = {
	buttons: {
		title: string;
		callback: (el: any) => void;
		position: "right" | "left";
	}[];
};

function ButtonMapper({ buttons }: TProps) {
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<div className="button-mapper">
			<div className="button-mapper__buttons">
				{buttons.map((el) => {
					if (el.position === "left") {
						return (
							<button
								onClick={(e) => el.callback(inputRef)}
								className="button-mapper__button"
							>
								{el.title}
							</button>
						);
					}
				})}
			</div>
			<input
				autoComplete="off"
				id="input"
				placeholder="Text"
				ref={inputRef}
				className="button-mapper__input"
			></input>
			<div className="button-mapper__buttons">
				{buttons.map((el) => {
					if (el.position === "right") {
						return (
							<button
								onClick={(e) => el.callback(inputRef)}
								className="button-mapper__button"
							>
								{el.title}
							</button>
						);
					}
				})}
			</div>
		</div>
	);
}

export default ButtonMapper;
