import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('https://api.spaceflightnewsapi.net/v3/articles').then(res => res.json()).then(data => setNews(data))
    }, [])
    return (
        <div className="App">
            <div className="title">
                <h1>Space News</h1>
            </div>
            <div className="news-container">
                {news.map((val, key) => {
                    return (
                        <div key={key} className="article" onClick={() => window.location.href = val.url}>
                            <h2>{val.title}</h2>
                            <img src={val.imageUrl} />
                            <p>{val.summary}</p>
                            <h4>{val.publishedAt}</h4>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default App