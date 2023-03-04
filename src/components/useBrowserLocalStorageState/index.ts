import { useEffect, useState } from 'react';
import { LangKit } from '@/_utils';
import { useMemoizedFn, useMount } from 'ahooks';
import { WebExtension } from '@hocgin/browser-addone-kit';

type IFunc<T> = () => T
type OptionType<T> = {
  defaultValue: T | IFunc<T>,
  type?: WebExtension.storage.AreaName
};


export function useBrowserLocalStorageState<T = any>(key: string, {
  defaultValue,
  type = 'local',
}: OptionType<T>) {
  let getValues = () => {
    console.log('defaultValue', defaultValue);
    if (LangKit.isFunction(defaultValue)) {
      return (defaultValue as IFunc<T>)();
    }
    return defaultValue as T;
  };
  let [values, setValues] = useState<T>(getValues);
  let _setValues = useMemoizedFn((newValues: T) => {
    let hasChanged = newValues !== values;
    console.log('hasChanged', hasChanged, newValues, values);
    if (hasChanged) {
      setValues(newValues);
    }
    return hasChanged;
  }), onChanged = (changes, areaName) => {
    let newValues = changes?.[key]?.newValue;
    if (areaName === type) {
      console.log('changed');
      _setValues(newValues);
    }
  };
  useEffect(() => {
    WebExtension.storage.onChanged.addListener(onChanged);
    return () => {
      WebExtension.storage.onChanged.removeListener(onChanged);
    };
  }, []);
  useMount(() => {
    WebExtension.storage[type].get([key], (values) => {
      let newValues = values?.[key] ?? getValues();
      console.log('获取信息.settings', newValues);
      setValues(newValues);
    });
  });
  return [values, useMemoizedFn((newValues) => {
    setValues(newValues);
    WebExtension.storage[type].set({ [key]: newValues });
  })] as const;
}
