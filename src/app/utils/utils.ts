function defaultIfNull<T>(value: T, defaultValue: T): T {
  return value != null ? value : defaultValue;
}

function isDefined<T>(value: T): boolean {
  return value != null;
}

export {defaultIfNull, isDefined};
