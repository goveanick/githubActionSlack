const axios = require('axios')

const url = 'https://api.github.com/repos/goveanick/githubActionSlack/dispatches/'
// const url = 'https://smee.io/zwxaDxa8vn2xWolt'

const postData = {
    json: {
        event_type: 'publish_blog'
    },
    headers: {
        Authorization: 'token ' + githubPAT
    }
}

// Axios POST request with authorization headers
axios.post(url, postData).then(response => {
    console.log('Response:', response.data);
}).catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
});
  

console.log('hello there again')