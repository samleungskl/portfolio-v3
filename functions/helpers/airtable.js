require('dotenv').config();
const airTableAPI = process.env.REACT_APP_AIRTABLE_API_KEY;
const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
const Airtable = require('airtable');
const base = new Airtable({ apiKey: airTableAPI }).base(airTableBase);

module.exports ={ base };