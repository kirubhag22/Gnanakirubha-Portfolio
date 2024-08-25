function addRecommendation()
{
       // Get the input field and its value
    const inputName = document.getElementById('name');
    const inputField = document.getElementById('message');
    const recommendation = inputField.value.trim();

    // Check if the input is not empty
    if (recommendation)
     {
        // Check if the list with id 'recoA' already exists
        let recoList = document.getElementById('reco3');

         
        // Create a new list item
        const newRecommendationItem = document.createElement('li');
        newRecommendationItem.textContent = recommendation;
        newRecommendationItem.id='recoA';
        // Append the new item to the list
        recoList.appendChild(newRecommendationItem);
        
        showPopup(true);

        // Clear the input field
        inputField.value = '';
        inputName.value = '';
    } 
    else 
    {
        alert('Please enter a recommendation before adding.');
    }
}
function showPopup(show) {
    const popup = document.getElementById('popup');
    if (show) {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
}

function closePopup() {
    showPopup(false);
}