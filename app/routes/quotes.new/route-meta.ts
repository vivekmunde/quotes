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
    getTitleTag("Create a quote"),
    getDescriptionTag("Create a quote"),
    getUrlTag(["quotes", "new"]),
  ];
};

export default meta;
