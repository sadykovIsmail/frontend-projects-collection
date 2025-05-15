import React from 'react';

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  let output = [];
  poem.lines.forEach((line, i) => {
    output.push(<hr key={i + '-separator'} />);
    output.push(<p key={i + '-text'}>{line}</p>);
  });
  output.shift(); // drop the leading <hr>
  return <article>{output}</article>;
}
