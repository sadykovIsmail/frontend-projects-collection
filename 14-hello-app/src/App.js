import{ useState } from 'react'
export default function Form() {
  const [text1, setText1] = useState("")
    const  [text2, setText2] = useState("")

  function handleFirstNameChange(e) {
  return  setText1(e.target.value)
  }

  function handleLastNameChange(e) {
    return setText2(e.target.value)
  }
  function handleReset() {
  setText1("");
  setText2("");
      
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={text1}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={text2}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {text1} {text2}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
