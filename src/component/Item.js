import React from 'react';
import Btn from "./Btn"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Item = ({title , desc , textl , textr , backgroundImg}) => {
    return (
        <div className="item" style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className="it_con">
                <div className="it_tex">
                    <p> {title} </p>
                    <div className="it_texdec">
                        <p> {desc} </p>
                    </div>
                </div>
                <div className="it_th">
                    <div className="it_btn">
                        <Btn imp="primary" text={textr} />
                        <Btn imp="secondary" text={textl} />
                    </div>
                    <div className="it_exp">
                        <ExpandMoreIcon />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Item;