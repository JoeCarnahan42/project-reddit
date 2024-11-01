
// create variables that hold existing element data //
// create a variable that has string info ("posted by:") //
// create event listener that listens for clicks to add posts //
// Make both text entries required for submission //


// Phase Two: Comments //
// Make posts into clickable buttons that open comment posting interface //
// Create ability to remove comments //
// More..?? //


var postBtn = document.getElementById('post-btn')
var postSection = document.getElementById('post-section')
var postNameInput = document.getElementById('name-input')
var postInput = document.getElementById('post-input')
var removeBtn = document.getElementsByClassName('remove')[0]
var commentsBtn = document.getElementsByClassName('comments')[0]
var postList = document.getElementById('post-list')


postList.addEventListener('click', function(e) {
  if (e.target.classList.contains('remove')) {
    e.target.closest('.list-group-item').remove()
  } else if (e.target.classList.contains('comments')) {
    
  }
})





// Handles posting //
postBtn.addEventListener('click', function () {
  if (!postNameInput.value || !postInput.value || postNameInput.value === " " || postInput.value === " ") {
    alert('Both fields must be filled out to post.')
  }else {
    postSection.innerHTML += `<li class="list-group-item"><button type="button" class="btn btn-info btn-md remove">Remove</button> <button type="button" class="btn btn-info btn-md comments" >Comments</button> ${postInput.value} - Posted By: ${postNameInput.value} </li>`
  
    postNameInput.value = ""
    postInput.value = ""

  }
  

})


  

