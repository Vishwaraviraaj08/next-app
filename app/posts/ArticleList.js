import React from 'react';
import Data from '../../components/Data';
import Link from 'next/link';
import './home.css';
const ArticleList = ({ articles }) => (
    <div className="row app m-5">
        {Data.map((Data) => (
            <div className="col-12 p-3 ">
                {/*<h1 className="">{Data.title}</h1>*/}
                <h4 className="description h3">{Data.description}</h4>
            </div>
        ))}

        {articles.map((article, key) => (
            <div className="blog-card col-md-4 p-5">
                <Link className="card p-1" href={"/posts/"+`${article.title}`}>
                    <img
                        alt="{article.title}"
                        src={article.img}
                    />
                    <section className="card-content p-3">
                        <h3>
                            {article.title} by {article.author}
                        </h3>
                        <h6 className="date">
                            {article.date}
                        </h6>
                        <h4>📝 {article.content[0].substring(0,70)}...</h4>
                    </section>
                </Link>
            </div>
        ))}
    </div>
);

export default ArticleList;
