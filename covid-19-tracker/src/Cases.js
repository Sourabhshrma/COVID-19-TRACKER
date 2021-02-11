import React from 'react'

import './Cases.css'

function Cases({ title, cases, isRed, active, theme, total, ...props}) {
	return (
		<div className={`infoBox 
			${active && "infoBox--selected"}
			${isRed && "infoBox--red"}
			${(theme==='dark') && "infoBox--dark"}
			`} 
			onClick={props.onClick}>
			<div>
				 <div  className={`infoBox__title' ${theme==='dark' && "infoBox__title--dark"}`} >
				 	 {title}
				 </div>
				 <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}
				 ${theme==='dark' && "infoBox__cases--dark"}`}>{cases}</h2>
				 <div className={`infoBox__total ${theme==='dark' && "infoBox__title--dark"}`}>
				 	{total} Total
				 </div>
			</div>
		</div>
	)
}

export default Cases;