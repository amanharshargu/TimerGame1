import { forwardRef , useImperativeHandle, useRef} from "react";
import {createPortal} from 'react-dom'

const ResultModal =forwardRef(function ResultModal({targetTime,remainingTime,onReset},ref){

    const dialog=useRef();

    const userlost=remainingTime<=0;
    const formattedremainingTime=(remainingTime/1000).toFixed(2);
    const score=Math.round((1-remainingTime/(targetTime*1000))*100);

    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        };
    });

    return createPortal( <dialog ref={dialog} className="result-modal">
        {userlost && <h2>You lost</h2>}
        {!userlost && <h2>Your Score:{score}</h2>}
        <p>Target time was <strong>{targetTime}</strong>seconds.</p>
        <p>You Stopped the timer within <strong>{formattedremainingTime}</strong></p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>,
    document.getElementById('modal')
    )

});

export default ResultModal;