export default function getStatusIconName(status: string) {
  switch (status) {
    case "Currently Reading":
      return "bookOpen";
    case "Read Next":
      return "bookArrowUp";
    case "Have Read":
      return "book";
  }
}
