document.getElementById('post-comment').addEventListener('click', function(){
    const commentTexBox = document.getElementById('comment-text-box');
    const newComment = commentTexBox.value;
    const commentContainer = document.getElementById('comments-container');
    const newCommentElement = document.createElement('p');
    newCommentElement.classList.add('comment')
    newCommentElement.innerText=newComment;
    commentContainer.appendChild(newCommentElement);
    commentTexBox.value='';
    
  })
  
  