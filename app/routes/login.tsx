import { redirect } from "@remix-run/node";

export function loader() {
  return redirect("/auth/login", { status: 301 });
}
