const addResetButton = document.getElementById("btnReset");

const btnSearch = document.getElementById('btnSearch');

const btnSubmit = document.getElementById('submitBtn');

const countries = [];

const temples = [];

const beaches = [];


// Add booking
function bookAdd(){

}


function resetForm() {
    
    document.getElementById('conditionInput').innerHTML='';
    
    
}

// Add listener to Reset button
addResetButton.addEventListener("click",resetForm);

function searchCondition() {

    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    

    fetch('travel_recommendation_api.json')
        .then(response => response.json())

        .then ( data => {
            // Check for each keyword
            if(input === 'beaches' || input === 'beach'){
                // get beach items
                beaches = data.beaches;
                
                //for loop
                beaches.forEach(element => {
                
                resultDiv.innerHTML += `<img src="/images/${element.imageUrl}" >`;
                resultDiv.innerHTML += `<h2>${element.name}</h2>`;
                resultDiv.innerHTML += `<p>Description: ${element.description}</p>`
                    
                });

            }
            else if(input === 'country' || input === 'countries'){
                // get countries

            }
            else if(input === 'temple' || input === 'temples'){
                // get temples
                temples = data.temples;

                resultDiv.innerHTML += `<img src="/images/${element.imageUrl}" >`;
                resultDiv.innerHTML += `<h2>${element.name}</h2>`;
                resultDiv.innerHTML += `<p>Description: ${element.description}</p>`
            }
        })
        .catch(error => {
            console.error('error:', error);
            resultDiv.innerHTML = 'An error occured while fetching data.';
        })

}

btnSearch.addEventListener('click', searchCondition);

function sumbitReport(){
    const name = document.getElementById('name').value;
    const details = document.getElementById("details").value;
    alert('Feedback Submited!')

}

btnSubmit.addEventListener('click', sumbitReport);
