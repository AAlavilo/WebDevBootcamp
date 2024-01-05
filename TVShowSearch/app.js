const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    //console.dir(form);
    console.log(form.elements.query.value)
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, { params: config });
    console.log(res.data);
    getImages(res.data);
    form.elements.query.value = "";
})

const getImages = (shows) => {
    for(result of shows) {
        if(result.show.image) {
            const img = document.createElement("img");
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}