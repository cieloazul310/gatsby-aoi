import { withPrefix } from "gatsby";
import { useLocation } from "@reach/router";

export function withoutPrefix(str: string) {
  return str.replace(withPrefix("/"), "/");
}

export function usePathnameWithoutPrefix() {
  const { pathname } = useLocation();
  return withoutPrefix(pathname);
}
