import { useState } from "react";
import data from "./data";
import "./style.css";

const Accordion = () => {
    const [selected, setSelected] = useState([]);
    const handleSingleSelected = (currentId) => {
        setSelected(currentId === selected ? null : currentId);
    };

    return (
        <div className="container">
            <div className="accordion">
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div
                            onClick={() => handleSingleSelected(dataItem.id)}
                            key={dataItem.id}
                            className="item"
                        >
                            <div  className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {selected === dataItem.id ? (
                                <div className="content">{dataItem.answer}</div>
                            ) : null}
                        </div>
                    ))
                ) : (
                    <div>data not loading</div>
                )}
            </div>
        </div>
    );
};

export default Accordion;
