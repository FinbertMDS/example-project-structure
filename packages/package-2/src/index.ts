import { packageName as package1Name, add } from '@huynv/package-1'

export const packageName = 'package2'

const useAdd = (x: number, y: number): number => {
  return add(x,y);
};

export { package1Name, useAdd }