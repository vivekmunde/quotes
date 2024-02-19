import { TClassName } from './types';

const getClassNames = (classNames: TClassName[]): string => {
  return classNames.join(' ');
};

export default getClassNames;
