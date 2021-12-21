const express = require('express')
const app = express();
const config = require('./config');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler')


require('./config/mongoose')();
require('./config/express')(app);


app.use('/api', routes);
app.use(errorHandler);

app.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}`))

