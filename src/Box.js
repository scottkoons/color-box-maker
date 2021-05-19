import './Box.css';
import { useFormik } from "formik";
import { TextField, Button, IconButton } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';

const Box = ({ id, width = '200px', height = '200px', color = 'blue', removeBox }) => {
    return (
        <div className="Box">
            <div className="Box-box" style={{ width: `${width}px`, height: `${height}px`, backgroundColor: `${color}`, borderRadius: `5px` }} />

            <IconButton color="secondary" aria-label="upload picture" component="span" className="Box-button" onClick={removeBox}>
                <CancelIcon />
            </IconButton>
        </div>
    );
};

export default Box;
