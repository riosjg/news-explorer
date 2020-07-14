import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import NewsList from './components/NewsList';
import axios from 'axios'

function App() {

  const [category, setCategory] = useState('');
  const [news, setNews] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      if(category === ''){
        return;
      }
      console.log('this is executing now');
      const url = `https://gnews.io/api/v3/topics/${category}?country=ar&token=4613f7b9a1296557942c0c8934f4d6ab`
      const res = await axios(url);
      let news = res.data.articles
      async function getImages (){
        for(let i=0; i<news.length; i++ ){
        var title = ( news[i].title.split(' ') )[0].replace(/\W/g, '');
        const img = await axios(`https://pixabay.com/api/?key=17467266-d5099eb65c4132662c6a98cb3&q=${title}&image_type=photo&per_page=3`);
        news[i].image = img.data.hits[0] ? img.data.hits[0].webformatURL : 'https://picsum.photos/200'
        }
      }
      await getImages();
      console.log(news)
      setNews(news);
    }
    fetchData();
  }, [category])


  return (
    <>
      <Header
        tite='News Explorer'
      />
      <div className="container white">
        <Form 
          setCategory={setCategory}
        />
        <NewsList
          news={news}
        />
      </div>
    </>
  );
}

export default App;
