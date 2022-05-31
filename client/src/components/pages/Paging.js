import React, {useState} from 'react';
import { useEffect } from "react";
import './Paging.css';

export const Paging = ({
    array
  }) => {
    const [value, setValue] = useState(array[1].component);
    function pageChange(btn){
        var ele=Array.from(document.getElementsByClassName("pageButton"));
        //console.log(ele);
        ele.forEach(element => {
            element.style.borderBottom="2px solid #183194";
        });
        btn.target.style.borderBottom="none";
        setValue(array[btn.target.title].component);
    }
    useEffect(() => { var ele=Array.from(document.getElementsByClassName("pageButton"));
    if(ele[1]!=undefined)ele[1].style.borderBottom="none"; },[]);
    return (
        <div className='chosePage'>
            <ul>
                {array.map(adv => (
                    <li><div className="pageButton" onClick={pageChange} title={adv.nr}>{adv.title}</div></li>
                ))}
            </ul>
            <div className='pageOne'>{value}</div>
        </div>
    );
  };