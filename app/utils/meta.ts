import { TMayBe } from "~/types";

const websiteUrl = "http://www.quotes.read";

const ifContent = (name: string, content?: TMayBe<string>) =>
  content && content.length > 0
    ? {
        name,
        content,
      }
    : {};

export const getUrl = (routes?: TMayBe<TMayBe<string>[]>) =>
  [websiteUrl, ...(routes ?? [])]
    .filter(Boolean)
    .join("/")
    .replace(/\/\//gi, "/");

export const getTitle = (title?: TMayBe<string>) =>
  [title, "Quotes"].filter(Boolean).join(" | ").replace(/\|\|/gi, "|");

export const getRobotTag = () => ({
  name: "robots",
  content: "index,follow",
});

export const getNoRobotTag = () => ({
  name: "robots",
  content: "noindex,nofollow",
});

export const getTitleTag = (title?: TMayBe<string>) => ({
  title: getTitle(title),
});

export const getUrlTag = (routes?: TMayBe<TMayBe<string>[]>) =>
  ifContent("url", getUrl(routes));

export const getDescriptionTag = (description?: TMayBe<string>) =>
  ifContent("description", description);

export const getAuthorTag = (author?: TMayBe<string>) =>
  ifContent("author", author);
