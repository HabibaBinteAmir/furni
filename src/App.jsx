import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './componants/Heading'
import Flex from './componants/Flex'
import Button from './componants/Button'
import Menu from './componants/Menu'
import Container from './componants/Container'
import Image from './componants/Image'
import logo from './assets/logo.png'
import room1 from './assets/room1.png'
import room2 from './assets/room2.png'
import room3 from './assets/room3.png'
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* navbar part start */}
    <div className="py-3 bg-slate-50 fixed w-full top-0 left-0">
      <Container>
        <Flex className={"justify-between"}>
          <div className="">
            <Image src={logo} className={'w-full'}/>
          </div>
          <div className="pt-2">
            <Flex className={"gap-x-10 font-medium font-pop"}>
              <Menu mtext={'Home'} className={''}/>
              <Menu mtext={'Shop'} className={''}/>
              <Menu mtext={'About'} className={''}/>
              <Menu mtext={'Contact'} className={''}/>
              
            </Flex>
          </div>
          <div className="pt-3">
            <Flex className={'gap-x-5'}>
            <CiUser /> 
            <CiSearch />
            <CiHeart />
            <CiShoppingCart />
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
    {/* navbar part start */}
    {/* Banner part starts */}
    <div className="bg-bannerbg py-[150px] bg-no-repeat bg-cover bg-center">
      <Container className={'max-w-bannerContainer'}>
      
        <div className="w-[45%] p-8 mt-[60px] bg-[#FFF3E3] ms-auto rounded-lg">
           <Heading text={'New Arrival'} as={'p'} className={'  text-[14px] text-[#3A3A3A]  font-pop font-semibold'}/>
          <Heading text={'Discover Our New Collection'} as={'h1'} className={' pr-14 text-[45px] text-[#B88E2F] font-bold font-pop '}/>
          <Heading text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.'} as={'p'} className={'  text-[14px] text-[#333333]  font-pop pb-5 pt-5 '}/>
          <Button btntext={'Get Now'} className={'px-[35px] py-[12px] bg-[#B88E2F]  text-white text-[16px] font-pop font-semibold mb-5'}/>
        </div>
      </Container>
    </div>
    {/* Banner part end */}
    {/* Rooms part start */}
    <div className="">

      <Container className={'max-w-roomContainer'}>
        <div className=" text-center py-[40px]">
        <Heading text={'Browse The Range'} as={'h1'} className={' pr-14 text-[45px] text-[#333333] font-bold font-pop '}/>
        <Heading text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} as={'p'} className={'  text-[16px] text-[#333333]  font-pop pb-2 pt-2 '}/>
        </div>
        <Flex className={'justify-between '}>
          <div className="w-[30%] ">
            <Image src={room1} className={'h-[396px]  rounded-lg'}/>
            <div className=" text-center p-4">
            <Heading text={'Dining'} as={'h4'} className={'  text-[22px] text-[#3A3A3A]  font-pop font-semibold'}/>
            </div>
          </div>
          <div className="w-[30%]">
            <Image src={room2} className={' rounded-lg'}/>
            <div className=" text-center p-4">
            <Heading text={'Living'} as={'h4'} className={'  text-[22px] text-[#3A3A3A]  font-pop font-semibold'}/>
            </div>
          </div>
          <div className="w-[30%]">
            <Image src={room3} className={' rounded-lg'}/>
            <div className=" text-center p-4">
            <Heading text={'Bed Room'} as={'h4'} className={'  text-[22px] text-[#3A3A3A]  font-pop font-semibold'}/>

            </div>
            

          </div>
        </Flex>
      </Container>
    </div>
    {/* Rooms part end */}
    {/* products part start */}
    <div className="">
      <Container>
      <div className=" text-center py-[40px]">
        <Heading text={'Browse The Range'} as={'h2'} className={' pr-14 text-[45px] text-[#333333] font-bold font-pop '}/>
        </div>
        <Flex>
          <div className="w-[22%]">
            <Image src={''}/>
          </div>

        </Flex>

      </Container>

    </div>
    {/* products part end */}

    
     
    </>
  )
}

export default App
