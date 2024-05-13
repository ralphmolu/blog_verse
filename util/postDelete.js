function deletePost(id) {
    if (confirm('Are you sure you want to delete this post?')) {
        fetch(`/posts/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(response => {
                if (response.success) {
                    window.location.reload(); // Reload the page if delete was successful
                } else {
                    alert('Failed to delete post.');
                }
            })
            .catch(err => alert('Error deleting post.'));
    }
}