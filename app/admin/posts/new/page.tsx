import type { Metadata } from "next";
import WritePostForm from "./WritePostForm";

export const metadata: Metadata = {
  title: "Write New Post | SarkariDarapan Admin",
  robots: { index: false, follow: false },
};

export default function WriteNewPostPage() {
  return <WritePostForm />;
}
