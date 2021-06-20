const newCommentHandler = async (event) => {
  event.preventDefault();

  const post_id = document.querySelector('data-blog_post-id').value.trim();

  const content = document.querySelector('#comment-content').value.trim();

  if (post_id && content) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ post_id, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log(content);
      document.location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);
