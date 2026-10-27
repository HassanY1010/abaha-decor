/**
 * دالة مساعدة لدمج وتصفية أصناف CSS
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ');
}
