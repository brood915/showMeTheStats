import React from 'react';

const EPL_Players = (props) => {
    
    let content = '';

    if (props.loading) {
        content = <div>Loading...</div>
    }
    else if (props.errors) {
        content = <div>Something unexpected happened! Please try again later!</div>
    }

    else {
        content = props.players.map(each => <li key={each.id}>{each['web_name']}</li>);
    }
            return (
			<div className = "epl-players">
				{content}				
			</div>		
        )
}

export default EPL_Players;