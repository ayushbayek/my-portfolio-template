export interface NavigationItem {
  id: string;
  label: string;
  sectionId: string;
  order: number;
}

export const navigationItems: NavigationItem[] = [
  {
    id: "expertise",
    label: "Expertise",
    sectionId: "expertise",
    order: 1
  },
  {
    id: "history",
    label: "History",
    sectionId: "history",
    order: 2
  },
  {
    id: "projects",
    label: "Projects",
    sectionId: "projects",
    order: 3
  },
  {
    id: "chat",
    label: "Chat with Me",
    sectionId: "chat",
    order: 4
  },
  {
    id: "contact",
    label: "Contact",
    sectionId: "contact",
    order: 5
  }
];
