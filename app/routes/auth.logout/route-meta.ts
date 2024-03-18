import type { MetaFunction } from "@remix-run/node";
import {
  getDescriptionTag,
  getNoRobotTag,
  getTitleTag,
  getUrlTag,
} from "~/utils/meta";

const meta: MetaFunction = () => {
  return [
    getNoRobotTag(),
    getTitleTag("Logout"),
    getDescriptionTag("Logout from Quotes!"),
    getUrlTag(["auth", "logout"]),
  ];
};

export default meta;
