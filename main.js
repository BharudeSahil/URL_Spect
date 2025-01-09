// Import the necessary modules
const readline = require('readline');

// Create a list of blocked URLs
const blockedUrls = [
  'http://example.com',
  'http://blocked.com',
  'http://malicious.com',
];

// Function to validate a URL
function isValidUrl(url) {
  try {
    new URL(url); // Attempt to construct a URL object
    return true;
  } catch (err) {
    return false;
  }
}

// Function to check if a URL is blocked
function isBlockedUrl(url) {
  return blockedUrls.includes(url);
}

// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt user for a URL
rl.question('Enter a URL to validate: ', (inputUrl) => {
  // Analyze and validate the URL
  if (!isValidUrl(inputUrl)) {
    console.error('Error: The URL is not valid.');
  } else if (isBlockedUrl(inputUrl)) {
    console.warn('Warning: The URL is blocked.');
  } else {
    console.log('Success: The URL is valid and accessible.');
  }

  // Close the input stream
  rl.close();
});
