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
    getTitleTag("API"),
    getDescriptionTag("API"),
    getUrlTag(["api", "user-preferences"]),
  ];
};

export default meta;
