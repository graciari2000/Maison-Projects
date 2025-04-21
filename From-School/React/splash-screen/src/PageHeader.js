import style from "./PageHeader.module.css";

const PageHeader = () => {
  return (
    <nav>
      <ul className={style.menu}>
        <li>
          <h1>Chicago Art Institute</h1>
        </li>
        <li>
          <a href="#">SEARCH</a>
        </li>
        <li>
          <a href="#">FAVORITE</a>
        </li>
        <li>
          <form>
            <input type="text" />
          </form>
        </li>
      </ul>
    </nav>
  );
};

export default PageHeader;
