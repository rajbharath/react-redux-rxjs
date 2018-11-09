const express = require('express');

const app = express();

app.use(express.static('public'));
app.listen(3400, () => console.log('Server Started!'));