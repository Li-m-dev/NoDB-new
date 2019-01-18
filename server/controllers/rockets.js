const axios = require('axios');

let rockets = [];


axios.get('https://api.spacexdata.com/v2/rockets')
.then(response=> {
  // console.log('response: ', response);
  rockets = response.data
  // console.log('rockets: ', rockets);
  
})

const getRockets = (req, res) => {
  res.status(200).json(rockets)
}


module.exports ={
  getRockets
}