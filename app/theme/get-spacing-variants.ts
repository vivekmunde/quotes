const getNumericValue = (str: string | undefined): number | undefined => {
  if (str) {
    try {
      return Number(str.replace(/\D/g, ''));
    } catch (err: any) {
      console.error(err);
    }
  }
  return undefined;
};

const getSpacingVariants = (spacing: string | number | undefined): {
  1: string,
  2: string,
  3: string,
  4: string,
  5: string,
  6: string,
  7: string,
  8: string,
  9: string,
  10: string,
} => {
  const spacingBase = getNumericValue(`${spacing}`) ?? 14;

  return {
    1: `${(spacingBase * 0.25)}px`,
    2: `${(spacingBase * 0.5)}px`,
    3: `${(spacingBase * 0.75)}px`,
    4: `${(spacingBase * 1)}px`,
    5: `${(spacingBase * 1.25)}px`,
    6: `${(spacingBase * 1.5)}px`,
    7: `${(spacingBase * 1.75)}px`,
    8: `${(spacingBase * 2)}px`,
    9: `${(spacingBase * 2.25)}px`,
    10: `${(spacingBase * 2.5)}px`,
  };
};

export default getSpacingVariants;
