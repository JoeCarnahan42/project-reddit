const posts = []
const postList = document.getElementById('post-list')
const postDiv = document.createElement('div')
postDiv.className = 'list-group list-group-flush'
const commTextInput = document.createElement('input')
const commNameInput = document.createElement('input')
const commPostBtn = document.createElement('button')
const commentSection = document.createElement('div')
const comments = document.createElement('h5')
comments.classList.add('d-none') // Hides comments until rendered //
const postBtn = document.getElementById('post-btn')
const postContent = document.createElement('h5')
const lineBreak = document.createElement('br')


function makePost() {
  const postInput = document.getElementById('post-input')
  const posterName = document.getElementById('name-input')
  const postId = Math.random(Math.floor * 1000)
  const postData = `
    <button class='btn btn-info btn-md remove' type='button' id='${postId}'>Remove</button> 
    <button class='btn btn-info btn-md comment' type='button' id='${postId}'>Comment</button> 
    ${postInput.value} - Posted By: ${posterName.value}`
  const post = {
    id: postId,
    postText: postData,
    comments: []
  }
  posts.push(post)
  postContent.innerHTML = ''
  posts.forEach((post) => {
    // Creates post elements and renders post/content //
    postList.appendChild(postDiv)
    postDiv.appendChild(postContent)
    postContent.appendChild(lineBreak)
    postContent.innerHTML += post.postText
    // Comments Section Construction //
    commTextInput.className = 'input-group input-group-md mb-3 form-control comm-text-input d-none'
    commTextInput.id = JSON.stringify(postId)
    commTextInput.placeholder = 'Comment Text'
    commNameInput.className = 'input-group input-group-md mb-3 form-control comm-name-input d-none'
    commNameInput.id = JSON.stringify(postId)
    commNameInput.placeholder = 'Your Name'
    commPostBtn.className = 'btn btn-primary post-comm d-none'
    commPostBtn.type = 'button'
    commPostBtn.innerText = 'Post Comment'
    commPostBtn.id = postId
    // Add comment inputs //
    postDiv.appendChild(commTextInput)
    postDiv.appendChild(commNameInput)
    postDiv.appendChild(commPostBtn)
  })
  postInput.value = ''
  posterName.value = ''
}

function commentsRenderToggle() {
  // Link post id and render comments from post //
  console.log(comments.classList)
  console.log(comments.classList.contains('d-none'))
  if (comments.classList.contains('d-none')) {
    comments.classList.remove('d-none')
    commTextInput.classList.remove('d-none')
    commNameInput.classList.remove('d-none')
    commPostBtn.classList.remove('d-none')
  } else {
    comments.classList.add('d-none')
    commTextInput.classList.add('d-none')
    commNameInput.classList.add('d-none')
    commPostBtn.classList.add('d-none')
  }
}

function postComment(e) {
  const commId = Math.random()
  const commTextInput = document.querySelector('.comm-text-input')
  const commNameInput = document.querySelector('.comm-name-input')
  const commText = commTextInput.value
  const commName = commNameInput.value
  const commData = `
  <button type='button' class='btn btn-info btn-sm remove' id='${commId}'>Remove</button>
  ${commText} - Posted By: ${commName}`
  
  const commentData = {
    commentId: commId,
    commentText: commData,
  }
  const postIndex = posts.findIndex(post => post.id === JSON.parse(e.target.id))
  posts[postIndex].comments.push(commentData)
  comments.innerHTML = ''
  posts[postIndex].comments.forEach((comment) => {
    postContent.appendChild(commentSection)
    commentSection.appendChild(comments)
    comments.appendChild(lineBreak)
    comments.innerHTML += comment.commentText
  })
  commTextInput.value = ''
  commNameInput.value = ''
}

postBtn.addEventListener('click', function() {
  makePost()
})

postList.addEventListener('click', function(e) {
  if (e.target.classList.contains('post-comm')) {
    postComment(e)
  } else if (e.target.classList.contains('comment')) {
    commentsRenderToggle()
  }
})

// !!Problems!! //
// 1. Once a new post is made, the comments are unrendered, but still exist in the array.
// 2. Clicking the comments button does not render the ONLY the comments under that particular post.
// 3. Once a comment is posted, it will render under any post that the comments button is clicked.
// 4. Probably more that i have no found yet...

// !! TODO !! //
// 1. Code remove buttons on posts(easy)
// 2. Code remove buttons on comments(probably easy)
// 3. Fix errors...