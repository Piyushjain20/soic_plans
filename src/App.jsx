import "./App.css";
import Nav from "./components/Nav";
import Table from "./components/Table.jsx";
import Footer from "./components/Footer";
import Pricing from "./screens/Pricing";
export default function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Pricing /> */}
      <Table />
      <Footer />
    </div>
  );
}
