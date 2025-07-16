import SideNav from "@/app/ui/dashboard/sidenav";
import { Toaster } from "react-hot-toast";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // flex dan h-screen pada div utama ini akan membuatnya memenuhi seluruh layar.
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <Toaster position="top-center" />
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>

      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
