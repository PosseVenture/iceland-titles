import { redirect } from "next/navigation";

// /dashboard redirects to the demo welcome dashboard
export default function DashboardPage() {
  redirect("/welcome");
}
