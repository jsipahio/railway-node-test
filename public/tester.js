document.addEventListener("DOMContentLoaded", function() {
    
    const myForm = document.querySelector("#stockForm");
    const id = document.querySelector("#id");
    const msg = document.querySelector("#notifier");

    //const url = "https://guarded-sands-59956.herokuapp.com/http-tester.php";
    //const url = "http://www.randyconnolly.com/funwebdev/3rd/http-tester.php";
    const url = "/pokemon/" + id.value;   
    console.log(url);

    const pokeid = id.value;
    const name = {
        "english": document.querySelector('#englishName').value,
        "japanese": "",
        "chinese": "",
        "french": document.querySelector('#frenchName').value
    };
    const type = [document.querySelector('#type1').value, document.querySelector('#type2').value];
    const base = {
        "HP": document.querySelector('#hp').value,
        "Attack": document.querySelector('#attack').value,
        "Defense": document.querySelector('#defense').value,
        "Sp. Attack": document.querySelector('#spAttack').value,
        "Sp. Defense": document.querySelector('#spDefense').value,
        "Speed": document.querySelector('#speed').value
    }
    const newPokemon = {
        "id":pokeid,
        "name":name,
        "type":type,
        "base":base
    }

    document.querySelector("#btnInsert").addEventListener('click', postData );
    document.querySelector("#btnUpdate").addEventListener('click', putData );
    document.querySelector("#btnDelete").addEventListener('click', deleteData );
    
    // make a GET/PUT/POST/DELETE request using fetch

    async function  postData(e) {
        e.preventDefault();
        const data = await fetchData(url,'POST');
        msg.textContent = data.message;
    }

    async function putData(e) {
        e.preventDefault();
        const data = await fetchData(url,'PUT');
        msg.textContent = data.message;        
    }
    
    async function deleteData(e) {
        e.preventDefault();
        const data = await fetchData(url+'?symbol='+stockSym.value,'DELETE');
        msg.textContent = data.message; 
    }  

    async function fetchData(url, method) {
        try {
            let formData = new FormData(myForm);
            //const encData = new URLSearchParams();
            // for (let pair of formData) {
            //     console.log(pair[0], pair[1]);
            //     encData.append(pair[0], pair[1]);
            // }
            //console.log(encData);
            const options = {
                method: method,
                mode: 'cors',
                headers: {
                    'Content-Type':'application/json'
                },         
                body: JSON.stringify(newPokemon)           
            };
            console.log(JSON.stringify(newPokemon));
            const resp = await fetch(url, options);
            const data = await resp.json();    
            return data;
        }
        catch (err) {
            //alert('fetch error err=' + err);
            console.log('fetch error err=' + err);
        }
    }
});