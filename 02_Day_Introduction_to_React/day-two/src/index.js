import React from "react";
import ReactDOM from "react-dom";

const headerStyles = {
  backgroundColor: "#61dbfb",
  color: "#ffffff",
  textAlign: "center",
  fontSize: 24,
  fontWeight: "bold",
  borderRadius: "10px",
  fontFamily: "Helvetica Neue",
  padding: 25,
  lineHeight: 1.5,
};

const welcome = "Welcome to 30 Days of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
  firstName: "Tharindu",
  lastName: "Edirisinghe",
};
const date = "Aug 1, 2024";

const header = (
  <header style={headerStyles}>
    <h1>{welcome}</h1>
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <p>
      Instructor: {author.firstName} {author.lastName}
    </p>
    <small>Date: {date}</small>
  </header>
);

const numOne = 3;
const numTwo = 2;

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

const yearBorn = 2002;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {""}
    {author.firstName} {author.lastName} is {age} years old
  </p>
);

const techs = ["HTML", "CSS", "JavaScript"];
const techsFormated = techs.map((tech) => <li>{tech}</li>);

const mainStyles = {
  backgroundColor: "#f3fof5",
  padding: 20,
  marginTop: 20,
  fontFamily: "Helvetica Neue",
  lineHeight: 1.5,
  fontSize: 18,
};

const main = (
  <main style={mainStyles}>
    <div classname="main-wrapper">
      <p>
        Prerequisites to get started{" "}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormated}</ul>
      {result}
      {personAge}
    </div>
  </main>
);

const copyRight = "Copyright 2020";

const footerStyles = {
  backgroundColor: "#61dbfb",
  color: "#ffffff",
  textAlign: "center",
  fontSize: 16,
  fontFamily: "Helvetica Neue",
  padding: 20,
  borderRadius: "10px",
};

const footer = (
  <footer style={footerStyles}>
    <p>{copyRight}</p>
  </footer>
);

const emailSubscriptionStyles = {
  backgroundColor: "#61dbfb",
  margin: "10px 0",
  padding: 10,
  border: "none",
  borderRadius: 5,
  cursor: "pointer",
  fontSize: 18,
  textAlign: "center"
};

const inputStyles = {
	width: "20%",
	height: "30px",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    fontSize: 18,
    marginTop: 10,
}

const emailSubscription = (
  <div style={emailSubscriptionStyles}>
    <h3>SUBSCRIBE</h3>
    <p>Sign up with your email address to receive news and updates</p>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
		gap: "30px",
        marginTop: 10,
		marginBottom: 20,
        fontSize: 16,
        color: "#ffffff",
        cursor: "pointer",
        textDecoration: "underline",
        textTransform: "uppercase",
        "&:hover": {
          color: "#61dbfb",
        },
        "&::before": {
          content: "'-'",
          marginRight: 5,
        },
        "&::after": {
          content: "'-'",
        },
        "&:active": {
          color: "#61dbfb",
          textDecoration: "none",
        },
        "&:focus": {
          outline: "none",
        },
      }}
    >
      <input style={inputStyles} type="text" placeholder="First Name" />
      <input style={inputStyles} type="text" placeholder="Second Name" />
      <input style={inputStyles} type="email" placeholder="Email" />
    </div>
    <button style={{
		...emailSubscriptionStyles,
        backgroundColor: "#ffffff",
        color: "#61dbfb",
        border: "1px solid #61dbfb",
        cursor: "pointer",
		borderRadius: "5px",
	}}>Subscribe</button>
  </div>
);

const app = (
  <div classname="app">
    {header}
    {main}
    {emailSubscription}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");

ReactDOM.render(app, rootElement);
