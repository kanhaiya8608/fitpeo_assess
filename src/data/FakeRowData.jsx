import faker from 'faker';

const generateFakeRowData = () => ({
  productName: faker.commerce.productName(),
  avatar: faker.image.avatar(),
  productDescription: faker.lorem.sentence(),
  stock: faker.random.number(),
  city: faker.address.city(),
  sales: faker.random.number({
    min: 1,
    max: 30
  }),
  price: faker.random
    .number({
      min: 100,
      max: 500
    })
    .toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
});

export const generateFakeData = (length) => {
  const productsList = [];

  for (let i = 0; i < length; i++) {
    productsList.push(generateFakeRowData());
  }

  return productsList;
};
