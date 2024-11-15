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


function makePost() {
  const postInput = document.getElementById('post-input')
  const posterName = document.getElementById('name-input')
  const postId = Math.random(Math.floor * 1000)
  console.log(postId)
  const post = {
    id: postId,
    postText: postInput.value,
    posterName: posterName.value,
    comments: []
  }
  posts.push(post)
  postList.innerHTML = ''
  posts.forEach((post) => {
    // Creates post elements and renders post/content //
    const postContent = document.createElement('h5')
    postList.appendChild(postDiv)
    postDiv.appendChild(postContent)
    postContent.innerHTML = `
      <button class='btn btn-info btn-md remove' type='button' id='${postId}'>Remove</button> 
      <button class='btn btn-info btn-md comment' type='button' id='${postId}'>Comment</button> 
      ${post.postText} - Posted By: ${post.posterName}`
      postInput.value = ''
      posterName.value = ''
    // Comments //
    commTextInput.className = 'input-group input-group-md mb-3 form-control d-none'
    commTextInput.id = 'comm-text-input'
    commTextInput.placeholder = 'Comment Text'
    commNameInput.className = 'input-group input-group-md mb-3 form-control d-none'
    commNameInput.id = 'comm-name-input'
    commNameInput.placeholder = 'Your Name'
    commPostBtn.className = 'btn btn-primary post-comm d-none'
    commPostBtn.type = 'button'
    commPostBtn.innerText = 'Post Comment'
    commPostBtn.id = postId
    post.comments.forEach((comment) => {
      postDiv.appendChild(commentSection)
      commentSection.appendChild(comments)
      comments.innerHTML = `
        <button type='button' class='btn btn-info btn-sm remove' id='${comment.commentId}'>Remove</button>
         ${comment.commentText} - Posted By: ${comment.commenterName}`
      
    })
    // Add comment inputs //
    postDiv.appendChild(commTextInput)
    postDiv.appendChild(commNameInput)
    postDiv.appendChild(commPostBtn)
  })
}

function commentsRenderToggle() {
  console.log(comments.classList)
  console.log(comments.classList.contains('d-none'))
  if (comments.classList.contains('d-none')) {
    console.log('it was hidden')
    comments.classList.remove('d-none')
    commTextInput.classList.remove('d-none')
    commNameInput.classList.remove('d-none')
    commPostBtn.classList.remove('d-none')
  } else {
    console.log('it was not hidden')
    comments.classList.add('d-none')
    commTextInput.classList.add('d-none')
    commNameInput.classList.add('d-none')
    commPostBtn.classList.add('d-none')
  }
}

function postComment(e) {
  const commId = Math.random()
  const commTextInput = document.getElementById('comm-text-input')
  const commNameInput = document.getElementById('comm-name-input')
  const commentData = {
    commentId: commId,
    commentText: commTextInput.value,
    commenterName: commNameInput.value
  }
  const postIndex = posts.findIndex(post => post.id === JSON.parse(e.target.id))
  posts[postIndex].comments.push(commentData)
  
  // Pushes comment to post with correct id //
  // Renders comment to comment section above comment inputs (findIndex) //
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


function renderNewComm() {
  // appends a newly added comment to the correct postId //
}



// const posts = [
//   {id: 1,
//    postText: 'sample post 1',
//    posterName: 'jojo',
//    comments: []},
//   {id: 2,
//    postText: 'sample post 2',
//    posterName: 'jiji',
//    comments: []},
//   {id: 3,
//    postText: 'sample post 3',
//    posterName: 'dodo',
//    comments: []}
// ]