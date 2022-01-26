import React from "react";
import CartCountButton from "../../components/Common/CartCountButton";
import Footer from "../../components/Common/Footer";
import Banner from "../../components/Home/Banner";
import Menu from "../../components/Common/Menu";

import { useRecoilValue } from "recoil";
import { foodListState } from "../../data/foodState"

import  { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const Menu = React.lazy(() => {
//     return new Promise(resolve => {
//       setTimeout(() => resolve(import("../../components/Common/Menu")), 5000);
//     });
// });

const loadApp = async () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          state: "done"
        });
      }, 5000);
    });
    
    await promise;
};
    
function wrapPromise(promise) {
    let status = "pending";
    let result;
    let suspender = promise.then(
        (r) => {
            status = "success";
            result = r;
        },
        (e) => {
            status = "error";
            result = e;
        }
    );
    return {
        read() {
            if (status === "pending") {
                throw suspender;
            } else if (status === "error") {
                throw result;
            } else if (status === "success") {
                return result;
            }
        }
    };
}
const suspenderCheck = wrapPromise(loadApp());

const ChildComponent = ({ foodList, menuRef }) =>{
    const data = suspenderCheck.read()
    console.log('Promise', data);

    return <Menu foodList={foodList} ref={menuRef}/>
}

const Home = () => {

    const foodList = useRecoilValue(foodListState);
    
    return (
        <div>
            <Banner/>
            <div id='menu'>
                <React.Suspense fallback={
                    <div style={{fontWeight: 500, fontSize: '3rem'}}>Loading Menu...</div>
                }>
                    {/* <Menu foodList={foodList}/> */}
                    <ChildComponent foodList={foodList}/>
                </React.Suspense>
            </div>
            <Footer />
            <CartCountButton />
            <ToastContainer autoClose={1000} />
        </div>
    )
}

export default Home