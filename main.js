const data = []
const postBtn = document.getElementById('post-btn')
const postSection = document.getElementById('post-section')
const postNameInput = document.getElementById('name-input')
const postInput = document.getElementById('post-input')
const removeBtn = document.getElementsByClassName('remove')[0]
const commentsBtn = document.getElementsByClassName('comments')[0]
const postList = document.getElementById('post-list')

postList.addEventListener('click', function(e) {
  if (e.target.classList.contains('remove')) {
    const targetId = JSON.parse(e.target.id)
    const indexToRem = data.findIndex(post => post.remId === targetId)
    data.shift(indexToRem)
    e.target.closest('.list-group-item').remove()
  } else if (e.target.classList.contains('comments')) {

    // Add and if else that checks if the elements already exist
    commentsInputFields(e)
    // renderComments()
    
  } else if (e.target.classList.contains('btn-primary')) {
    const commentData = {
      name: commentsNameInput.value,
      comment: commentsInput.value
    }

    // Find a way to link the button to the id and thus the index and push it in to the comments array //
    
    const postId = e.target.closest('.comments')
    console.log(postId)
  }
})

const div1 = document.createElement('div')
const div2 = document.createElement('div')
const inputDiv1 = document.createElement('div')
const inputDiv2 = document.createElement('div')
const commentsInput = document.createElement('input')
const commentsNameInput = document.createElement('input')

function commentsInputFields(e) {
  const addCommentBtn = document.createElement('button')
  addCommentBtn.type = 'button'
  addCommentBtn.className = 'btn btn-primary'
  addCommentBtn.innerText = 'Post Comment'
  const nearestDiv = e.target.closest('div')
  div1.className = 'container'

  div2.className = 'container'

  inputDiv1.className = 'input-group input-group-lg mb-3'

  inputDiv2.className = "input-group input-group-lg mb-3"

  commentsInput.type = 'text'
  commentsInput.className = 'form-control'
  commentsInput.placeholder = 'Comment Text'
  
  commentsNameInput.type = 'text'
  commentsNameInput.className = 'form-control'
  commentsNameInput.placeholder = 'Your Name'
  
  nearestDiv.append(div1)
  nearestDiv.append(div2)
  nearestDiv.append(addCommentBtn)
  div1.append(inputDiv1)
  div2.append(inputDiv2)
  inputDiv1.append(commentsInput)
  inputDiv2.append(commentsNameInput)
}

function renderComments(e) {

  const post = e.target.closest('h5')
  const commentSection = document.createElement('div')
  commentSection.className = 'list-group-item'
  post.append(commentSection)
}

function renderPosts() {
  if (!postNameInput.value || !postInput.value || postNameInput.value === " " || postInput.value === " ") {
    alert('Both fields must be filled out to post.')
  }else {
    const randomComId = Math.random()
    const randomRemId = Math.floor(Math.random() * 500)
    const post = {
      remId: randomRemId,
      id: randomComId,
      posterName: postNameInput.value,
      postText: postInput.value,
      comments: []
    }
    data.push(post)
    postSection.innerHTML = ""
    data.forEach((post) => {
      postSection.innerHTML += `<div class="list-group-item"><h5><button id="${randomRemId}" type="button" class="btn btn-info btn-md remove">Remove</button> <button type="button" id="${randomComId}" class="btn btn-info btn-md comments" >Comments</button> ${post.postText} -Posted By: ${post.posterName} </h5></div>`
    })
    postNameInput.value = ""
    postInput.value = ""
  }
}

// Handles posting //
postBtn.addEventListener('click', function () {
  renderPosts()
})


// `<div class="input-group input-group-lg mb-3"><input type="text" class="form-control" placeholer="Comment Text"/></div>`

// let div = document.createElement("div");
// let p = document.createElement("p");
// div.append(p);
