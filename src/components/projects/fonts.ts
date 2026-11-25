/**
 * Bengali typeface used by the Ainbondu brand. The project intentionally uses
 * a CSS fallback stack here instead of next/font/google so production builds do
 * not depend on network access to Google Fonts.
 */
export const anekBangla = { className: "font-bengali" };

/**
 * The design renders the "Challenge / Solution" cards and the "Project Impact"
 * card in Arial (the rest of the page is Inter). To switch those blocks to Inter,
 * set this to an empty string.
 */
export const ARIAL_FONT_CLASS = "font-[family-name:Arial,Helvetica,sans-serif]";
