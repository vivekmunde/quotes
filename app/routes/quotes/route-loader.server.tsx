import { LoaderFunctionArgs } from "@remix-run/node";
import authorizedAccess from "~/utils/server/auth/authorized-access.server";

const loader = async ({ request }: LoaderFunctionArgs) => {
  return authorizedAccess<null>(request, () => null);
};

export default loader;
