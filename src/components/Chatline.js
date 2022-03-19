import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";

function Chatline (props) {
  let text = props.text;

  const [element, setElement] = useState(text);

  function transform(text) {
    if (text.startsWith("/link")) {
      setElement(<Link to={text}>{text}</Link>);
    }
    else if (text.startsWith("/embed")) {
      setElement(text);
    } 
    else if (text.startsWith("/age")) {
      const [, name] = text.split(" ");
      fetch("https://api.agify.io/?name="+name)
        .then(res => res.json())
        .then(data => setElement(data.age));
    } 
    else if (text.startsWith("/gender")) {
      const [, name] = text.split(" ");
      fetch("https://api.genderize.io/?name="+name)
        .then(res => res.json())
        .then(data => setElement(data.gender));
    } 
    else if (text.startsWith("/randomfact")) {
      fetch("https://uselessfacts.jsph.pl/random.json?language=en")
        .then(res => res.json())
        .then(data => setElement(data.text));
      // ex10-01 here: Implement randomfact using fetch & promise
      // https://uselessfacts.jsph.pl/random.json?language=en
    }
    else if (text.startsWith("/cat")) {
      fetch("https://catfact.ninja/fact")
        .then(res => res.json())
        .then(data => setElement("The facts about cats : " + data.fact));
    }
    else if (text.startsWith("/nationalize")) {
      const [, name] = text.split(" ");
      fetch("https://api.nationalize.io/?name="+name)
        .then(res => res.json())
        .then(data => setElement(data.name + " => " + data.country[0].country_id  ));
    }
    else if (text.startsWith("/bored")) {
      fetch("https://www.boredapi.com/api/activity")
        .then(res => res.json())
        .then(data => setElement(data.activity + " About : " +data.type));
    }
  };

  useEffect(() => {
    transform(text);
  },[]);

  return (
    <div dangerouslySetInnerHTML={{__html: element}}></div>
  )
}

export default Chatline;