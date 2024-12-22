const axios = require('axios');
async function fetchData(){
    try{
        const respose = await axios.get('http://jsonplaceholder.typicode.com/posts');
        console.log('data fatched successfully:',response.data);

    }catch (error){
        console.error('error fetching data:',error);

    }
} 

fetchData();