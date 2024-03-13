import React,{useState} from 'react'



export default function TextForm(props) {
    const handleOnChange=(event)=>{
        console.log("on chnage")
        setText(event.target.value)
        
    }
    const handleUpClick=()=>{
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to upperCase","success")
    }
    const handleLrClick=()=>{
      let newText=text.toLowerCase()
      setText(newText)
      props.showAlert("Converted to lowerCase","success")
  }
  const handleTiClick=()=>{
    let newText=text[0].toUpperCase().concat(text.slice(1))
    
    setText(newText)
    props.showAlert("Converted to upperCase","success")
}

    const handleReplace=()=>{
      const regex = new RegExp(searchText, 'g');
        const modifiedText = text.replace(regex, replaceText);
        setText(modifiedText);
        
        props.showAlert("Search and replace completed", "success");
    }
    const handleSpaces=()=>{
      let new_text=text.split(/[ ]+/)
      setText(new_text.join(' '))
      props.showAlert("Extra spaces remove from text", "success");
    }

    const handleCopy=()=>{
      navigator.clipboard.writeText(text)
      props.showAlert("Copied to clipboard", "success");
    }

    const handleClear=()=>{
      setText('')
      props.showAlert("Cleared text!", "success");
    }

    const handleReverse=()=>{
      let reverseString=''
    for(let i=text.length-1;i>=0;i--){
        reverseString=reverseString.concat(text[i])
    }
    setText(reverseString)
    props.showAlert("Reversed text!", "success");
    }
    const [text,setText]=useState("");
    const [searchText, setSearchText] = useState("");
    const [replaceText, setReplaceText] = useState("");
  return (
    <div style={{color:props.mode === "light"?"black":"white"}}>
        <h1 style={{textAlign:'center'}}>{props.heading}</h1>
    <div className="mb-3" style={{color:props.mode === "light"?"black":"white"}}>
  
  <textarea className="form-control" value={text} style={{backgroundColor:props.mode === "light"?"white":"#263238",color:props.mode === "light"?"black":"white"}} id="myBox"   onChange={handleOnChange} rows="8" ></textarea>
</div>
<div><input type="text"  placeholder='search text' onChange={(e) => setSearchText(e.target.value)} />
<input type="text"  placeholder='replace text'  onChange={(e) => setReplaceText(e.target.value)} /></div>
<button disabled={text.length===0 || searchText.length === 0 || replaceText.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleReplace}>Search and Replace</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLrClick}>Convert to lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleTiClick}>Convert to titlecase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSpaces}>Remove extra spaces</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleReverse}>Reverse text</button>

<div ><hr />
  <h3>Text summary : </h3>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length>0?text.length:0} characters</p>
  <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p><hr />
  <h3>Preview :</h3>
  
  <p>{text.length>0?text:"Nothing to show!"}</p>
</div>
    </div>

   
  )
}
