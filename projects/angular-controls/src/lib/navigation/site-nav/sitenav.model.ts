export interface sitenav {
  logo: string;
  logotext: string;
  left: navitem[];
  right: navitem[];
  [key: string]: any;
}

export interface navitem {
  label: string;
  title?: string;
  url: string;
  icon: string;
  showDropdown?: boolean;
  submenu: navitem[];
}
