document.addEventListener('DOMContentLoaded', function () {
    const deleteButtons = document.querySelectorAll('.delete-post-button'); 

    deleteButtons.forEach(button => {
        button.addEventListener('click', function () {
            const postId = this.getAttribute('data-post-id');
            if (confirm('Are you sure you want to delete this post?')) {
                fetch(`/posts/${postId}`, {
                    method: 'DELETE'
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            // reload or remove the post element from the DOM
                            console.log('Post deleted successfully');
                            window.location.reload();
                        } else {
                            alert('Failed to delete post.');
                        }
                    })
                    .catch(err => {
                        console.error('Error deleting post:', err);
                        alert('Error deleting post.');
                    });
            }
        });
    });
});
