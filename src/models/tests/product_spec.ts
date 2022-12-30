import { Product, ProductStore } from '../product';

const store = new ProductStore()

describe("Product Model", () => {
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

  it('create method should add a Product', async () => {
    const result = await store.create({
      id:0,
      name: "Udacity Nanodegree",
      price: 300
    });
    expect(result).toEqual({
      id: 1,
      name: "Udacity Nanodegree",
      price: 300
    });
  });

  it('index method should return a list of Products', async () => {
    const result = await store.index();
    expect(result).toEqual([{
      id: 1,
      name: "Udacity Nanodegree",
      price: 300
    }]);
  });

  it('show method should return the correct Product', async () => {
    const result = await store.show("1");
    expect(result).toEqual({
      id: 1,
      name: "Udacity Nanodegree",
      price: 300
    });
  });

  it('delete method should remove the Product', async () => {
    store.delete("1");
    const result = await store.index()

    expect(result).toEqual([]);
  });
});