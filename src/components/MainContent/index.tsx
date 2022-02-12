import React, { useCallback, useEffect, useState } from "react";

type MainContentPropType = {
  setWasOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const MainContent: React.FC<MainContentPropType> = (props) => {
  const { setWasOpen } = props;
  const [newText, setNewText] = useState("");

  const handler = useCallback(() => {
    console.log("click");
  }, []);

  useEffect(() => {
    console.log("main content mount");
    document.body.addEventListener("click", handler);
    // setWasOpen(true);
    // return () => {
    //   console.log("main content unmount!!");
    //   document.body.removeEventListener("click", handler);
    // };
  }, []);

  const removerClick = () => {
    console.log("removerClick");
    document.body.removeEventListener("click", handler);
  };

  return (
    <section className="container">
      <h1>MAIN PAGE CONTENT</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        reprehenderit exercitationem libero consectetur aut ducimus quas quo eos
        tempore optio, harum eius id alias, quisquam sapiente. Natus mollitia
        hic possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Omnis, rerum recusandae? In delectus tenetur voluptate recusandae sint
        ducimus, repellendus molestias nobis autem aperiam temporibus mollitia,
        itaque quae, eaque pariatur maxime unde architecto ratione. Vitae vero
        est neque consequuntur quisquam possimus hic sint dolorum illum esse,
        minus explicabo dolor odit accusantium quibusdam non minima dignissimos
        maiores, doloribus ad natus? Quaerat, impedit eum explicabo dolor vitae
        minima, cupiditate, aspernatur nisi sunt fugit maiores facere tempore
        ipsam commodi odio ab ratione quae! Aliquid dolore magni, veniam
        laboriosam quis laudantium. Vero sit eveniet distinctio!
      </p>
      <p>{newText}</p>
      <input type="text" onChange={(event) => setNewText(event.target.value)} />
      <button type="button" onClick={removerClick}>
        ОТПИСАТЬСЯ ОТ КЛИКА
      </button>
    </section>
  );
};
export default MainContent;
