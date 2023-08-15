export async function getAllVideos() {
  const response = await fetch("/videos/");
  return await response.json();
}
export async function getVideoById(id) {
  const response = await fetch(`/videos/${id}`);
  return await response.json();
}
export async function getAllProducts(id) {
  const response = await fetch(`/products/${id}`);
  return await response.json();
}
export async function getAllComments(id) {
  const response = await fetch(`/comments/${id}`);
  return await response.json();
}
export async function createComment(data) {
  const response = await fetch(`/comments/${data.id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await response.json();
}
