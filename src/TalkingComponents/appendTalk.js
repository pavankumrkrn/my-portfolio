import React from "react";

export const AppendTalk = (props) => {
    let [txt, setText] = React.useState('');
    let arr1 = props.text.split('');
    let count = 0;
    React.useEffect(() => {
        setTimeout(() => {
            let texttt = () => {
                setText(txt += arr1[count]);
                count++;
                if (count === arr1.length) {
                    clearInterval(appendContent);
                }
            }
            var appendContent = setInterval(texttt, 100);
        }, 100);
    }, [])
    return (
        <>
            <p className='talkkk'> {txt}<span className="blinking-cursor mb-5">|</span> </p>
        </>
    )
}