export default function pluralize(unit: number, label: string) {
  if (label === "shelf") {
    return unit === 1 ? `${unit} ${label}` : `${unit} shelves`;
  } else return unit === 1 ? `${unit} ${label}` : `${unit} ${label}s`;
}
