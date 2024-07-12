import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Platform - App</title>
      </Helmet>

      <article className="min-h-screen flex flex-col justify-between">
        <header className={" bg-red-100"}>header</header>
        <main className={"flex-grow"}>main</main>
        <footer className={"bg-blue-100"}>footer</footer>
      </article>
    </>
  );
};

export default App;
