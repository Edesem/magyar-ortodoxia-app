import { storage } from "./storage";
import { STORAGE_KEYS } from "./storageKeys";

export const bookmarkService = {
  async getAll(): Promise<string[]> {
    return (await storage.get<string[]>(STORAGE_KEYS.KANON)) ?? [];
  },

  async isBookmarked(prayerId: string): Promise<boolean> {
    const bookmarks = await this.getAll();
    return bookmarks.includes(prayerId);
  },

  // Returns new bookmark status after toggling
  async toggle(prayerId: string): Promise<boolean> {
    const bookmarks = await this.getAll();
    const isBookmarked = bookmarks.includes(prayerId);

    const updated = isBookmarked
      ? bookmarks.filter((id) => id !== prayerId)
      : [...bookmarks, prayerId];

    await storage.set(STORAGE_KEYS.KANON, updated);

    return !isBookmarked;
  },

  async add(prayerId: string) {
    const bookmarks = await this.getAll();

    if (!bookmarks.includes(prayerId)) {
      await storage.set(STORAGE_KEYS.KANON, [...bookmarks, prayerId]);
    }
  },

  async remove(prayerId: string) {
    const bookmarks = await this.getAll();
    await storage.set(
      STORAGE_KEYS.KANON,
      bookmarks.filter((id) => id !== prayerId)
    );
  },
};
