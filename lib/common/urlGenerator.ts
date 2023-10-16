import urlJoin from "url-join";

const urlGenerator = (...parts: string[]) => {
  const baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL || "";

  return urlJoin(baseUrl, ...parts);
};

export default urlGenerator;
