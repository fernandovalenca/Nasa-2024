export function removeEmptyValues<T extends Record<string, unknown>>(obj: T): T {
  return Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(obj).filter(([_, value]) => !!value)
  ) as T;
}
