let data = []
const postBtn = document.getElementById('post-btn')
const postSection = document.getElementById('post-section')
const postNameInput = document.getElementById('name-input')
const postInput = document.getElementById('post-input')
const removeBtn = document.getElementsByClassName('remove')[0]
const commentsBtn = document.getElementsByClassName('comments')[0]
const postList = document.getElementById('post-list')

postList.addEventListener('click', function(e) {
  if (e.target.classList.contains('remove')) {
    e.target.closest('.list-group-item').remove()
  } else if (e.target.classList.contains('comments')) {
    console.log(e.target.closest('div'))
    commentsInputFields(e)
    // renderComments()
    
  }
})

function commentsInputFields(e) {
  const nearestDiv = e.target.closest('div')
  const div1 = document.createElement('div')
  div1.className = 'container'

  const div2 = document.createElement('div')
  div2.className = 'container'

  const inputDiv1 = document.createElement('div')
  inputDiv1.className = 'input-group input-group-lg mb-3'

  const inputDiv2 = document.createElement('div')
  inputDiv2.className = "input-group input-group-lg mb-3"

  const commentsInput = document.createElement('input')
  commentsInput.type = 'text'
  commentsInput.className = 'form-control'
  commentsInput.placeholder = 'Comment Text'
  
  const commentsNameInput = document.createElement('input')
  commentsNameInput.type = 'text'
  commentsNameInput.className = 'form-control'
  commentsNameInput.placeholder = 'Your Name'
  
  nearestDiv.append(div1)
  nearestDiv.append(div2)
  div1.append(inputDiv1)
  div2.append(inputDiv2)
  inputDiv1.append(commentsInput)
  inputDiv2.append(commentsNameInput)
}

function renderComments() {

    
  
}

function renderPosts() {
  if (!postNameInput.value || !postInput.value || postNameInput.value === " " || postInput.value === " ") {
    alert('Both fields must be filled out to post.')
  }else {
    const randomId = Math.random()
    let post = {
      id: randomId,
      posterName: postNameInput.value,
      postText: postInput.value,
      comments: []
    }
    data.push(post)
    console.log(data)
    postSection.innerHTML = ""
    data.forEach((post) => {
      postSection.innerHTML += `<div class="list-group-item"><h5><button type="button" class="btn btn-info btn-md remove">Remove</button> <button type="button" id="${randomId}" class="btn btn-info btn-md comments" >Comments</button> ${post.postText} -Posted By: ${post.posterName} </h5></div>`
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
