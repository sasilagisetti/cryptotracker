import React,{useState} from 'react'
import axios from "axios"
import ImageCard from './ImageCard';
import Footer from './Footer';
const Home = () => {
    const[text, setText] = useState('');
    const[data, setData] = useState([])

    function eventHandler(e){
        setText(val => val= e.target.value)
    }
    // console.log(text);
    React.useEffect(()=>{
        axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=50').then(
            res => setData(res.data.coins)
        )
    },[])
  return (
    <div>
        <div className='header'>
          <input type="text" placeholder='Enter Coin Name...' value={text} name="text" onChange={eventHandler} />
        </div>
        {
            data.length>0 &&
            <div className='grid-container'>
                {
                    data.filter(crypto => crypto.name.toLowerCase().includes(text.toLowerCase())).map(crypto =>
                        <ImageCard
                        name={crypto.name}
                        src={crypto.icon}
                        rank={crypto.rank}
                        price={crypto.price}
                        key={crypto.id}
                        cap={crypto.marketCap}
                        twitter={crypto.twitterUrl} 
                        website={crypto.websiteUrl}/>
                        )
                }
            </div>
        }
        {/* {data.length >=1 && <Footer />} */}
    </div>
  )
}

export default Home
