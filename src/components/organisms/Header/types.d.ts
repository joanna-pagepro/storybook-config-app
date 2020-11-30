export interface HeaderNavItem {
  to: string;
  label: string;
  key: string;
}

export interface HeaderProps {
  items?: HeaderNavItem[];
}
