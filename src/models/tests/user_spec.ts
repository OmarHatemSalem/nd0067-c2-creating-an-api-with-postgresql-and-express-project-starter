import { User, UserStore } from "../user";

const store = new UserStore()

describe("User Model", () => {
  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a create method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a update method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(store.index).toBeDefined();
  });

  it('create method should add a User', async () => {
    const result = await store.create({
        firstName: "Omar",
        lastName: "Hatem",
        password: "pass123",
        id: 0
    });
    expect(result).toEqual({
      id: 1,
      firstName: "Omar",
      lastName: "Hatem",
      password: "pass123"
    });
  });

  it('index method should return a list of Users', async () => {
    const result = await store.index();
    expect(result).toEqual([{
        id: 1,
        firstName: "Omar",
        lastName: "Hatem",
        password: "pass123"
    }]);
  });

  it('show method should return the correct User', async () => {
    const result = await store.show("1");
    expect(result).toEqual({
      id: 1,
      firstName: "Omar",
      lastName: "Hatem",
      password: "pass123"
    });
  });

  it('delete method should remove the User', async () => {
    store.delete("1");
    const result = await store.index()

    expect(result).toEqual([]);
  });
});

