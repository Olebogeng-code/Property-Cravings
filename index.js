
// The function below is for saving items for later to another webpage. The eventlister will listen for a click event of a save button action and save the item for later. We have used the local storage so that the infoamrtion is not lost when the webpage is closed.
// When an item is saved, an alert will display the updated count of items in the "Save for Later" folder.
document.addEventListener("DOMContentLoaded", function () {
    let saveButtons = document.querySelectorAll(".save-button");
    let  savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];

    saveButtons.forEach(button => {
        button.addEventListener("click", function () {
            let itemContent = button.parentElement.innerHTML;
            savedItems.push(itemContent);
            localStorage.setItem("savedItems", JSON.stringify(savedItems));

            alert(`Item saved. You have ${savedItems.length} items in your folder.`);
        });
    });
});




// The function below is for a user to be able to submit a comment about the Property Cravings website or anything they would like to comment on.
// When the user clicks the "Submit" button, the JavaScript code extracts the values from the form fields, constructs an HTML string for the comment, and appends it to the "comments" div on the webpage
document.addEventListener("DOMContentLoaded", function() {
    let submitButton = document.getElementById("submit-button");
    let commentsDiv = document.getElementById("comments");

    submitButton.addEventListener("click", function() {
        let comment = document.getElementById("comment").value;

        if (comment) {
            const commentText = `<div class="comment">
                                    
                                    <p>${comment}</p>
                                </div>`;
            commentsDiv.insertAdjacentHTML("beforeend", commentText);

            document.getElementById("comment").value = "";

        }
    });
});


// // The function below handles the "like" action. This function will be triggered when the user clicks the "like" button. It will update the "like" count as well.
// let likeCount = 0;

// function handleLike() {
//     likeCount++;
//     document.getElementById('like-count').textContent = likeCount;
    
// }



// let likeCount2 = 0;

// function handleLike() {
//     likeCount2++;
//     document.getElementById('like-count2').textContent = likeCount2;
    
    
// }

let likeCounts = {};

function handleLike(item) {
    if (!likeCounts[item]) {
        likeCounts[item] = 0;
    }

    likeCounts[item]++;
    document.getElementById(`like-count-${item}`).textContent = likeCounts[item];

    // You can also send the "like" data to your server here
    // For now, we'll just log it to the console
    console.log(`Liked ${item}. Total likes: ${likeCounts[item]}`);
}




// The code function below is for the form submission on the webpage. The function provides basic form validation and error handling for the contact form. 
// It checks if the name, email, subject, and message fields are filled out correctly before allowing the form to be submitted.
// If any field is invalid, an error message is displayed below the input field.

document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('contactForm');
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let subjectInput = document.getElementById('subject');
    let messageInput = document.getElementById('message');
    
    form.addEventListener('submit', function(event) {
        if (!isValidForm()) {
            event.preventDefault();
        }
        else {
            alert('Contact form submitted successfully!');
        }
    });
    
    function isValidForm() {
        let isValid = true;

        if (!nameInput.value.trim()) {
            showError(nameInput, 'Name is required');
            isValid = false;
        } else {
            clearError(nameInput);
        }

        if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
            showError(emailInput, 'Valid email is required');
            isValid = false;
        } else {
            clearError(emailInput);
        }

        if (!subjectInput.value.trim()) {
            showError(subjectInput, 'Subject is required');
            isValid = false;
        } else {
            clearError(subjectInput);
        }

        if (!messageInput.value.trim()) {
            showError(messageInput, 'Message is required');
            isValid = false;
        } else {
            clearError(messageInput);
        }

        return isValid;
    }
    
    function showError(input, errorMessage) {
        let errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.innerText = errorMessage;
        
        let parent = input.parentElement;
        parent.appendChild(errorElement);
    }
    
    function clearError(input) {
        let parent = input.parentElement;
        let errorElement = parent.querySelector('.error-message');
        if (errorElement) {
            parent.removeChild(errorElement);
        }
    }

    function isValidEmail(email) {
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});

// jQuery functionalities:


// Hiding and showing jQuery functions. The buttons are hiding and showing the first paragraph of the webpage.
$(document).ready(function(){

    $('#hidingBtn').on('click' , function(){
        $('.dream').fadeOut()
    })
     }); 
    
     $('#showingBtn').on('click' , function(){
        $('.dream').fadeOut()
    });
    
  

// Drop down menu

$(document).ready(function () {
    $('.menu-section-title').hover(
      function () {
        $(this).next('.menu-section').stop().slideDown();
      },
      function () {
        $(this).next('.menu-section').stop().slideUp();
      }
    );
  });


