import { Document } from "mongoose";
import { beforeEach,describe, expect, it, vi } from "vitest";

import { User, UserPersistence } from "../user.model.js";

const fakeUser = {
  _id: "user123",
  name: "Nataniel",
  surname: "Porto",
  country: "Brazil",
  birthday: "01/01/1990",
  __v: 0,
} as unknown as Document as UserPersistence;

beforeEach(() => {
  vi.restoreAllMocks();
});

describe("UserRepository", () => {
  it("should create a user", async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.spyOn(User, "create").mockResolvedValue(fakeUser as any);

    const { createUser } = await import("../user.repository.js");
    const result = await createUser(fakeUser);

    expect(User.create).toHaveBeenCalledWith(fakeUser);
    expect(result).toEqual(fakeUser);
  });

  it("should find all users", async () => {
    vi.spyOn(User, "find").mockResolvedValue([fakeUser]);

    const { findAllUsers } = await import("../user.repository.js");
    const result = await findAllUsers();

    expect(User.find).toHaveBeenCalled();
    expect(result).toEqual([fakeUser]);
  });

  it("should find a user by ID", async () => {
    vi.spyOn(User, "findById").mockResolvedValue(fakeUser);

    const { findUser } = await import("../user.repository.js");
    const result = await findUser("user123");

    expect(User.findById).toHaveBeenCalledWith("user123");
    expect(result).toEqual(fakeUser);
  });

  it("should update a user", async () => {
    vi.spyOn(User, "findByIdAndUpdate").mockResolvedValue(fakeUser);

    const { updateUser } = await import("../user.repository.js");
    const updatedData = { name: "Nataniel Updated" };
    const result = await updateUser("user123", updatedData);

    expect(User.findByIdAndUpdate).toHaveBeenCalledWith(
      "user123",
      updatedData,
      { new: true }
    );
    expect(result).toEqual(fakeUser);
  });

  it("should delete a user", async () => {
    vi.spyOn(User, "findByIdAndDelete").mockResolvedValue(fakeUser);

    const { deleteUser } = await import("../user.repository.js");
    const result = await deleteUser("user123");

    expect(User.findByIdAndDelete).toHaveBeenCalledWith("user123");
    expect(result).toEqual(fakeUser);
  });
});
