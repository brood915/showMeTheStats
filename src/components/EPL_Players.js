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
                        <th>#</th>
                        <th>Name</th>
                        <th>Team</th>
                    </tr>
                        {props.players.map((each,index) => {
                            const playerTeam = props.teams.filter(team => each.team_code == team.code);
                            return (<tr key={each.id.toString()}>
                                <td>{index}</td>
                                <td>{each.web_name}</td>
                                <td>{playerTeam[0].short_name}</td>
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