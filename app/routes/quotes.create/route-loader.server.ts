import { LoaderFunctionArgs } from "@remix-run/node";
import { authorizedAccess } from "~/utils/server/auth";
import { TData } from "./types";

const loader = async ({ request }: LoaderFunctionArgs): Promise<TData> => {
  return authorizedAccess<null>(request, () => null);
};

export default loader;
