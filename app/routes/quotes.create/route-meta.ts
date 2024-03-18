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
    getTitleTag("Create quote"),
    getDescriptionTag("Create quote"),
    getUrlTag(["quotes", "new"]),
  ];
};

export default meta;
