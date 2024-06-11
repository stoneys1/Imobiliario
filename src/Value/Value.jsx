import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../utils/accordion';

const Value = () => {
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="" />
                    </div>
                </div>

                <div className="flexColStart v-right">
                    <span className="blueText">Nosso Valor</span>
                    <span className="primaryText">Valor Que Damos A Você</span>
                    <span className="secondaryText">
                    Estamos sempre prontos para ajudar, oferecendo os melhores serviços para você
                        <br />
                        Acreditamos que um bom lugar para morar pode tornar sua vida melhor
                    </span>


                    <Accordion
                    className="accordion"
                    allowMultipleExpanded={false}
                    preExpanded={[0]}
                    >
                        
                            {data.map((item, i)=>{
                                    const [className, setClassName] = useState(null)
                                return (
                                    <AccordionItem
                                    className={`accordionItem ${className}`} key={i} uuid={i}>
                            
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="flexCenter accordionButton">

                                            <AccordionItemState>
                                                {({expanded})=> expanded 
                                                ? setClassName("expanded") 
                                                : setClassName("collapsed")
                                                }
                                            </AccordionItemState>

                                                <div className="flexCenter icon">{item.icon}</div>
                                                <span className="blueText">
                                                    {item.heading}
                                                </span>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20}/>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p className="secondaryText">{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                );
                            })}   
                        
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Value
