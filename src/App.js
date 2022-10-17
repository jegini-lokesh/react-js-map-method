
var arr= [
  { name:"lokesh" ,age:"25",position:"react devloper" },
  { name:"murali" ,age:"24",position:"sql devloper" },
  { name:"gopi" ,age:"26",position:"aws devloper" }
]
var lok=arr.map((index1)=>{
  return(
    <>
    <li>{index1.name}</li>
    <li>{index1.age}</li>
    </>
  )
})
const App =(ss)=> {
  return(
    <>
    <h1>hello world</h1>
    {/* {console.log(arr)} */}
    {/* {loki} */}
    {/* how can link map with component */}
    <p>{lok}</p>
   
    </>
  );
}

export default App;