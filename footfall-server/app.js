var express = require('express');
const cors = require('cors');

var app = express();
app.use(cors());
var counter = 0
var traffic = {}

app.post('/detect/:cameraId', (req, res) => {

  let cameraId = req.params.cameraId; 

  if (traffic.hasOwnProperty(cameraId)) {
    traffic[cameraId] += 1;
  } else {
    traffic[cameraId] = 1;
  }

  console.log(traffic)

  // for (const [key, value] of Object.entries(occupancy.BBoxes_xyxy)) {
  //     console.log(value)
  // }

  res.status(204).send();
});

app.get('/fetch', (req, res) => {
  console.log("Fetching")
  res.json(traffic);
});


app.post('/add_message', (req, res) => {
  console.log("Got")

  res.status(204).send();
});


app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
