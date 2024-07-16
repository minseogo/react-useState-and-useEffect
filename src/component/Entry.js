import React, {useState, useEffect} from 'react'

function Entry() {
    const bgcolor = ['red', 'green','blue'];

    // useEffect(()=>{
    //     document.querySelectorAll('li').forEach()
    // }) // useEffect에는 foreach 사용, foreach는 return이 없다

    // const [bgcolor, setBg] = useState('red'); //렌더링
    // 스타일 렌더링 classList 관련명은 useEffect에서 처리하기 딱 한번
    return (
        <div>
            {
                bgcolor.map((v, i)=>{
                    return(
                        <button onClick={()=>{
                            document.body.style.backgroundColor = v;
                        }}>{v}</button>
                    )
                })
            }
        </div> 
    )
}

export default Entry
