// The client makes a POST request to the server sending the user details.

const postData = async(url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}
export { postData };


//updateUI function -push data on browser
async function updateUI(e) {
    const request = await fetch('/all'); 
    try {
        const allData = await request.json();
        console.log(allData);
        document.querySelector('#daysmatterinfo').innerHTML = `${allData.place} is ${allData.daysDiff} away`; 
        document.querySelector('#tripDays').innerHTML = ` Stay in ${allData.place} for ${allData.tripDays}`; 
        document.querySelector('#weatherinfo').innerHTML = `Typical weather for then is: ${allData.weather}`; 
        document.getElementById('myp').src = allData.img;
    } catch (error) {
        console.log("UI data could not be updated", error);
    }
}
export { updateUI };