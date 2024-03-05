import { redirect } from "@remix-run/node";

export function loader() {
  return redirect("/auth/logout", { status: 301 });
}
