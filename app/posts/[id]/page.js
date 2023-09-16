"use client";
//
// import React from 'react';
//
// function Post() {
//
//     console.log(postid);
//
//     return (
//         <div>
//             post
//             <h1>{postid}</h1>
//         </div>
//     );
// }
//
// export default Post;
//
//


import React from 'react';
import ArticleContent from '../../../components/ArticleContent';
import '../home.css';

const SinglePage = ({params}) => {
    const postid = params.id;
    const article = ArticleContent.find((ele) => ele.title === postid);

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <>
            <div className="p-1">
                <div className="card p-1">
                    <main className="card-content p-3 p-md-5">
                        <h1>
                            <a href="/">{article.title}</a>
                        </h1>
                        <h3>{article.desc}</h3>
                        <br/>
                        <h4 className="date">{article.date}</h4>
                        <p className="dotted" />
                        {article.content.map((paragraph, key) => (
                            <h5 key={key}>{paragraph}</h5>
                        ))}
                    </main>
                </div>
            </div>
        </>
    );
};

export default SinglePage;

