import { File } from "../types/file";
import { urlParser } from "./url-parser";

export enum FileSize {
  LARGE = "large",
  MEDIUM = "medium",
  SMALL = "small",
  EXTRA_SMALL = "extraSmall",
}

export const fileUrl = (file: File, size?: FileSize): string => {
  if (!file) return "";

  let path: string = file.paths.original;

  switch (size) {
    case FileSize.LARGE:
      path = file.paths.large;
      break;

    case FileSize.MEDIUM:
      path = file.paths.medium;
      break;

    case FileSize.SMALL:
      path = file.paths.small;
      break;

    case FileSize.EXTRA_SMALL:
      path = file.paths.extraSmall;
      break;
  }

  return urlParser(path);
};
