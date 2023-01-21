import { useState } from "react"

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className="inputContainer">
      <h1>URL <span>Shortener</span></h1>
        <p> URL Shortener is a free tool to shorten URLs. Create short & memorable links in seconds.</p>
      <div>
        <input
          type="text"
          placeholder="Enter link here"
          value={value}
          onChange={e => setValue(e.target.value)}  
        />
        <button onClick={handleClick}>Shorten URL</button>
      </div>
    </div>
  )
}

export default InputShortener