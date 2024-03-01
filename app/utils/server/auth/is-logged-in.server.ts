import getUserId from "./get-user-id.server";

export default async function isLoggedIn(request: Request) {
  return !!(await getUserId(request));
}
