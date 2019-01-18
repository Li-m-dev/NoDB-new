let watchList = [];

const getWatchList = (req, res) => {
  res.status(200).json(watchList);
}

const addToWatchList = (req, res) => {
  // console.log(req.body);
  watchList.push(req.body);
  res.status(200).json(watchList);
}

const updateWatchList = (req, res) => {
  console.log(req.params, req.body)
  watchList.forEach(
    el => el.id === Number(req.params.id) 
    ? Object.assign(el, req.body) 
    : null
  )
return res.status(200).json(watchList)
}

const deleteWatchList = (req, res) => {
  console.log(req.query)
  
  let id = req.query;
  // let id = req.params;

  let index = watchList.findIndex(el => el.id === id)
  watchList.splice(index, 1)
  res.status(200).json(watchList)
}
module.exports = {
  getWatchList,
  addToWatchList,
  updateWatchList,
  deleteWatchList

}