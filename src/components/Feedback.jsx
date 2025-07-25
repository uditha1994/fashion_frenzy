import { motion } from "framer-motion";

const Feedback = ({ feedback, handleContinue, isFinalLevel }) => {
    // Get feedback messages based on score
    const getFeedbackMessages = () => {
        if (feedback.score >= 90) {
            return {
                title: 'Fabulous!',
                message: "You're a Fashion Icon! 👑 This outfit is absolutely perfect",
                emoji: "👏👑"
            };
        } else if (feedback.score >= 75) {
            return {
                title: 'Great Job!',
                message: "This is solid look, just few tweaks could make it perfect!!",
                emoji: "👍💕"
            };
        } else if (feedback.score >= 50) {
            return {
                title: 'Not Bad!',
                message: "There is potential here, but it needs some adjustments to really shine!!",
                emoji: "😊🪄"
            };
        } else {
            return {
                title: "Oops!!",
                message: "This outfit doesn't quite match the occasion. Let's try again",
                emoji: "🙈🧶"
            };
        }
    };

    const { title, message, emoji } = getFeedbackMessages();

    return (
        <motion.div
            className="feedback-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="feedback-card"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
            >
                <h2>{title} {emoji}</h2>

                <div className="score-breakdown">
                    <div className="score-item">
                        <span>Style Points:</span>
                        <span>{feedback.stylePoints || 0}</span>
                    </div>
                    <div className="score-item">
                        <span>Challenge Match:</span>
                        <span>{feedback.challengeMatch || 0}</span>
                    </div>
                    <div className="score-item">
                        <span>Bonus Points:</span>
                        <span>{feedback.bonusPoints || 0}</span>
                    </div>
                    <div className="score-item total">
                        <span>Total Score:</span>
                        <span>{feedback.score || 0}/100</span>
                    </div>
                </div>

                <div className="feedback-comments">
                    <h3>Fashion Notes:</h3>
                    <p>{message}</p>
                    {feedback.comments && (
                        <ul>
                            {feedback.comments.map((comment, i) => (
                                <li key={i}>{comment}</li>
                            ))}
                        </ul>
                    )}
                </div>

                <motion.button
                    className="continue-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleContinue}
                >
                    {isFinalLevel ? "See Final Results" : "Next Challenge"}
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default Feedback;