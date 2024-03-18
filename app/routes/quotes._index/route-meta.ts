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
    getTitleTag("Quotes list"),
    getDescriptionTag("Quotes list from Quotes!"),
    getUrlTag(["quotes"]),
  ];
};

export default meta;
