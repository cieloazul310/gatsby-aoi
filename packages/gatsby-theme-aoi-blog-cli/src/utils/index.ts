export function isString(str: string | unknown): str is string {
  return typeof str === 'string';
}
export function isBoolean(bool: boolean | unknown): bool is boolean {
  return typeof bool === 'boolean';
}
