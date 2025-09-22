/**
 * Get the correct image path based on the environment
 * @param imagePath - The image path starting with /images/
 * @returns The full image path with base path if needed
 */
export function getImagePath(imagePath: string): string {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;

  // Check if we're in production (GitHub Pages)
  const isProduction = process.env.NODE_ENV === "production";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (isProduction && basePath) {
    // Remove leading slash from basePath if present to avoid double slashes
    const cleanBasePath = basePath.startsWith("/")
      ? basePath.slice(1)
      : basePath;
    return `/${cleanBasePath}/${cleanPath}`;
  }

  return `/${cleanPath}`;
}

/**
 * Get the base path for the application
 * @returns The base path string
 */
export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || "";
}
