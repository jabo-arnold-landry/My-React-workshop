import { lazy } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

const RouterErrorBoundary = lazy(
  () => import("./RouterPractice/RouterErrorBoundary"),
);
const Home = lazy(() => import("./RouterPractice/Home"));
const About = lazy(() => import("./RouterPractice/About"));
const Postings = lazy(() => import("./RouterPractice/Postings"));
const PostLayout = lazy(() => import("./RouterPractice/PostLayout"));
const Post = lazy(() => import("./RouterPractice/Post"));
const Profile = lazy(() => import("./RouterPractice/Profile"));
const AccData = lazy(() => import("./RouterPractice/AccData"));

function App() {
  return (
    <>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/postings">Postings</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="postings" element={<PostLayout />}>
          <Route index element={<Postings />} />
          <Route
            path=":id"
            errorElement={<RouterErrorBoundary />}
            element={<Post />}
          />
        </Route>
        <Route path="profile" element={<Profile />}>
          <Route index element={<AccData />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
