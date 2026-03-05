// точки перехода для адаптива
export const breakpoints = {
  mobile: 430,
  tablet: 768,
  desktop: 1024
} as const

// медиа-запросы для использования в компонентах
export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile}px)`,
  tablet: `@media (min-width: ${breakpoints.mobile + 1}px) and (max-width: ${breakpoints.desktop - 1}px)`,
  desktop: `@media (min-width: ${breakpoints.desktop}px)`,
}

// цвета из Figma
export const colors = {
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
} as const

// стили текста 
export const typography = {
  fontFamily: {
    primary: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },

  fontSize: {
    xs: 13,
    sm: 14,
    md: 15,
    lg: 16,
    xl: 17,
    xxl: 20,
    xxxl: 24,
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    xs: '16px',     
    sm: '18px',      
    md: '20px',      
    lg: '22px',      
    xl: '24px',      
    xxl: '28px',
  },

  textCase: {
    none: 'none',
    uppercase: 'uppercase',
    capitalize: 'capitalize',
  },

  textDecoration: {
    none: 'none',
    underline: 'underline',
  },
} as const


