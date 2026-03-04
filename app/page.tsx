import Image from "next/image";
import Header from "./page/header/header";
import Main from "./page/main/main";
import Footer from "./page/footer/footer";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}
