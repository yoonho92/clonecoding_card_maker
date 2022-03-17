import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Ellie",
      company: "Samsung",
      title: "Software Engineer",
      theme: "light",
      email: "ellie@gmail.com",
      message: "go for it",
      fileName: "ellie",
      fileUrl: null,
    },
    {
      id: "2",
      name: "Ellie",
      company: "Samsung",
      title: "Software Engineer",
      theme: "dark",
      email: "ellie@gmail.com",
      message: "go for it",
      fileName: "ellie",
      fileUrl: null,
    },
    {
      id: "3",
      name: "Ellie",
      company: "Samsung",
      title: "Software Engineer",
      theme: "colorful",
      email: "ellie@gmail.com",
      message: "go for it",
      fileName: "ellie",
      fileUrl: null,
    },
  ]);
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
