import React from 'react'
import ReactDOM from 'react-dom'

const header = (
	<header>
	<h1>Welcome to 30 Days of React </h1>
	<h2>Getting Started React</h2>
	<h3>JavaScript Library</h3>
	<p>Tharindu Edirisinghe</p>
	<small>Aug 1, 2024</small>
	</header>
)

const main = (
	<main>
	<p>Prerequisite to get started react.js</p>
	<ul>
	<li>HTML</li>
	<li>CSS</li>
	<li>JavaScript</li>
	</ul>
	</main>
)

const footer = (
	<footer>
	<p>Copyright 2024</p>
	</footer>
)

const app = (
	<div>
	{header}
	{main}
	{footer}
	</div>
)

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)
