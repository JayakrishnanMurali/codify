import { Snippet } from "@/components/common/snippet/snippet";
import { Sidebar } from "@/components/common/sidebar/sidebar";

export default function HomePage() {
  return (
    <main className="flex h-full">
      <div className="flex flex-1 items-center justify-center overflow-auto p-10">
        <Snippet />
      </div>
      <Sidebar />
    </main>
  );
}
