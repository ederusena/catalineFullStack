// pick e omit
interface Post {
  id: number;
  title: string;
  description: string;
}

type PostPreviewPick = Pick<Post, "id" | "title">;
type PostPreviewOmit = Omit<Post, "id" | "title">;
let picks: PostPreviewPick
let omits: PostPreviewOmit

picks.id = 1;
picks.title = "Chupisco";
omits.description = "h1 Chupisco";
