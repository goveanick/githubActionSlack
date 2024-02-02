const axios = require('axios')

const url = 'https://api.github.com/repos/goveanick/githubActionSlack/dispatches'
// const githubPAT = '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'
const githubPAT = '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'

const postData = {
    event_type: 'publish_blog'
}

// Axios POST request with authorization headers
axios.post(url, postData, {
    headers: {
      'Authorization': `token ${githubPAT}`,
      'Content-Type': 'application/json', // Adjust the content type based on your API requirements
    },
}).then(response => {
    console.log('Response:', response.data);
}).catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
});
  

console.log('hello there again')