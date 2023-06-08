import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
  },
  breakpoints: {
    xm: "375px",
    sm: "480px",
    xs: "640px",
    md: "768px",
    lg: "993px",
    xl: "1280px",
    "2xl": "1536px",
  },
});
