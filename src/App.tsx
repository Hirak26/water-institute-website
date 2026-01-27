import { createBrowserRouter, RouterProvider } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ProjectDetail } from "./pages/projects/ProjectDetail";
import { TeamMemberDetail } from "./pages/team/TeamMemberDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HomePage />
        </main>
        <Footer />
      </div>
    ),
  },
  {
    path: "/projects/:projectId",
    element: (
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <ProjectDetail />
        </main>
        <Footer />
      </div>
    ),
  },
  {
    path: "/team/:memberId",
    element: (
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <TeamMemberDetail />
        </main>
        <Footer />
      </div>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
