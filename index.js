//import React from "react";
 //import ReactDOM from "react-dom";

//  ReactDOM.render(<><h1>Saloni Verma</h1>
//                   <p>Software Developer</p>                //react fragment
//                   <h2>Web Developer</h2></>
// ,document.getElementById("root"));


// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <>
//   <h1>Data Structure syllabus</h1>
//   <p> Here are the syllabus of data structure:</p>
//   <ol>
//     <li>Array</li>
//     <li>String</li>
//     <li>Tree</li>
//     <li>Linked List</li>
//     <li>Heap</li>
//   </ol>
//   </>
//   ,document.getElementById('root')
// );

// import React from "react";
// import ReactDOM from "react-dom";                    // javascript in html
//    const flname="Saloni Verma";
// ReactDOM.render(
//    <>
//     <h1>my name is {flname} </h1> 
//         <p> sum of 2ans 3 is {2+3} </p>                                 
//       </>
//       ,document.getElementById('root')
//    );

//    import React from "react";
//    import ReactDOM from "react-dom";                  //template literal  
//    const fname="Saloni";
//    const lname="Verma";
// ReactDOM.render(
//    <>
//     <h1>{` my first name is ${fname} and my last name is ${lname}`} </h1>                                
//       </>
//       ,document.getElementById('root')
//    );

// import React from "react";
//    import ReactDOM from "react-dom";                  
//    const fname="Saloni";
//    const currDate= new Date().toLocaleDateString();
//    const currTime= new Date().toLocaleTimeString();
// ReactDOM.render(
//    <>
//     <h1> my first name is {fname} </h1> 
//     <p> Current date is: {currDate}</p>  
//     <p> Current time is: {currTime}</p> 
      
//       </>
//       ,document.getElementById('root')
//    );

// import React from "react";
//    import ReactDOM from "react-dom";                  
//    const fname="Saloni";
//    const img1="https://picsum.photos/200/300 ";
//    const img2=" https://picsum.photos/200/100";
//    const img3="https://picsum.photos/250/300 ";
//    const links="https://www.thapatechnical.com/ ";
// ReactDOM.render(
//    <>
//     <h1 contentEditable="true"> my first name is {fname} </h1> 
//     <img src={img1} alt="page not found"/>
//     <img src={img2} alt="page not found"/>
//     <a href={links} target="_thapa">
//     <img src={img3} alt="page not found"/>
//     </a>
//       </>
//       ,document.getElementById('root')
//    );

// import React from "react";
//    import ReactDOM from "react-dom";   
//   import './index.css' ;              
//    const fname="Saloni";
//    const img1="https://picsum.photos/200/300 ";
//    const img2=" https://picsum.photos/200/100";
//    const img3="https://picsum.photos/250/300 ";
//    const links="https://www.thapatechnical.com/ ";

// ReactDOM.render(
//    <>
//     <h1 className="heading"> my first name is {fname} </h1> 
//     <div className="img_div"> 
//     <img src={img1} alt="page not found"/>
//     <img src={img2} alt="page not found"/>
//     <a href={links} target="_thapa">
//     <img src={img3} alt="page not found"/>
//     </a>
//     </div>
//       </>
//       ,document.getElementById('root')
//    );
//  const heading={
//    color:"green",
//    textAlign: "center",
//    textTransform: "capitalize",                           //inline css
//    FontWeight:"bold",
//    margin: "40px",
//    fontFamily: '"Poppins", sans-serif',
//    textShadow: "0px 2px 4px #ffe9c5",
// };
//   ReactDOM.render(
//    <>
//      <h1 style={heading}> my first name is {fname} </h1> 
//      <div className="img_div"> 
//      <img src={img1} alt="page not found"/>
//      <img src={img2} alt="page not found"/>
//      <a href={links} target="_thapa">
//      <img src={img3} alt="page not found"/>
//      </a>
//      </div>
//        </>
//        ,document.getElementById('root')
//     );

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// let curDate=new Date(2022 ,6 ,6, 2);
// curDate=curDate.getHours();                                //project 1
// let greeting="";
// const cssStyle={ };

// if(curDate>=1 && curDate<12){
//     greeting ="Good Morning";
//     cssStyle.color="green";
// }
// else if(curDate>=12 && curDate<19){
//    greeting="Good Afternoon";
//    cssStyle.color="orange";
// }
// else{
//     greeting="Good Night";
//     cssStyle.color="black";
// }
//  ReactDOM.render(
// <>  
// <div>
//    <h1>Hello Sir,<span style ={cssStyle}>{greeting}</span></h1>
// </div>
// </>,
//    document.getElementById("root")

//  );

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//    <App/> ,document.getElementById("root")              //react components
// );

// import React from "react";
//  import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";

// ReactDOM.render(                                                  //greeting project from component
//     <App/> ,document.getElementById("root")   
// );

//  import React from "react";
//  import ReactDOM from "react-dom";
//  import youtuber,{favprog,myName,myNames} from "./App";
//  import kuchvhi from "./App";             // default vala            //youtuber k andar kuch bhi  curly bracket vala
// //import * as kuchbhi from "./App";           //all
//  ReactDOM.render(
//  <>
// <ol>
//     <li> english</li>
//     <li>{youtuber}</li>     
//     <li>{favprog}</li>                                          //import export
//     <li>{myName()}</li>     
//     <li>{myNames()}</li>
// </ol>
//  </>
//          ,document.getElementById("root")             
//  );
//                                                          // * kuchbhi below is the implementation
//  <li> english</li>
//  <li >{kuchbhi.default}</li>     
//  <li> {kuchbhi.favprog}</li>                    
//  <li>{kuchbhi.myName()}</li>     
//  <li>{kuchbhi.myNames()}</li>

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App"

// ReactDOM.render(
//     <>
//     {/* <ol>
//         <li>sum of 3 and 4 is {operation.add(3,4)}</li>
//         <li>  sub of 4 from 3 is {operation.sub(4,3)}</li>
//         <li>mul of 3 and 4 is {operation.mul(3,4)}</li>
//         <li>div of 4 and 2 is {operation.div(4,2)}</li>
//     </ol> */}
//     <App/>

//     </>,document.getElementById("root")
// );
import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";
//import Todo from "./Todo";
import Counterincdec from "./Counterincdec";
import './index.css';
 ReactDOM.render(<Counterincdec/>,document.getElementById("root"));
// import Card from "./Cards";
 //import './index.css';



// ReactDOM.render(
//     <>
//     <h1 className='heading_style'>Lists of top 3 courses of Harry</h1>
//      <Card
//         imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzT2en-r_Z4lF_Za6mvMa1aXjZLUpkhxoGzg&usqp=CAU"
//         title="Study with Harry"
//         sname="DSA full course"
//         link="https://www.youtube.com/watch?v=5_5oE5lgrhw&list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi"
//       />  

//        <Card
//         imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7wcHBH2Tpo6ku0fqKlAxSc2xQYaWHuskqRg&usqp=CAU"
//         title="Study with harry"
//         sname="React full course"
//         link="https://www.youtube.com/watch?v=z9bZufPHFLU&list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ"
//       /> 

//       <Card
//         imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv2Gec_nWwEeQYz5e12ED5xCjaUEQohuUnUg&usqp=CAU"
//         title="Study with "
//         sname="CSS full course"
//         link="https://www.youtube.com/watch?v=kBdlM6hNDAE&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y"
//       />   


//     </> ,document.getElementById("root")
// );


