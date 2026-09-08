export const DESIGN_SYSTEM_VERSION = '0.0.0';

export type Theme = {
  version: string;
};

// Theme tokens - can be used to configure Tailwind or other styling systems
export const themeTokens = {
  colors: {
    neutral: 'neutral',
  },
  radius: {
    default: '0.625rem',
  },
} as const;

export type ThemeTokens = typeof themeTokens;
