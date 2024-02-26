import { useEffect, useState } from "react";

export const isFalsy = (value:unknown) => (value === 0 ? false : !value);
export const isVoid=(value:unknown)=>value===undefined||value===null||value===''

export const cleanObject = (object:{[key:string]:unknown}) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    if (isVoid(object[key])) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback:()=>void) => {
  useEffect(() => {
    callback();
    // TODO 依赖项里加上callback会造成无限循环，这个和useCallback以及useMemo有关系
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const debounce = (func:()=>void, delay:number) => {
  let timeout:any;
  return (...param: any) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
       //@ts-ignore
      func(...param);
    }, delay);
  };
};

export const useDebounce = <S>(value:S, delay:number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);
  return debouncedValue;
};
