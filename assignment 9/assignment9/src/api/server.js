const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/router');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', router); // Prefix all routes with /api

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
