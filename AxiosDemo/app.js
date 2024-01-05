//Here we use the CDN link provided by Axios
//But we could always just install it as a package by running "npm install axios" in the console
/*
axios.get("https://swapi.dev/api/people/1")     //the biggest advantage to using axios is that
.then(res => {                                  //it automatically parses the JSON and fills in the data field
    console.log("RESPONSE", res)                //So axios.get fetches the data and parses it at once
})
.catch((err) => {
    console.log("ERROR!",err);
})
*/
const getStarWarsPerson = async (id) => {         // Same as above but using async-await and template literals.
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`); 
    console.log("Response data", res.data);
};

getStarWarsPerson(5);
getStarWarsPerson(10);