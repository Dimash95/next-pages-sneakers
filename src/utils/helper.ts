export const changeTheme = (theme: string) => {
  document.querySelector("html")?.setAttribute("data-theme", theme);
  console.log("theme changed to", theme);
  console.log(123);
};
