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
    getTitleTag("Upload quotes"),
    getDescriptionTag("Upload quotes"),
    getUrlTag(["quotes", "upload"]),
  ];
};

export default meta;
