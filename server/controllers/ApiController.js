const axios = require('axios');

//controllers dealing with external APIs

exports.getPlayers = (req, res) => {
    axios.get('https://fantasy.premierleague.com/drf/bootstrap-static')
    .then((resp) => res.json(resp.data.elements));
}