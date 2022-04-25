import {MdOutlineDehaze} from 'react-icons/md';
//import TuneIcon from '@mui/icons-material/Tune';
import React from 'react'
import VideoRow from './VideoRow';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage__filter'>
            <MdOutlineDehaze />
            <h2>FILTER</h2>
        </div>
        <hr />

        <ChannelRow
            image="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
            channel="Elon Musk"
            verified
            subs="80.1M"
            noOfVideos={245}
            description="You know me"
         /> 

         <hr/>

         <VideoRow
            views="104M"
            subs="1.3M"
            description="Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers."
            timestamp="4 years ago"
            channel="Marvel Entertainment"
            title="Marvel Studios' Avengers: Infinity War - Official Trailer"
            image="https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg"
          />
            <VideoRow
            views="104M"
            subs="1.3M"
            description="Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers."
            timestamp="4 years ago"
            channel="Marvel Entertainment"
            title="Marvel Studios' Avengers: Infinity War - Official Trailer"
            image="https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg"
          />
            <VideoRow
            views="104M"
            subs="1.3M"
            description="Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers."
            timestamp="4 years ago"
            channel="Marvel Entertainment"
            title="Marvel Studios' Avengers: Infinity War - Official Trailer"
            image="https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg"
          />
            <VideoRow
            views="104M"
            subs="1.3M"
            description="Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers."
            timestamp="4 years ago"
            channel="Marvel Entertainment"
            title="Marvel Studios' Avengers: Infinity War - Official Trailer"
            image="https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg"
          />
            <VideoRow
            views="104M"
            subs="1.3M"
            description="Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers."
            timestamp="4 years ago"
            channel="Marvel Entertainment"
            title="Marvel Studios' Avengers: Infinity War - Official Trailer"
            image="https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg"
          />
            <VideoRow
            views="104M"
            subs="1.3M"
            description="Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers."
            timestamp="4 years ago"
            channel="Marvel Entertainment"
            title="Marvel Studios' Avengers: Infinity War - Official Trailer"
            image="https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg"
          />
            <VideoRow
            views="104M"
            subs="1.3M"
            description="Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers."
            timestamp="4 years ago"
            channel="Marvel Entertainment"
            title="Marvel Studios' Avengers: Infinity War - Official Trailer"
            image="https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg"
          />
            <VideoRow
            views="104M"
            subs="1.3M"
            description="Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers."
            timestamp="4 years ago"
            channel="Marvel Entertainment"
            title="Marvel Studios' Avengers: Infinity War - Official Trailer"
            image="https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg"
          />
            <VideoRow
            views="104M"
            subs="1.3M"
            description="Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers."
            timestamp="4 years ago"
            channel="Marvel Entertainment"
            title="Marvel Studios' Avengers: Infinity War - Official Trailer"
            image="https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg"
          />
    </div>
  )
}

export default SearchPage