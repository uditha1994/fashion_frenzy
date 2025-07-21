import { motion } from "framer-motion";
import { Howl } from "howler";
import { faPlay } from 'react-icons/fa';

const StartScreen = ({ startGame, muted }) => {

    const characters = [
        { id:'bella' , name:'Bella' , decs:'The trendy Blogger' },
        { id:'kate' , name:'Kate' , decs:'The sporty Student' },
        { id:'sofia' , name:'Sofia' , decs:'The stylish Web Developer' }
    ];

    return (
        <motion.div
            className="start-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >

        </motion.div>
    );
}

export default StartScreen