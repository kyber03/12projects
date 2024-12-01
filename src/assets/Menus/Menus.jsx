import { menudata } from "./menu.js";

function Menus() {
  const toggleMenus = (e) => {
    // e.stopPropogation();
    let submenu = e.target.querySelector("ul");
    if (!submenu) return;

    if (submenu.style.display === "none" || !submenu.style.display) {
      submenu.style.display = "block";
    } else {
      submenu.style.display = "none";
    }
  };

  const renderSubmenu = (submenu) => {
    return (
      <ul className="submenu">
        {submenu.map((subItem, index) => (
          <li key={index} onClick={toggleMenus}>
            {subItem.label}
            {subItem.submenu && renderSubmenu(subItem.submenu)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="App">
      <ul>
        {menudata.map((item, index) => (
          <li key={index} onClick={toggleMenus}>
            {item.label}
            {item.submenu && renderSubmenu(item.submenu)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menus;
