/** Une nombres de clase, ignorando los vacíos. */
export function cx(...names: Array<string | false | null | undefined>): string {
  return names.filter(Boolean).join(' ')
}
