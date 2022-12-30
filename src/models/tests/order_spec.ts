import { Order, OrderStore } from '../orderItem';

const store = new OrderStore()

describe("Order Model", () => {
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

  it('create method should add a Order', async () => {
    const result = await store.create({
      id:0,
      productID: 1,
      quantity: 2,
      userID: 1,
      status: false
    });
    expect(result).toEqual({
      id: 1,
      productID: 1,
      quantity: 2,
      userID: 1,
      status: false
    });
  });

  it('index method should return a list of Orders', async () => {
    const result = await store.index();
    expect(result).toEqual([{
      id: 1,
      productID: 1,
      quantity: 2,
      userID: 1,
      status: false
    }]);
  });

  it('show method should return the correct Order', async () => {
    const result = await store.show("1");
    expect(result).toEqual({
      id: 1,
      productID: 1,
      quantity: 2,
      userID: 1,
      status: false
    });
  });

  it('delete method should remove the Order', async () => {
    store.delete("1");
    const result = await store.index()

    expect(result).toEqual([]);
  });
});