const newCommentHandler = async (event) => {
  event.preventDefault();

  const post_id = event.target.getAttribute('data-id');

  const content = document.querySelector('#comment-content').value.trim();

  const response = await fetch(`/api/comments`, {
    method: 'POST',
    body: JSON.stringify({ post_id, content }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // if (!res.session.logged_in) {
  //   alert('You must be logged in to comment');
  // }
  if (response.ok) {
    document.location.reload();
  } else {
    alert('Failed to create comment');
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);
