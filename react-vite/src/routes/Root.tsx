import { Outlet, Link } from "react-router-dom";
const Root = () => {
  return (
    <>
      <div>
        <h1>mega app</h1>
        <ul className="header">
          <li>
            <Link to={`home`}>Home</Link>
          </li>
          <li>
            <a href="/stuff">Stuff</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
