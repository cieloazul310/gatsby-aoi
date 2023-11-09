import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function useIsMobile() {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.only("xs"));

  return isMobile;
}
