import React, { useState, useEffect, useContext, useRef } from 'react'
import NewsItem from './NewsItem'
import BeforeLoad from './BeforeLoad';
import Spinner from './Spinner';
import Scroll from './Scroll';
import ProgressBar from './ProgressBar';
import { SearchContext } from '../context/SearchContext';
import Found from './Found';

const News = ({ apikey, category, title }) => {


    const obj = useContext(SearchContext);

    const isFirstRun = useRef(true);




    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageId, setPageId] = useState('');
    const [width, setWidth] = useState('0vw');
    const [display, setDisplay] = useState('block');
    const [intialLoad, setIntialLoad] = useState(true);
    const [foundPage, setFoundPage] = useState(false);
    const [isKeyword, setisKeyword] = useState(false);

    const keywordSearch = async () => {

        setWidth('10vw');
        setLoading(true);
        setisKeyword(true);

        const url = `https://newsdata.io/api/1/latest?apikey=${apikey}&country=in&language=en&q=${obj.searchTerm}`;


        let data = await fetch(url);

        setWidth('30vw');

        let convertedData = await data.json();

        setWidth('70vw');
        if (convertedData.totalResults === 0) {
            setFoundPage(true)
            console.log("no results for the keyword", obj.searchTerm);
        }
        else {
            setFoundPage(false)
            console.log("success");
        }
        console.log(convertedData);

        setArticles(convertedData.results);
        setPageId(convertedData.nextPage);
        console.log(convertedData.nextPage);
        setLoading(false);
        setIntialLoad(false);
        setWidth('100vw');
        setTimeout(() => {
            setDisplay('none');
        }, 800);

        // =================
        // setisKeyword(false);
        // =================


    };



    const getData2 = async () => {
        setFoundPage(false);
        setisKeyword(false);
        setWidth('10vw');
        setLoading(true);

        const url = `https://newsdata.io/api/1/latest?apikey=${apikey}&country=in&language=en&category=${category}`;


        let data = await fetch(url);

        setWidth('30vw');

        let convertedData = await data.json();

        setWidth('70vw');


        console.log(convertedData);

        setArticles(convertedData.results);
        setPageId(convertedData.nextPage);
        setLoading(false);
        setIntialLoad(false);
        setWidth('100vw');
        setTimeout(() => {
            setDisplay('none');
        }, 800);


    };
    useEffect(() => {
        console.log(obj.searchTerm);
        if (isFirstRun.current) {
            isFirstRun.current = false;

        }
        else {
            setFoundPage(false);
            keywordSearch();
            setisKeyword(true);
        }


    }, [obj.searchTerm]);



    const handleNextClick = async () => {
        console.log('next clicked');
        setLoading(true);
        // setisKeyword(true);
        setFoundPage(false);
        // const url = `https://newsdata.io/api/1/latest?apikey=${apikey}&country=in&language=en&category=${category}${isKeyword?`&q=${obj.searchTerm}`:``}${pageId === '' ? '' : `&page=${pageId}`}`;
        const url = `https://newsdata.io/api/1/latest?apikey=${apikey}&country=in&language=en${isKeyword ? `` : `&category=${category}`}${isKeyword ? `&q=${obj.searchTerm}` : ``}${pageId !== '' && pageId !== null ? `&page=${pageId}` : ''}`;



        let data = await fetch(url);
        let convertedData = await data.json();

        console.log(convertedData);

        setArticles(articles.concat(convertedData.results));
        setPageId(convertedData.nextPage);
        setLoading(false);
    }




    useEffect(() => {
        const getData = async () => {
            setFoundPage(false);
            setisKeyword(false);
            setWidth('10vw');
            setLoading(true);

            const url = `https://newsdata.io/api/1/latest?apikey=${apikey}&country=in&language=en&category=${category}`;


            let data = await fetch(url);

            setWidth('30vw');

            let convertedData = await data.json();

            setWidth('70vw');


            console.log(convertedData);

            setArticles(convertedData.results);
            setPageId(convertedData.nextPage);
            setLoading(false);
            setIntialLoad(false);
            setWidth('100vw');
            setTimeout(() => {
                setDisplay('none');
            }, 800);


        };


        getData();
    }, [apikey, category]);

    return (
        <>
            {/* {(i === 1 ? (loading) : false) && <BeforeLoad length={10} />} */}


            {intialLoad && loading && <BeforeLoad length={10} />}

            <ProgressBar width={width} display={display} />

            {foundPage && <Found keyword={obj.searchTerm} setisKeyword={setisKeyword} getData2={getData2} />}

            {(!intialLoad) && (!foundPage) &&

                <div>


                    <div style={{ height: 'calc(100vh - 40px)', width: 'calc(100vw - 16vw)', }} id='scrollableDiv' >

                        <h2 className='p-2 text-center' style={{ transition: 'all 1s ease' }}>{isKeyword ? `Showing articles about: "${obj.searchTerm}"` : title}  </h2>


                        <div className='d-flex flex-wrap align-items-center justify-content-center' style={{ gap: '20px', paddingTop: '8px', height: 'calc(100vh - 172px)', width: 'calc(100vw - 16vw)', overflowY: 'auto' }} >

                            {
                                articles.map((article, index) => {
                                    return (
                                        article.title !== null && <NewsItem key={index} date={article.pubDate} source={article.source_name} newsUrl={article.link} title={article.title.length > 46 ? article.title.slice(0, 46) + "...." : article.title} imageUrl={article.image_url === null ? 'defaultImg.jpg' : article.image_url} description={article.description === null ? "Click Read More to see full description of this breaking news!" : (article.description.length > 115 ? article.description.slice(0, 115) + "...." : article.description)} fullDescription={article.description} fullTitle={article.title} />
                                    )
                                })
                            }

                            {loading &&
                                Array.from({ length: 8 }).map((_, index) => {
                                    return <div key={index} >
                                        <div className="card" aria-hidden="true" style={{ width: '18rem', height: '28rem' }}>
                                            <div className="placeholder-glow">
                                                <span className="placeholder col-7" style={{ height: '11.2rem', width: '100%' }}></span>
                                            </div>
                                            <div className="card-body" style={{ position: 'relative' }}>
                                                <h5 className="card-title placeholder-glow">
                                                    <span className="placeholder col-6"></span>
                                                    <span className="placeholder col-6"></span>

                                                </h5>
                                                <p className="card-text placeholder-glow">
                                                    <span className="placeholder col-7"></span>
                                                    <span className="placeholder col-4"></span>
                                                    <span className="placeholder col-4"></span>
                                                    <span className="placeholder col-6"></span>
                                                    <span className="placeholder col-8"></span>
                                                </p>
                                                <button className="btn btn-primary disabled placeholder col-6" aria-disabled="true" style={{ position: 'absolute', bottom: '15px', backgroundColor: '#5D3C64' }} ></button>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>


                        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                            {loading && <Spinner />}
                            {!loading && <Scroll />}
                            <button className="btn" style={{ position: 'absolute', right: '20px', top: '14px', display: `${loading ? 'none' : 'block'}` }} disabled={!pageId} onClick={() => { handleNextClick() }}>{pageId ? 'Next' : "You're all caught up!"} &rarr;</button>
                        </div>
                    </div>
                </div>

            }
        </>
    )
}

export default News
