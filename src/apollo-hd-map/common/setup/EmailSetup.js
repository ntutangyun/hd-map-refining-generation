const gmailClient = require("../../api/Email/gmailClient");

// Initialize global email client
global.gmail = new gmailClient();
global.gmail.init();