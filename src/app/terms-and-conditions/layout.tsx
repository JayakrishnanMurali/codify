import { getMetadata } from "@/lib/get-metadata";

export const metadata = getMetadata("Codify | Terms and Conditions");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container my-4">
      <div>{children}</div>
    </div>
  );
}
