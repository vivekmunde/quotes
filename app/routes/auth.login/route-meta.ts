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
    getTitleTag("Login"),
    getDescriptionTag("Login to Quotes!"),
    getUrlTag(["auth", "login"]),
  ];
};

export default meta;
