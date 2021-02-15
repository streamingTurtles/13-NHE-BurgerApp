const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);