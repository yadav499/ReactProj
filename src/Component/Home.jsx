import "./Home.css";
function Home() {
  return (
    <div>
      <div className="first">
        <h1>CAREER GUIDANCE SUPPORT</h1>
        <h3>
          Be The Warrior <br />
          Chase Your Career ......
        </h3>
        <form action="" className="formhomeSearch" role="search">
          <input
            className="homeSearch"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>

        <form action="" className="formhomeSearch" role="search">
          <button
            className="btn btn-outline-success homeSearch1 mt-3"
            type="submit"
          >
            Search
          </button>
          <button
            className="btn btn-outline-success homeSearch1 mt-3"
            type="submit"
          >
            Get Started with AI Bot
          </button>
          <img
            src="(C:\Users\hp\Desktop\cgs\cgs\public\Bot.jpg)"
            className="botimg"
            alt=""
          />
        </form>
      </div>

      
    </div>
  );
}
export default Home;
