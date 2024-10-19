// React Layouts
import MainLayout from "../layouts/MainLayout";

// React Pages
import Content from "../pages/Content/";

export const routes = [
  {
    layout: MainLayout,
    routes: [
      {
        name: "content",
        title: "Content Page",
        component: Content,
        path: "/content",
        isPublic: true,
      },
    ],
  },
];
