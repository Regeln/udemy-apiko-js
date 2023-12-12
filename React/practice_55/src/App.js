import "./App.css"

const App = () => {
    const formatUserName = (firstName, lastName) => {
        return `Welcome to website, ${firstName} ${lastName}`;
    }

    const title = "This test text for homework page";
    const greeting = formatUserName("Dale", "Cooper");
    const listHeader = "Here we have the list:";

    const listText = "Just text here";
    const listSpanText1 = "Here we have text and link!";
    const linkHref = "https://uk.reactjs.org/docs";
    const linkText = "It is link to our docs!";
    const listSpanText2 = "And the picture!!!";
    const imageSrc = "https://www.rspb.org.uk/globalassets/images/birds-and-wildlife/non-bird-species-illustrations/_1200x675.jpg";

    return (
        <div className="wrapper">
          <h1 style={{ color: "red" }}>{title}</h1>
          <br />
          <h2>{greeting}</h2>
          <h3>{formatUserName("John", "Doe")}</h3>
          <br />
          <p>{listHeader}</p>
          <ul>
            <li tab-index="_1">
                {listText}
            </li>
            <li>
                <span>{listSpanText1} </span>
                <a href={linkHref} target="_blank" rel="noopener noreferrer">{linkText}</a>
            </li>
            <li>
              <span>{listSpanText2}</span>
              <img src={imageSrc} alt="Fox" width="300" />
            </li>
          </ul>
        </div>
    );
};

export default App;