const express = require('express');
const bodyParser = require('body-parser');

const TranslateRoute = require("./src/route/translate.route");
const { GetIPAddress } = require("./src/utils/ip.util");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', TranslateRoute);

app.use((_, res) => res.status(404).json(
	{
		success: false,
		status_code: 404,
		message: 'Route Not Found',
		data: null
	}
));

const host = GetIPAddress();
const port = 3000;

app.listen(port, '0.0.0.0', () => {
	console.log(`Translation API is running at http://${host}:${port}`);
});