import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

const quotesArr = [
  {
    quote: "What can men do against such reckless hate?",
    author: "King Theodin (LOTR)",
    color: "rgb(159, 217, 228)"
  },
  {
    quote: "Maybe I'm born with it, or maybe it's Maybelline.",
    author: "Maybelline",
    color: "rgb(188, 159, 228)"
  },
  {
    quote: "Revelry in the dark.",
    author: "Tokoyami (My Hero Acadamia)",
    color: "rgb(103, 103, 103)"
  },
  {
    quote: "I eat a chip.",
    author: "NOT Light Yagami (Death Note)",
    color: "rgb(238, 180, 84)"
  },
  {
    quote: "Worse things have happened. I think we're gonna be fine.",
    author: "Tony Stark (Iron Man)",
    color: "rgb(63, 62, 126)"
  },
  {
    quote: "Just like the astronauts eat!",
    author: "Spongebob",
    color: "rgb(242, 170, 170)"
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium cursus nibh, non accumsan metus ultrices sit amet. Mauris vitae consectetur nisi. Aenean vitae lorem imperdiet, sollicitudin neque accumsan, vehicula tortor.",
    author: "Fake News",
    color: "red"
  }
];
const random = Math.floor(Math.random() * quotesArr.length);

function Quotes(props) {
  return (
    <div className="quote-content">
      <div className="quote-container">
        <p className="quote" style={{ color: props.color }}>
          {props.quote}
        </p>
      </div>
      <div className="author-container">
        <p className="author" style={{ color: props.color }}>
          - {props.author}
        </p>
      </div>
    </div>
  );
}

function Buttons(props) {
  let twitterURL =
    "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
    '"' +
    props.quote.replace(/\s/g, "%20") +
    '"%20' +
    "- " +
    props.author.replace(/\s/g, "%20") +
    "&url=tjonesdev.github.io";

  return (
    <div className="btn-container">
      <div className="left-btn">
        <a
          className="tweet-quote btn"
          href={twitterURL}
          target="_blank"
          style={{ backgroundColor: props.color }}
        >
          <i className="fab fa-twitter" alt="twitter"></i>
        </a>
        <a
          className="fb-quote btn"
          href=""
          target="_blank"
          style={{ backgroundColor: props.color }}
        >
          <i className="fab fa-facebook-f" alt="facebook"></i>
        </a>
      </div>
      <div className="right-btn">
        <button
          className="new-quote btn"
          style={{ backgroundColor: props.color }}
          onClick={props.onClick}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: quotesArr[random].quote,
      author: quotesArr[random].author,
      color: quotesArr[random].color
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleClick() {
    let newRandom = Math.floor(Math.random() * quotesArr.length);

    this.setState({
      quote: quotesArr[newRandom].quote,
      author: quotesArr[newRandom].author,
      color: quotesArr[newRandom].color
    });
  }

  handleKeyUp(e) {
    if (e.keyCode === 32 || e.keyCode === 13) {
      let newRandom = Math.floor(Math.random() * quotesArr.length);

      this.setState({
        quote: quotesArr[newRandom].quote,
        author: quotesArr[newRandom].author,
        color: quotesArr[newRandom].color
      });
    }
  }

  componentDidMount() {
    document.addEventListener("keyup", this.handleKeyUp);
  }
  componentDidUnmount() {
    document.removeEventListener("keyup", this.handleKeyUp);
  }

  render() {
    return (
      <div className="container" style={{ backgroundColor: this.state.color }}>
        <div className="quote-box">
          <Quotes
            quote={this.state.quote}
            author={this.state.author}
            color={this.state.color}
          />
          <Buttons
            color={this.state.color}
            onClick={this.handleClick}
            quote={this.state.quote}
            author={this.state.author}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<QuoteMachine />, document.getElementById("root"));
