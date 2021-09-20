import express from 'express';

// Create express server
const app = express();

// Create port
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server started on port ' + port);
}
);
