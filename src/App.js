
import './App.css';
import Countries from './component/Countries/Countries';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';



function App() {
  return (
    <div className="App">
      <Header></Header>
   <Countries></Countries>
   <Footer></Footer>
    </div>
  );
}


















// function LoadCountries(){
//   const [Countries, setCountries] = useState([])
//   useEffect(()=>{
//     const url=`https://restcountries.com/v3.1/all
//     `
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>setCountries(data))
//   })
//   return(
//     <div>
//       <h1>Visiting Every Counties World</h1>
//       {
//         Countries.map(counties=><User name={counties.name.common} population={counties.population} img={counties.flags.png}></User>)
//       }
//     </div>
//   )
// }

// function User(props){
//   return(
//     <div className='user'>
//     <h1>{props.name}</h1>
//     <p>{props.population}</p>
//     <img src={props.img} alt="" />
//     </div>
    
//   )
// }

export default App;


