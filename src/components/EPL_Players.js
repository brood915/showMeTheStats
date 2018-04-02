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
                        <th>Goals</th>
                        <th>Assists</th>
                        <th>Own Goals</th>
                        <th>Goals/hr</th>
                        <th>Assists/hr</th>
                        <th>G+A/hr</th>
                        <th>Minutes Played</th>
                    </tr>
                        {props.players.map((each,index) => {
                            const hrs = each.minutes/60;
                            const goals_per_hr = (((each.goals_scored/hrs) * 100)/100).toFixed(2);
                            const assists_per_hr = (each.assists/hrs).toFixed(2);
                            const goals_and_assists_per_hr = ((each.assists + each.goals_scored)/hrs).toFixed(2);
                            const playerTeam = props.teams.filter(team => each.team_code === team.code);
                            const position = props.positions.filter(position => each.element_type === position.id);

                            return (<tr key={each.id.toString()}>
                                <td className = "players_table_box">{each.web_name}</td>
                                <td className = "players_table_box">{each.squad_number}</td>
                                <td className = "players_table_box">{playerTeam[0].short_name}</td>
                                <td className = "players_table_box">{position[0].singular_name_short}</td>
                                <td className = "players_table_box">{each.goals_scored}</td>
                                <td className = "players_table_box">{each.assists}</td>
                                <td className = "players_table_box">{each.own_goals}</td>
                                <td className = "players_table_box">{goals_per_hr === "NaN" ? "0.00" : goals_per_hr}</td>
                                <td className = "players_table_box">{assists_per_hr === "NaN" ? "0.00" : assists_per_hr}</td>
                                <td className = "players_table_box">{goals_and_assists_per_hr === "NaN" ? "0.00" : goals_and_assists_per_hr}</td>
                                <td className = "players_table_box">{each.minutes}</td>
                                <td className = "players_table_box"></td>
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