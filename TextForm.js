import React,{useState} from 'react'

export default function TextForm(props) {






     function removePunctuation(text){

        const newText= text.toString();
        if (typeof newText !== 'string') {
            return '';
           
          }
          return newText.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');
        }
          

    const handleRemoveClick= ()=>{
        const originaltext=text;
        const newwText= removePunctuation(originaltext);        
        setText(newwText);
        props.showalert("PUNCTUATION HAS BEEN REMOVED","success");
        
        
      }
      
      
      const handleClearClick= ()=>{
        const originaltext=text;
        const newwText= originaltext.replace(originaltext,'');   
        setText(newwText);
        props.showalert("TEXT HAS BEEN CLEARED","primary");
      }
      
      const handleUpClick= ()=>{
        // console.log("THE BUTTON WAS CLICKED");
        
        let newText= text.toUpperCase();
        
        setText(newText);
        props.showalert("TEXT HAS BEEN CONVERTED TO UPPER CASE","primary");
      }
      
      const handleDownClick= ()=>{
        // console.log("THE BUTTON WAS CLICKED");
        
        let newText= text.toLowerCase();
        
        setText(newText);
        props.showalert("TEXT HAS BEEN CONVERTED TO UPPER CASE","primary");
    }


    const onChange= (event)=>{
        console.log("ON CHANGE");

        setText(event.target.value);
    }




    const[text,setText]=useState('');
  return (

    <>

<div>

  
<div className={`mb-3 text-${props.mode==='light'? 'dark':'light'}`}>
    <br />
    <h1>{props.heading}</h1>
    <br />

  
  <textarea style={{backgroundColor: props.mode==='dark'? 'grey':'white' , color:props.mode==='dark'? 'white':'dark'}}  value={text}  onChange={onChange} className="form-control" id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0}  className="btn btn-success mx-2 my-2"  onClick={handleUpClick}>Convert To UpperCase</button>
<button disabled={text.length===0}  className="btn btn-success mx-2  my-2"  onClick={handleDownClick}>Convert To LowerCase</button>
<button  disabled={text.length===0} className="btn btn-success mx-2 my-2"  onClick={handleRemoveClick}>Remove Punctuations</button>
<button disabled={text.length===0}  className="btn btn-success mx-2 my-2"  onClick={handleClearClick}>Clear Text</button>
</div> 

<div className={`container my-3 text-${props.mode==='light'? 'dark':'light'}`}>
    <h2>Text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length *0.008} Minutes To Read Above Words</p>

    <h2>Preview</h2>

    <p>{text.length>0? text:'Nothing to Preview!'}</p>

</div>


</>
    
  )
}
