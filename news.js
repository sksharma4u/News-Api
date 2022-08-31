//let axios = require('axios')

function test() {
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=c648b1c626944ec3a1ec30fd6b886ea3')
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                console.log(err)
            }
        })
        .then((data) => {
            console.log(data.articles);
            mynews(data.articles);
        })
}

function mynews(data) {
    const ans = data;
    const mydata = document.getElementById('mynews');
    for (let i = 0; i < data.length; i++) {

        const ele1 = document.createElement('h4');
        ele1.innerText = `Author of the news : ${data[i].author} , Content : ${data[i].description}`;
        mydata.append(ele1);
    }
    // mydata.innerHTML = JSON.stringify(ans);
}

test();