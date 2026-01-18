import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="div_menu_item">
      <div className="dropdown w-dropdown" data-hover="" data-delay="0">
        <div
          className={`dropdown-toggle w-dropdown-toggle ${isOpen ? "w--open" : ""}`}
          id={`w-dropdown-toggle-${item.id}`}
          aria-controls={`w-dropdown-list-${item.id}`}
          aria-haspopup="menu"
          aria-expanded={isOpen}
          role="button"
          tabIndex="0"
          onClick={() => onToggle(item.id)}
        >
          <div className="icone_menu">
            <i className={`bi ${item.icon}`}></i>
          </div>
          <div className="text-block">{item.label}</div>
          <div className="icon-2 w-icon-dropdown-toggle">
            <i className="bi bi-chevron-down"></i>
          </div>
        </div>

        <nav
          className={`dropdown-list w-dropdown-list ${isOpen ? "w--open" : ""}`}
          id={`w-dropdown-list-${item.id}`}
          aria-labelledby={`w-dropdown-toggle-${item.id}`}
          style={{ display: isOpen ? "block" : "none" }}
        >
          {item.subItems.map((subItem, index) => (
            <React.Fragment key={index}>
              <div className="">
                <i className=""></i>{" "}
              </div>
              <div className="">
                <Link
                  className="dropdown_link w-dropdown-link"
                  to={subItem.link}
                  tabIndex="0"
                >
                  {subItem.label}
                </Link>
              </div>
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SidebarItem;
