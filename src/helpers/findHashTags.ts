import {hashTags} from "@/constants/reqExp/reqExp";

export default function findHashTags(str: string) {
  return Array.from(new Set(str.match(hashTags)));
}
