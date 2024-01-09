export default function percentRead(number: number) {
  if (number === 1) {
    return "Finished";
  }
  return (
    new Intl.NumberFormat("en-US", { style: "percent" }).format(number) +
    " complete"
  );
}
