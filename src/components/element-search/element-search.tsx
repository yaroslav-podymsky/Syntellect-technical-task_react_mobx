import React, { useEffect, useRef, useState } from "react";
import { getCountryByName } from "../../api/apiService";
import "./element-search.css";
type TProps = {};
type IElementList = {
	flag: string;
	fullName: string;
	name: string;
};
function ElementSearch({}: TProps) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [elementList, setElementList] = useState<IElementList[]>([]);
	const [hintsCount, setHintsCount] = useState<number>(3);
	const [countryFlag, setCountryFlag] = useState<string>();

	function getElementList() {
		getCountryByName(inputRef.current?.value || "").then((res) =>
			setElementList(res),
		);
	}
	return (
		<div className="element-search">
			<div style={{ display: "flex" }}>
				<div style={{ position: "relative" }}>
					<input
						// placeholder="Text"
						ref={inputRef}
						onChange={getElementList}
						className="element-search__input"
					></input>
					{countryFlag && (
						<img className="element-search__flag" src={countryFlag} alt="" />
					)}
				</div>
				<input
					value={hintsCount}
					autoComplete="off"
					type="number"
					onChange={(e) => {
						setHintsCount(e.target.valueAsNumber);
					}}
					className="element-search__hints-count"
				></input>
			</div>
			{elementList.length !== 0 && hintsCount > 0 ? (
				<div className="element-search__drop-down">
					{elementList.map((el: IElementList, index) => {
						if (index < hintsCount)
							return (
								<div
									onClick={() => {
										if (inputRef.current?.value) {
											inputRef.current.value = `${el.name} ${el.fullName}`;
											setCountryFlag(el.flag);
										}
									}}
									style={
										index % 2 === 0 ? { backgroundColor: "rgb(155 141 219 / 37%)" } : {}
									}
									className="element-search__drop-down-elements"
								>
									<div className="element-search__drop-down-element">{el.name}</div>
									<div className="element-search__drop-down-element">{el.fullName}</div>
									<img src={el.flag} alt="" />
								</div>
							);
					})}
				</div>
			) : (
				<></>
			)}
		</div>
	);
}

export default ElementSearch;
