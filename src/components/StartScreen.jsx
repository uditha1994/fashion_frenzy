import { motion } from "framer-motion";
import { Howl } from "howler";
import { FaPlay } from 'react-icons/fa';

const StartScreen = ({ startGame, muted }) => {

    const characters = [
        { id: 'bella', name: 'Bella', decs: 'The trendy Blogger' },
        { id: 'kate', name: 'Kate', decs: 'The sporty Student' },
        { id: 'sofia', name: 'Sofia', decs: 'The stylish Web Developer' }
    ];

    return (
        <motion.div
            className="start-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="start-container">
                <motion.h1
                    className="game-title"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >Fashion Frenzy</motion.h1>
            </div>

            <motion.p
                className="game-subtitle"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                Style your character for different
                occasions and get rated!!
            </motion.p>

            <motion.div
                className="character-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                {characters.map((char) => (
                    <motion.div
                        key={char.id}
                        className="character-card"
                        onClick={()=>{}}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className={`character-avatar ${char.id}`}></div>
                        <h3>{char.name}</h3>
                        <h3>{char.decs}</h3>
                        <div className="play-button">
                            <FaPlay /> Play
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default StartScreen