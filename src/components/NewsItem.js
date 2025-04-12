import React ,{useState}from 'react'


const NewsItem = ({ title, description, imageUrl, newsUrl, source, date, fullDescription, fullTitle }) => {
  const voices = speechSynthesis.getVoices();
  const brianVoice = voices.find(v =>
    v.name.toLowerCase().includes("brian") ||
    v.name.toLowerCase().includes("uk english male")
    
  );
 
  const [isSpeaking, setIsSpeaking] = useState(false);
  

  const speakText = (text) => {
    setIsSpeaking(false);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    if(brianVoice){
      utterance.voice = brianVoice;
    }
    else{
      utterance.voice = speechSynthesis.getVoices()[0];
    }
    utterance.pitch = 1; // range 0–2
    utterance.rate = 1;  // range 0.1–10

    // utterance.rate = 0.9;  // Slightly slower for a soft tone
    // utterance.pitch = 1.2; // Higher pitch = gentler sound
    // utterance.volume = 0.9; // Slightly lower volume

    // utterance.voice = speechSynthesis.getVoices()[0];
    console.log("speaking")
    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(utterance);
    utterance.onend=()=>{setIsSpeaking(false)}

    console.log(brianVoice)
  }
  const handleSpeak = () => {
    // setIsSpeaking(true)
    if(window.speechSynthesis.speaking){
      setIsSpeaking(false);
      window.speechSynthesis.cancel();
    }
    else{
      speakText(`This news is about ${fullTitle}. ${fullDescription}`  );
      console.log("speaking")
      setIsSpeaking(true)
    }
    }
    
  return (
    <div className="card" style={{ width: '18rem', height: '28rem', position: 'relative' }}>
      <div style={{ position: 'absolute', backgroundColor: '#5D3C64', fontSize: '0.7rem', padding: '0px 22px', right: '-8px', top: '-8px', borderRadius: '28px' }}>{source}</div>
      {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{backgroundColor: '#5D3C64'}}>
          {source}
        </span> */}
      <img src={imageUrl} className="card-img-top" alt="..." style={{ height: '40%', objectFit: 'cover' }} />
      <div className="card-body" style={{ position: 'relative' }}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <footer className="blockquote-footer"><cite title="Source Title">{date}</cite></footer>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div><a target="_blank" style={{ display: 'block' }} rel="noopener noreferrer" href={newsUrl} className="btn btn-primary">Read More</a></div>
            <button style={{ backgroundColor: '#282828', border: 'none', display: 'block' }}  onClick={handleSpeak}><img src={`${!isSpeaking?'voice.svg':'stop.svg'}`} alt="speak" /></button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NewsItem
