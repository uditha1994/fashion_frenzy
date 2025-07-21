import { motion, spring } from 'framer-motion'
import { Howl } from 'howler'
import { FaRedo } from 'react-icons/fa'

const EndScreen = ({ score, restartGame, character,
    muted }) => {

    const getRating = () => {
        if (score >= 90) return 'Fashion Icon! 👑'
        if (score >= 75) return 'Trendsetter! 💫'
        if (score >= 50) return 'Style Apprentice! 🪄'
        return 'Fashion Rookie... 👒'
    }

    const playClickSound = () => {
        if (!muted) {
            const sound = new Howl({
                src: ['/public/sounds/click.wav'],
                volume: 0.6
            })
            sound.play()
        }
    }

    return (
        <motion.div
            className='end-screen'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='end-container'>
                <motion.div
                    className='character-celebration'
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: spring, stiffness: 100 }}
                >
                    <div className={`character-avatar large ${character}`}></div>
                </motion.div>

                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Game Complate!!
                </motion.h1>

                <motion.div
                    className='score-display'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, type: 'spring' }}
                >
                    <div className='score-value'>{score}</div>
                    <div className='score-label'>Fashion Points</div>
                    <div className='score-rating'>{getRating()}</div>
                </motion.div>

                <motion.p
                    className='end-message'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    {score >= 70
                        ? "Wow!! You've got brilliant style skills, The Fashion world awaits!!"
                        : "Not bad.. With a little more practice you'll be a fashion superstar"}
                </motion.p>

                <motion.button
                    className='restart-button'
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    onClick={() => {
                        playClickSound()
                        restartGame()
                    }}
                >
                    <FaRedo /> Play Again
                </motion.button>
            </div>
        </motion.div>
    )

}

export default EndScreen