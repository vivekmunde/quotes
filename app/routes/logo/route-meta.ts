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
    getTitleTag("Logo"),
    getDescriptionTag("Logo of Quotes!"),
    getUrlTag(["logo"]),
  ];
};

export default meta;
