export const menudata = [
  {
    label: "menu1",
  },
  {
    label: "menu2",
    submenu: [{ label: "submenu1" }, { label: "submenu2" }],
  },

  {
    label: "menu3",
    submenu: [
      { label: "submenu1" },
      { label: "submenu2" },
      { label: "submenu3" },
      { label: "submenu4" },
    ],
  },
  {
    label: "menu4",
    submenu: [
      { label: "submenu1" },
      { label: "submenu2" },
      { label: "submenu3" },
      {
        label: "submenu4",
        submenu: [{ label: "inner1" }, { label: "inner2" }],
      },
    ],
  },
];
