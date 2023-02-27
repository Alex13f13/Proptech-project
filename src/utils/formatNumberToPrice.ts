export default function formatNumberToPrice(number: number): string {
  return number.toLocaleString("es", {
    style: "currency",
    currency: "EUR",
  });
}