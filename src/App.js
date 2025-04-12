import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import Topic from './components/Topic';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import { SearchProvider } from './context/SearchContext';

const App = () => {
    const apikey = process.env.REACT_APP_NEWS_API;
    return (
        <>
            <SearchProvider>
            <Router>
                {/* <ProgressBar/> */}
                <NavBar />

                <div className='d-flex'>
                    <div id="topicContainer" >
                        <Topic />
                    </div>
                    <Routes>
                        <Route exact path="/" element={<News apikey={apikey} title={"NewsNexus - Top Headlines 🚀"} category={"top"} />} />
                        <Route exact path="/business" element={<News apikey={apikey} key="business" title={"NewsNexus - Business 💼"} category={"business"} />} />
                        <Route exact path="/crime" element={<News apikey={apikey} key="crime" title={"NewsNexus - Crime 🚔"} category={"crime"} />} />
                        <Route exact path="/domestic" element={<News apikey={apikey} key="domestic" title={"NewsNexus - Domestic 🏠"} category={"domestic"} />} />
                        <Route exact path="/education" element={<News apikey={apikey} key="education" title={"NewsNexus - Education 📚"} category={"education"} />} />
                        <Route exact path="/entertainment" element={<News apikey={apikey} key="entertainment" title={"NewsNexus - Entertainment 🎭"} category={"entertainment"} />} />
                        <Route exact path="/environment" element={<News apikey={apikey} key="environment" title={"NewsNexus - Environment 🌿"} category={"environment"} />} />
                        <Route exact path="/food" element={<News apikey={apikey} key="food" title={"NewsNexus - Food 🍔"} category={"food"} />} />
                        <Route exact path="/health" element={<News apikey={apikey} key="health" title={"NewsNexus - Health ❤️‍🩹"} category={"health"} />} />
                        <Route exact path="/lifestyle" element={<News apikey={apikey} key="lifestyle" title={"NewsNexus - Lifestyle 🌟"} category={"lifestyle"} />} />
                        <Route exact path="/other" element={<News apikey={apikey} key="other" title={"NewsNexus - Other 🌀"} category={"other"} />} />
                        <Route exact path="/politics" element={<News apikey={apikey} key="politics" title={"NewsNexus - Politics 🏛️"} category={"politics"} />} />
                        <Route exact path="/science" element={<News apikey={apikey} key="science" title={"NewsNexus - Science 🔬"} category={"science"} />} />
                        <Route exact path="/sports" element={<News apikey={apikey} key="sports" title={"NewsNexus - Sports ⚽"} category={"sports"} />} />
                        <Route exact path="/technology" element={<News apikey={apikey} key="technology" title={"NewsNexus - Technology 💻"} category={"technology"} />} />
                        <Route exact path="/top" element={<News apikey={apikey} key="top" title={"NewsNexus - Top Headlines 🚀"} category={"top"} />} />
                        <Route exact path="/tourism" element={<News apikey={apikey} key="tourism" title={"NewsNexus - Tourism ✈️"} category={"tourism"} />} />
                        <Route exact path="/world" element={<News apikey={apikey} key="world" title={"NewsNexus - World 🌍"} category={"world"} />} />


                        <Route exact path="/about" element={<About />} />

                    </Routes>
                </div>
            </Router>
            </SearchProvider>
        </>
    )
}

export default App
