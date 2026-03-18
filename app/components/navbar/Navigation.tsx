import { NavLink } from "@/types";

interface NavigationProps {
  className: string;
  openDropdown: string | null;
  setOpenDropdown: (value: string | null) => void;
  Links: NavLink[];
}

export default function Navigation({
  setOpenDropdown,
  openDropdown,
  className,
  Links,
}: NavigationProps) {
  return (
    <ul className={className}>
      {Links.map((link) =>
        link.children ? (
          <li key={link.text}>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === link.text ? null : link.text)
              }
            >
              {link.text}
            </button>
            {openDropdown === link.text && (
              <ul>
                {link.children.map((child) => (
                  <li key={child.href}>
                    <a href={child.href}>{child.text}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ) : (
          <li key={link.text}>{link.text}</li>
        ),
      )}
    </ul>
  );
}
