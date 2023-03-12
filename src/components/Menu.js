
const Menu = () => {	
    return (
        <div className="container max-w-md h-96">
        <div className="header-area">
        <p className="text-4xl font-bold bg-gradient-to-b from-indigo-600 to-blue-200 bg-clip-text text-transparent">Quote Generator</p>
        </div>
            <div className="main-area">
                <div className="text-area backdrop-blur-sm bg-slate-300/40 p-3">
                    <p id="main-text" ></p>                    
                </div>
                <div className="person-area"> 
                <div className="person-text text-slate-200 font-medium text-center"></div>
                </div>
                <div className="btn-area text-center font-semibold pt-3">
                    <button id="btn-1" className="px-2 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" onClick={randomQuotes}>Click Me!</button>
                </div>
            </div>
        </div>
	
    )
}

const quotes = [
	{ 
		"quote" : "The only sin is ignorance", 
		"source" : "Christopher Marlowe" 
	},
	{
		"quote" : "A man is his own easiest dupe, for what he wishes to be true he generally believes to be true", 
		"source" : "Demosthenes"
	},
	{
		"quote" : "A lie can travel halfway around the world while the truth is putting on its shoes", 
		"source" : "Mark Twain"
	},
	{
		"quote" : "Great minds discuss ideas; average minds discuss events; small minds discuss people", 
		"source" : "Eleanor Roosevelt"
	},
	{
		"quote" : "If you have a garden and a library, you have everything you need", 
		"source" : "Marcus Tullius Cicero"
	},
	{
		"quote" : "Truth comes out in wine", 
		"source" : "Pliny the Elder"
	},
	{
		"quote" : "Everything in the universe is within you. Ask all from yourself", 
		"source" : "Rumi"
	},
	{
		"quote" : "When I get a little money I buy books; and if any is left I buy food and clothes", 
		"source" : "Desiderius Erasmus"
	}
];

const randomQuotes = () => {
	let random = Math.floor(Math.random() * quotes.length);
		
	document.querySelector("#main-text").innerHTML = quotes[random].quote;
	document.querySelector('.person-text').innerHTML = quotes[random].source;
}

export default Menu

