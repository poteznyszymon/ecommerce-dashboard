import { Outlet } from "react-router-dom";

const authLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default authLayout;
