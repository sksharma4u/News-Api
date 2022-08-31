//let axios = require('axios')

function test() {
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=c648b1c626944ec3a1ec30fd6b886ea3')
        .then((response) => {

            if (response.ok) { //it will check that is there any data recieve from Api or not
                console.log(response) //This data will be in json format
                return response.json() //Now converted in the form of object and return it
            } else {
                console.log(err)
            }
        })
        .then((data) => { //having data that will be returned in the form object
            console.log(data.articles);
            let tabledata = "";
            data.articles.map((val) => {
                tabledata += `
                <tr>
                <td>${val.author}</td>
                    <td>${val.title}</td>
                    <td>${val.description}</td>
                    <td id = "hii"><img style = "width : 200px; height:250px" , src = "${val.urlToImage}"/></td>
                    
                </tr>`;
            })
            document.getElementById("mytable").innerHTML = tabledata;
            // mynews(data.articles);
        })
}

test();