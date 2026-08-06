import { bookmarkService } from "../services/bookmarkService";
import { storage } from "../services/storage";

jest.mock("../services/storage", () => ({
    storage: {
        get: jest.fn(),
        set: jest.fn(),
        remove: jest.fn(),
        clear: jest.fn(),
    },
}));

const mockedStorage = jest.mocked(storage);

beforeEach(() => {
    jest.resetAllMocks();
});

it("Should return a boolean if a prayerId is bookmarked or not", async () => {
    mockedStorage.get.mockResolvedValue(["morning", "vespers"]);

    const isBookmarked = await bookmarkService.isBookmarked("morning");
    expect(isBookmarked).toBe(true);

    const isNotBookmarked = await bookmarkService.isBookmarked("compline");
    expect(isNotBookmarked).toBe(false);
});

it("Should toggle a prayerId in the bookmarks", async () => {
    mockedStorage.get.mockResolvedValue(["morning", "vespers"]);

    const newStatus = await bookmarkService.toggle("compline");
    expect(newStatus).toBe(true);
    expect(mockedStorage.set).toHaveBeenCalledWith("kanon", ["morning", "vespers", "compline"]);
});

it("Should toggle a prayerId out of the bookmarks", async () => {
    mockedStorage.get.mockResolvedValue(["morning", "vespers", "compline"]);
    const newStatus = await bookmarkService.toggle("morning");
    expect(newStatus).toBe(false);
    expect(mockedStorage.set).toHaveBeenCalledWith("kanon", ["vespers", "compline"]);
});

it("Should add a prayerId to the bookmarks if not already present", async () => {
    mockedStorage.get.mockResolvedValue(["morning", "vespers"]);

    await bookmarkService.add("compline");
    expect(mockedStorage.set).toHaveBeenCalledWith("kanon", ["morning", "vespers", "compline"]);
});

it("Should not add a prayerId to the bookmarks if already present", async () => {
    mockedStorage.get.mockResolvedValue(["morning", "vespers"]);

    await bookmarkService.add("morning");
    expect(mockedStorage.set).not.toHaveBeenCalled();
});

it("Should remove a prayerId from the bookmarks", async () => {
    mockedStorage.get.mockResolvedValue(["morning", "vespers"]);

    await bookmarkService.remove("morning");
    expect(mockedStorage.set).toHaveBeenCalledWith("kanon", ["vespers"]);
});

it("Should not remove a prayerId from the bookmarks if not present", async () => {
    mockedStorage.get.mockResolvedValue(["morning", "vespers"]);
    
    await bookmarkService.remove("compline");
    expect(mockedStorage.set).toHaveBeenCalledWith("kanon", ["morning", "vespers"]);
});

it("Should return an empty array if no bookmarks are present", async () => {
    mockedStorage.get.mockResolvedValue(null);

    const bookmarks = await bookmarkService.getAll();
    expect(bookmarks).toEqual([]);
});