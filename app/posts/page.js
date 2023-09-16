'use client';


import React from "react";
import ArticleContent from "../../components/ArticleContent";
import ArticleList from "./ArticleList";
import './home.css';
const List = () => (
    <>
        <ArticleList articles={ArticleContent} />
    </>
);
export default List;
