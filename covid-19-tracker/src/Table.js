import React from 'react'
import './Table.css';
import numeral from 'numeral';

function Table({theme, countries }) {
	return (
		<div className={`table ${theme==='dark' && "table--dark"}`}>
			{countries.map(({country, cases, countryInfo}) => {
				return (
					<tr>
						<div className="info__flag" style={{backgroundImage:`url(${countryInfo.flag})`}}></div>
						<td>{country}</td>
						<td><strong>{numeral(cases).format("0,0")}</strong></td>
					</tr>
				)
			})}
		</div>
	);
}

export default Table;