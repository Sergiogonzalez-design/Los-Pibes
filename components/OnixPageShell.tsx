import LosPibesFooter from "@/components/LosPibesFooter";
import LosPibesNavbar from "@/components/LosPibesNavbar";

export default function OnixPageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbar />
      {children}
      <LosPibesFooter />
    </div>
  );
}
