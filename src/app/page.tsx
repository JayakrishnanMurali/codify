import { Toolbar } from "@/components/common/toolbar/toolbar";
import { Snippet } from "@/components/common/snippet/snippet";

export default function HomePage() {
  return (
    <main className="">
      <div className="my-2 flex w-full justify-center pt-10">
        <div className="w-full max-w-4xl space-y-8">
          <Toolbar />
          <Snippet />
        </div>
      </div>
    </main>
  );
}
