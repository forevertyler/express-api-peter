var axios = require('axios')

var data = {
  title:'my title',
  content:'my content'
}

axios.post('http://localhost:3000/posts',data)
