const axios = require('axios');

let launches = [];


axios.get('https://api.spacexdata.com/v2/launches')
.then(response=> {
  // console.log('response: ', response);
  launches = response.data
  // console.log('launches: ', launches);
  
})

const getLaunches = (req, res) => {
  res.status(200).json(launches)
}


module.exports ={
  getLaunches
}