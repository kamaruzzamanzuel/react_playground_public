import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
export { };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

declare global {
  interface Array<T> {

    /**
     * Determines whether an array includes a certain element, returning true or false as appropriate.
     * @param searchElement The element to search for.
     * @param fromIndex The position in this array at which to begin searching for searchElement.
     */

    includesExt: (searchElement: T | null | undefined, fromIndex?: number) => boolean;
    firstOrDefault(predicate: (item: T) => boolean): T;
  }
}