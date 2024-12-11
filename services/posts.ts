import axios from "axios";

export async function getAllPosts(): Promise<PostProps[] | undefined> {
  const response = await axios.get("/api/blog");
  return response.data.posts;
}

export async function addPost({ data }: { data: PostProps }) {
  const response = await axios.post("/api/blog", data);

  return response.data;
}
