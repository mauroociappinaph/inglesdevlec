export function validateParams(params: Record<string, any>, functionName: string): void {
  for (const [key, value] of Object.entries(params)) {
    if (!value || (typeof value === "string" && !value.trim())) {
      throw new Error(`${functionName}: Missing required parameter '${key}'`);
    }
  }
}
