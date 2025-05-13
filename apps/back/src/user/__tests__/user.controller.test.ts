import { userSchema } from "@mosano-test-fullstack/schemas";
import { Request, Response } from "express";
import { beforeEach,describe, expect, it, vi } from "vitest";

import * as Controller from "../user.controller.js";
import { UserPersistence } from "../user.model.js";
import * as UserRepository from "../user.repository.js";

vi.mock("../user.repository.js", () => ({
  createUser: vi.fn(),
  findAllUsers: vi.fn(),
  updateUser: vi.fn(),
  findUser: vi.fn(),
  deleteUser: vi.fn(),
}));

function mockResponse(): Response {
  const res = {} as Response;
  res.status = vi.fn().mockReturnThis();
  res.json = vi.fn().mockReturnThis();
  res.send = vi.fn().mockReturnThis();
  return res;
}

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Controller", () => {
  it("createUser - should return 400 if validation fails", async () => {
    const req = { body: {} } as Request;
    const res = mockResponse();

    await Controller.createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalled();
  });

  it("createUser - should create user and return 201", async () => {
    const validData = userSchema.parse({
      id: "1",
      name: "Nataniel",
      surname: "Porto",
      country: "Brazil",
      birthday: "01/01/1990",
    });

    const req = { body: validData } as Request;
    const res = mockResponse();
    const newUser = { id: "1", ...validData } as unknown as UserPersistence;
    vi.mocked(UserRepository.createUser).mockResolvedValue(newUser);

    await Controller.createUser(req, res);

    expect(UserRepository.createUser).toHaveBeenCalledWith(validData);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(newUser);
  });

  it("getUsers - should return all users", async () => {
    const users = [
      { id: "1", name: "Nataniel" },
    ] as unknown as UserPersistence[];
    const req = {} as Request;
    const res = mockResponse();
    vi.mocked(UserRepository.findAllUsers).mockResolvedValue(users);

    await Controller.getUsers(req, res);

    expect(res.json).toHaveBeenCalledWith(users);
  });

  it("updateUser - should return 400 if validation fails", async () => {
    const req = { body: {}, params: { id: "1" } } as unknown as Request;
    const res = mockResponse();

    await Controller.updateUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalled();
  });

  it("updateUser - should update user and return data", async () => {
    const validData = userSchema.parse({
      id: "1",
      name: "NatanielA",
      surname: "PortoA",
      country: "Portugal",
      birthday: "01/01/1990",
    });

    const req = { body: validData, params: { id: "1" } } as unknown as Request;
    const res = mockResponse();
    const updatedUser = {
      id: "1",
      ...validData,
    } as unknown as UserPersistence;
    vi.mocked(UserRepository.updateUser).mockResolvedValue(updatedUser);

    await Controller.updateUser(req, res);

    expect(UserRepository.updateUser).toHaveBeenCalledWith("1", validData);
    expect(res.json).toHaveBeenCalledWith(updatedUser);
  });

  it("getUser - should return 400 if id is missing", async () => {
    const req = { params: {} } as Request;
    const res = mockResponse();

    await Controller.getUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "Missing user ID" });
  });

  it("getUser - should return user if found", async () => {
    const user = { id: "1", name: "Nataniel" } as unknown as UserPersistence;
    const req = { params: { id: "1" } } as unknown as Request;
    const res = mockResponse();
    vi.mocked(UserRepository.findUser).mockResolvedValue(user);

    await Controller.getUser(req, res);

    expect(UserRepository.findUser).toHaveBeenCalledWith("1");
    expect(res.json).toHaveBeenCalledWith(user);
  });

  it("deleteUser - should delete user and return 204", async () => {
    const req = { params: { id: "1" } } as unknown as Request;
    const res = mockResponse();

    await Controller.deleteUser(req, res);

    expect(UserRepository.deleteUser).toHaveBeenCalledWith("1");
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.send).toHaveBeenCalled();
  });
});
