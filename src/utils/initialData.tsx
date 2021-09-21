export interface ProjectType {
  id: string;
  title: string;
  type?: "Mapa do celów projektowych" | "Wznowienie granic działki";
}

export interface BoardColumnType {
  id: string;
  title: string;
  projectsOrder: string[];
}

export const boardColumnsData: BoardColumnType[] = [
  {
    id: "column-1",
    title: "To do",
    projectsOrder: ["11", "12", "13", "14"],
  },
  {
    id: "column-2",
    title: "In progress",
    projectsOrder: ["21", "22", "23", "24"],
  },
];

export const projects: ProjectType[] = [
  {
    id: "11",
    title: "Działka 11, Sosnowiec",
    type: "Mapa do celów projektowych",
  },
  {
    id: "12",
    title: "Działka 12, Sosnowiec",
    type: "Mapa do celów projektowych",
  },
  {
    id: "13",
    title: "Działka 13, Sosnowiec",
    type: "Mapa do celów projektowych",
  },
  { id: "14", title: "Cook a breakfast", type: "Mapa do celów projektowych" },
  {
    id: "21",
    title: "Działka 21, Hajnówka",
    type: "Wznowienie granic działki",
  },
  {
    id: "22",
    title: "Działka 22, Hajnówka",
    type: "Wznowienie granic działki",
  },
  {
    id: "23",
    title: "Działka 23, Hajnówka",
    type: "Wznowienie granic działki",
  },
  {
    id: "24",
    title: "Działka 24, Hajnówka",
    type: "Wznowienie granic działki",
  },
];

// export const BoardData = [
//   {
//     id: "column-1",
//     title: "To do",
//     projects: [
//       { id: "11", title: "Take out the garbage" },
//       { id: "12", title: "Walk out the dog" },
//       { id: "13", title: "Do the shopping list" },
//       { id: "14", title: "Cook a breakfast" },
//     ],
//   },
//   {
//     id: "column-2",
//     title: "In Progress",
//     projects: [
//       { id: "21", title: "Watch my favorite show" },
//       { id: "22", title: "Charge my phone" },
//       { id: "23", title: "Cook dinner" },
//       { id: "24", title: "Play some video games" },
//     ],
//   },
// ];
