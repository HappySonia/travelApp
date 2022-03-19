//import {} from './js/formHandler.js';
import { postData } from './js/formHandler.js'
import { updateUI } from './js/formHandler.js'

import './styles/style.scss'

// addEventlistener 
document.getElementById('save').addEventListener('click', performAction);

function performAction(e) {
    const city = document.getElementById('city').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    e.preventDefault();
    postData('/postData', {
        City: city,
        Start: startDate,
        End: endDate,

    }).then(() => {
        updateUI();
    });
};

export {
    postData,
    updateUI
}


//addEventlistener 
document.getElementById('remove').addEventListener('click', removeAction);

function removeAction(i) {
    document.querySelector('#daysmatterinfo').innerHTML = "";
    document.querySelector('#weatherinfo').innerHTML = "";
    document.querySelector('#tripDays').innerHTML = "";    
    document.getElementById('myp').src = "";
};