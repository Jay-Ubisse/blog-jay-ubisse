import axios from "axios";

export async function getAllPosts(): Promise<PostProps[] | undefined> {
  const response = await axios.get("/api/blog");
  return response.data.posts;
}
