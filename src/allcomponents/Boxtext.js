import React,{useState} from 'react';
import copy from "copy-to-clipboard";  
  

export default function Boxtext(props) {
 
    let handlechange = (event)=>{
        settext(event.target.value)
        console.log("perform change");
    }
    let handleclick = ()=>{
        let uppertext = text.toUpperCase();
        settext(uppertext)
        console.log("perform click");
        props.showalert("Converted to Uppercase","success")
    }
    let handleloclick = ()=>{
        let uppertext = text.toLowerCase();
        settext(uppertext)
        console.log("perform click");
        props.showalert("Converted to Lowercase","success")
    }
    let removeexspace = ()=>{
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "))
        props.showalert("Extra space Removed","success")

    }
    let clearall = ()=>{
        settext("")
        props.showalert("Cleared All","danger")
    }
    let copyToClipboard = () => {
       copy(text);
       alert(`You have copied "${text}"`);
       props.showalert("Copied to Clipboard","success")

    }


    const [text, settext] = useState("")
  return <>
      <div className="container my-5" style={{color : props.mode==='light'?'black':'white'}}>
          <h1>{props.heading}</h1>
      <div className="mb-3 my-3">
         <textarea className="form-control" style={{backgroundColor : props.mode==='light'?'white':'#615F5F',color : props.mode==='light'?'black':'white'}} value={text} onChange={handlechange} id="textbox" rows="10"></textarea>
         <button className={`btn btn-${props.mode==='dark'?'secondary':'success'} btn-sm my-2`} onClick={handleclick}>Convert To uppercase</button>
         <button className={`btn btn-${props.mode==='dark'?'secondary':'warning'} btn-sm m-2`} onClick={handleloclick}>Convert To lowercase</button>
         <button className={`btn btn-${props.mode==='dark'?'secondary':'primary'} btn-sm m-2`} onClick={removeexspace}>Remove extra spaces</button>
         <button className={`btn btn-${props.mode==='dark'?'secondary':'dark'} btn-sm m-2`} onClick={copyToClipboard}>Copy to Clipboard</button>
         <button className={`btn btn-${props.mode==='dark'?'secondary':'danger'} btn-sm m-2`} onClick={clearall}>Clear all</button>
         
        </div>
      </div>
      <div className="container my-5" style={{color : props.mode==='light'?'black':'white'}}>
          <h1>Your text summary</h1>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
          <p>{0.008 *text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h2 className='mt-5'>Preview</h2>
      <p>{text.length>0?text:"Type content above the box to show preview here"}</p>
      </div>
  </>;
}



