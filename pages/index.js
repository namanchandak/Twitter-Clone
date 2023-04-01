// import Sidebar from '../client/components/Sidebar'

import Sidebar from "../components/Sidebar"
import Feed from "../components/home/Feed"
const style={
  wrapper :`flex justify-center h-screen w-scren select-none bg-[#15202b] text-white`,
  content : `max-w-[1400px] w-2/3 flex justify-between`
} 



export default function Home () {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>

      
      {/* <Sidebar/> */}
      <Sidebar/>
      <Feed/>
      <h2>Widges</h2>
 
      </div>
    </div>
  )
}


