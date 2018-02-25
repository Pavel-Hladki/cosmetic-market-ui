function defaultIfNull<T>(value: T, defaultValue: T): T {
  return value !== null ? value : defaultValue;
}

export {defaultIfNull};
