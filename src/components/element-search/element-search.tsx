import React, { FC, useEffect, useRef, useState } from 'react';
import { CountryInfo, getCountryByName } from '../../api/apiService';
import elementSearch from '../../store/element-search.store';
import { observer } from 'mobx-react-lite';

import './element-search.css';
type TProps = { maxElCount: number; elementSearchKey: number };
const ElementSearch: FC<TProps> = observer(
  ({ maxElCount, elementSearchKey }) => {
    const [value, setValue] = useState<string>('');
    const [hintsCount, setHintsCount] = useState<number>(1);
    const [countryFlag, setCountryFlag] = useState<string>();

    useEffect(() => {
      getCountryByName(value).then((сountryInfo) =>
        elementSearch.changeElementList({
          сountryInfo,
          elementSearchKey,
        }),
      );
    }, [value]);
    return (
      <div className="element-search">
        <div style={{ display: 'flex' }}>
          <div style={{ position: 'relative' }}>
            <input
              value={value}
              placeholder={`max prompt = ${maxElCount}`}
              onChange={(e) => setValue(e.target.value)}
              className="element-search__input"></input>
            {countryFlag && (
              <img className="element-search__flag" src={countryFlag} alt="" />
            )}
          </div>
          <input
            value={hintsCount}
            autoComplete="off"
            type="number"
            min="0"
            max={maxElCount}
            onChange={(e) => {
              setHintsCount(e.target.valueAsNumber);
            }}
            className="element-search__hints-count"></input>
        </div>
        {elementSearch.elementsList[elementSearchKey] &&
        elementSearch.elementsList[elementSearchKey].length !== 0 &&
        hintsCount > 0 ? (
          <div className="element-search__drop-down">
            {elementSearch.elementsList[elementSearchKey] &&
              elementSearch.elementsList[elementSearchKey].map(
                (el: CountryInfo, index) => {
                  if (index < hintsCount)
                    return (
                      <div
                        key={el.name}
                        onClick={() => {
                          if (value) {
                            setValue(`${el.name} ${el.fullName}`);
                            setCountryFlag(el.flag);
                          }
                        }}
                        style={
                          index % 2 === 0
                            ? { backgroundColor: 'rgb(155 141 219 / 37%)' }
                            : {}
                        }
                        className="element-search__drop-down-elements">
                        <div className="element-search__drop-down-element">
                          {el.name}
                        </div>
                        <div className="element-search__drop-down-element">
                          {el.fullName}
                        </div>
                        <img src={el.flag} alt="" />
                      </div>
                    );
                },
              )}
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  },
);

export default ElementSearch;
