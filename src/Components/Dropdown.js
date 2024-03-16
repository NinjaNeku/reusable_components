import { useState, useEffect, useRef } from "react";
import Panel from "./Panel";
import { GoChevronDown } from "react-icons/go";

function Dropdown( {options, value, onChange} ){
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(()=>{
        const handler = (event) => {
            if(divEl.current && !divEl.current.contains(event.target)){
                setIsOpen(false);
            };
        }

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        }
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (Option) => {
        setIsOpen(false);
        onChange(Option);
    }

    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick = {() =>handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
    });

    return <div ref={divEl} className="w-58 relative">
        <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
            {value?.label || 'select...'}
            <GoChevronDown className="text-2xl"/>
            </Panel>
        {isOpen && <Panel className="absolute top-full" >{renderedOptions}</Panel>}
    </div>
}

export default Dropdown;