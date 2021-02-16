// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
    // UPDATE
    const changeEatenBtns = document.querySelectorAll('..change-eaten');
  
    // Set up the event listener for the create button
    if (changeEatenBtns) {
      changeEatenBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
          // Grabs the id of the element that goes by the name, "id"
          const id = e.target.getAttribute('data-id');
          const newEating = e.target.getAttribute('data-newEating');
  
          const newEatState = {
            eating: newEating,
          };
  
          
          fetch(`/api/burger/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            // make sure to serialize the JSON body
            body: JSON.stringify(newEatState),
          }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
              console.log(`changed devoured state to: ${newEating}`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  
    // CREATE
    const createCatBtn = document.getElementById('create-form');
  
    if (createCatBtn) {
      createCatBtn.addEventListener('submit', (e) => {
        e.preventDefault();
  
        // Grabs the value of the textarea that goes by the name, "quote"
        const newCat = {
          name: document.getElementById('ca').value.trim(),
          eating: document.getElementById('eating').checked,
        };
  
        // Send POST request to create a new quote
        fetch('/api/burger', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          // make sure to serialize the JSON body
          body: JSON.stringify(newCat),
        }).then(() => {
          // Empty the form
          document.getElementById('ca').value = '';
  
          // Reload the page so the user can see the new quote
          console.log('Make a new Burger to eat!');
          location.reload();
        });
      });
    }
  
    // DELETE
    const deleteCatBtns = document.querySelectorAll('.delete-burger');
  
    // Set up the event listeners for each delete button
    deleteCatBtns.forEach((button) => {
      button.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
  
        // Send the delete request
        fetch(`/api/burger/${id}`, {
          method: 'DELETE',
        }).then((res) => {
          console.log(res);
          console.log(`Deleted burger: ${id}`);
  
          // Reload the page
          location.reload();
        });
      });
    });
  });
  