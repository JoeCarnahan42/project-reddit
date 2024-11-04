const postBtn = document.getElementById('post-btn')
const postSection = document.getElementById('post-section')
const postNameInput = document.getElementById('name-input')
const postInput = document.getElementById('post-input')
const removeBtn = document.getElementsByClassName('remove')[0]
const commentsBtn = document.getElementsByClassName('comments')[0]
const postList = document.getElementById('post-list')
const commentInput = document.getElementById('comment-input')
const commentName = document.getElementById('comment-name')

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
    postSection.innerHTML += `<h5 class="list-group-item"><button type="button" class="btn btn-info btn-md remove">Remove</button> <button type="button" class="btn btn-info btn-md comments" >Comments</button> ${postInput.value} - Posted By: ${postNameInput.value} </h5>`
    postSection.innerHTML += '<div  class="input-group input-group-lg mb-3" ><input type="text" class="form-control" placeholder="Comment" /></div>'
    postNameInput.value = ""
    postInput.value = ""
  }
})