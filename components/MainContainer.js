import A from "./A";
import Head from "next/head";

const MainContainer = ({ children }) => {
  return (
    <>
      <Head>
        <meta keywords="nextjs"></meta>
      </Head>
      <div>
        <A text={"Главная"} href="/" />
        <A text={"Пользователи"} href="/users" />
      </div>
      {children}
    </>
  );
};

export default MainContainer;
