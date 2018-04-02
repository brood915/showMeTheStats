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
        content =  
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Shirts #</th>
                        <th>Team</th>
                        <th>Pos</th>
                        
                    </tr>
                        {props.players.map((each,index) => {
                            const playerTeam = props.teams.filter(team => each.team_code == team.code);
                            const position = props.positions.filter(position => each.element_type == position.id);
                            return (<tr key={each.id.toString()}>
                                <td>{each.web_name}</td>
                                <td>{each.squad_number}</td>
                                <td>{playerTeam[0].short_name}</td>
                                <td>{position[0].singular_name_short}</td>
                            </tr>);
                        })}
                </tbody>
            </table>
        
        props.players.map(each => <li key={each.id}>{each['web_name']}</li>);
    }
            return (
			<div className = "epl-players">
				{content}				
			</div>		
        )
}

export default EPL_Players;