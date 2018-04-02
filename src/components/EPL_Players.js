import React from 'react';

const EPL_Players = (props) => {
            return (
			<div className = "epl-players">
				{props.players.map(each => <li key={each.id}>{each['web_name']}</li>)}				
			</div>		
        )
}

export default EPL_Players;