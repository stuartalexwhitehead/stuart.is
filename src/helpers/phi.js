const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;

export const phiMajor = whole => whole / GOLDEN_RATIO;

export const phiMinor = whole => whole - phiMajor(whole);

export const phiMinorFromMajor = major => major * GOLDEN_RATIO - major;
