import React, {useState} from 'react';
import './Paging.css';

export const Paging = ({
    array
  }) => {
    const [value, setValue] = useState(array[1].component);
    function pageChange(btn){
        //btn.style.borderBottom=none;
        var ele=Array.from(document.getElementsByClassName("pageButton"));
        console.log(ele);
        ele.forEach(element => {
            element.style.borderBottom="2px solid #183194";
        });
        btn.target.style.borderBottom="none";
        setValue(array[btn.target.title].component);
    }
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