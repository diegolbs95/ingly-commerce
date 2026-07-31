export const WHOLESALE_MIN_ITEMS = 10;

export function hasWholesale(
  totalItems: number,
) {
  return totalItems >= WHOLESALE_MIN_ITEMS;
}

export function getUnitPrice(
  price: number,
  wholesalePrice: number | null,
  wholesale: boolean,
) {
  if (
    wholesale &&
    wholesalePrice
  ) {
    return wholesalePrice;
  }

  return price;
}

export function getTotalItems(
  items: {
    quantity: number;
  }[],
) {
  return items.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );
}