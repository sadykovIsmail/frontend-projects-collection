import React from "react";

const quotes = [
  "Do or do not. There is no try.",
  "The only true wisdom is in knowing you know nothing.",
  "Not all those who wander are lost.",
  "The journey of a thousand miles begins with one step."
];



export default function QuoteList() {
let output = []


quotes.forEach((line, i) => {
    output.push(<hr key={i + 'hr'} />)
    output.push( <blockquote key={i + 'text'}>{line}</blockquote>)
})
output.shift()
return <section>
    {output}
</section>
}