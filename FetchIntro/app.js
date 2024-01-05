fetch("https://swapi.dev/api/people/1")                     //send a fetch request to the API and returns a promise
    .then((res) => {                                        //handle the response and if resolved
        console.log("RESOLVED", res);                       //return response as a JSON object
        return res.json();
    })
    .then((data) => {                                       //Print in the console what data 
        console.log(data);                                  //we got from the request
        return fetch("https://swapi.dev/api/people/2");     //Then return a new fetch
    })
    .then((res) => {
        console.log("SEOND REQUEST RESOLVED", res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {                                       //In the case the promise was not fulfilled
        console.log("ERROR!", err);                         //we log in the error we get.
    })

    const loadStarWarsPeople = async () => {                //Here the same thing as an async function
        try {                                               //we need to use "try - catch"
            const res = await fetch("https://swapi.dev/api/people/1");
            const data = await res.json();
            console.log(data);
            const res2 = await fetch("https://swapi.dev/api/people/2");
            const data2 = await res2.json();
            console.log(data2);
        } catch(err) {
            console.log("ERROR!", err);
        }
    };

    loadStarWarsPeople();