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
    getTitleTag("Next quote"),
    getDescriptionTag("Next quote from Quotes!"),
    getUrlTag(["q", "@next"]),
  ];
};

export default meta;
