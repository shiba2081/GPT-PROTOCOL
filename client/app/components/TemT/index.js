
import CardT from '../CardT';
import './style.scss'

export default function TemT() {
  const cardsList = [
    {id:1,title:"Learn",description:"Dive into our quick guides to learn more about the Internet of AI."},
    {id:2,title:"Build",description:"Start crafting your projects with our developer tools."},
    {id:3,title:"Github",description:"Explore our repositories and contribute to open-source."},
    {id:4,title:"Community",description:"Connect, collaborate, and share knowledge with peers."},
  ]
  
  return (
    <div className='cardT-section'>
      <div className='cardT-flex'>
       {cardsList.slice(0,2).map((item, index)=> {
        return <CardT title={item.title} description={item.description} id={item.id}/>
       })}
       </div>
       <div className='cardT-flex'>
       {cardsList.slice(2,).map((item, index)=> {
        return <CardT title={item.title} description={item.description} id={item.id}/>
       })}
       </div>
    </div>
  );
}
