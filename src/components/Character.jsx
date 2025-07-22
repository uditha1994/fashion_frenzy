import { motion } from "framer-motion";

const Character = ({ chacter, selectedItems, removeItem, feedback }) => {
    const characterVariants = {
        happy: {
            rorate: [0, -5, 5, -5, 0],
            transition: { duration: 0.6 }
        },
        sad: {
            y: [0, -10, 0],
            transition: { duration: 0.5 }
        },
        netral: {
            scale: 1,
            rotate: 1,
            y: 0
        }
    }

    const getReaction = () => {
        if (!feedback) return 'neural'
        return feedback.score >= 70 ? 'happy' : 'sad'
    }

    return (
        <div className="character-container">
            <motion.div
                className={`character-display ${Character}`}
                variants={characterVariants}
                animate={feedback ? getReaction() : 'neutral'}
            >
                {/* Base character */}
                <div className="character-base"></div>

                {/* Display Selected items */}
                {selectedItems.map(item => (
                    <div
                        key={`${item.type}-${item.id}`}
                        className={`character-item ${item.type}${item.id}`}
                        onClick={() => removeItem(item.type)}
                    >
                    </div>
                ))}
            </motion.div>

            {/* display current outfit items below character */}
            <div className="outfit-items">
                {selectedItems.length === 0 ?
                    (<p className="empty-outfit">
                        Drag Items ot Click to Dress up!</p>) :
                    (
                        selectedItems.map(item => (
                            <motion.div
                                key={`selected-${item.type}-${item.id}`}
                                className="selected-item-tag"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                onClick={() => removeItem(item.type)}
                                whileHover={{scale: 1.1}}
                            >
                                {item.name}
                                <span className="remove-item">x</span>
                            </motion.div>
                        ))
                    )}
            </div>
        </div>
    )
}

export default Character