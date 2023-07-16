import React from 'react'

export default function About(props) {


    // const [mystyle,setmystyle]=useState({color:'white',
    // backgroundColor:'grey'})

    let mystyle={
      color: props.mode==='dark'?'white':'black',
      backgroundColor: props.mode==='dark'?'grey':'white'
    }

    
  

    
  return (
    <div className="container" style={mystyle}>

      <br />

        <h1 className='my-2'>About Us</h1>

        <br />

<div className="accordion" id="accordionExample "style={mystyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={mystyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Our Mission </strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div style={mystyle} className="accordion-body">
        <strong>Our mission at the Text Utils App is to empower users with powerful and efficient text manipulation tools. We strive to simplify complex text-related tasks, enhance productivity, and provide an intuitive user experience. With our app, users can effortlessly manipulate and transform text, perform tasks such as formatting, sorting, removing duplicates, and much more. Our mission is to be the go-to solution for anyone looking to streamline their text-related processes and unleash the full potential of their textual data.</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Meet Our team</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div style={mystyle} className="accordion-body">
        <strong>It is a Solo Project. This is Shayan Zameer student of Bachelor Of Computer Science at Comsats University Islamabad.</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Why Choose Us?</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div style={mystyle} className="accordion-body">
        <strong> This Text Utils App offers several advantages that set it apart from others in the market. Firstly, it provides a user-friendly interface that makes it easy for users to navigate and access a wide range of text manipulation functionalities. Secondly, the app offers exceptional speed and accuracy, ensuring efficient processing of large amounts of text data. Lastly, its compatibility across multiple platforms and devices allows users to access and utilize its features seamlessly, enhancing their productivity and convenience in managing and manipulating text. </strong> 
      </div>
    </div>
  </div>
</div>





      
    </div>
  )
}
