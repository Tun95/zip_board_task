import { Helmet } from "react-helmet-async";
import NavBar from "../../common/navbar/NavBar";
import FaqComponent from "../../components/faq/Faq";

function HomeScreen() {
  return (
    <div>
      {" "}
      <Helmet>
        <title>Home FAQ</title>
      </Helmet>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-all">
        <div className="header_page">
          <NavBar />
          <main className="main_page">
            <FaqComponent />
          </main>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
