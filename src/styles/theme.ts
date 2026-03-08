import {
  breakpoints,
  media,
  typography
} from "./variables"

const lightColors = {
  bgPrimary: "#ffffff",
  bgSecondary: "#F7F7F8",
  bgTransparent: "#05051029",
  gradientSkeleton: "linear-gradient(90deg, #F3F3F6 0%, #FAFAFA 100%)",
  gradientDetailsSkeleton: "linear-gradient(90deg, #97979B  0%, #F7F7F8 100%)",
  textPrimary: "#050510",
  textSecondary: "#55555C",
  textTertiary: "#97979B",
  contentDefaultPrimary: "#C3C3C6",
  contentDefaultSecondary: "#C3C3C6",
  active: "#6534FF",
};

const darkColors = {
  bgPrimary: "#1a1a1a",
  bgSecondary: "#2d2d2d",
  bgTransparent: "#ffffff29",
  gradientSkeleton: "linear-gradient(90deg, #2d2d2d 0%, #3d3d3d 100%)",
  gradientDetailsSkeleton: "linear-gradient(90deg, #3d3d3d 0%, #4d4d4d 100%)",
  textPrimary: "#ffffff",
  textSecondary: "#e0e0e0",
  textTertiary: "#a0a0a0",
  contentDefaultPrimary: "#666666",
  contentDefaultSecondary: "#666666",
  active: "#8a5cff",
};

export const lightTheme = {
  breakpoints,
  media,
  colors: lightColors,
  typography
}

export const darkTheme = {
  breakpoints,
  media, 
  colors: darkColors,
  typography
}

export type Theme = typeof lightTheme