import urlJoin from "url-join";

export const urlParser = (...parts: string[]) => {
  const baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL || "";

  return urlJoin(baseUrl, ...parts);
};
