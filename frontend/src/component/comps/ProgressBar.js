import React, {useEffect, useState} from 'react';
import useStorage from '../../hooks/useStorage';
import { motion } from 'framer-motion';
import '../../styles/Researcher/index.css';

const ProgressBar = ({ file, setFile ,seturl}) => {
    const { progress, url } = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null);
            seturl(url);
            console.log(url);
        }
    }, [url, setFile]);

    return (
        <motion.div className="progress-bar"
                    initial={{ width: 0 }}
                    animate={{ width: progress + '%' }}
        ></motion.div>
    );
}

export default ProgressBar;