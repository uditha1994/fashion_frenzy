import { useState } from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";

const Wardrobe = ({ currentChallenge, selectedItems, addItem, muted }) => {
    const categories = (['tops', 'bottoms', 'shoes', 'accessories', 'dresses'])
    const [activeCategory, setActiveCategory] = useState(categories[0])

    //sample wardrobe items
    const wardrobeItems = {
        tops: [
            { id: 't1', type: 'tops', name: 'Crop top', style: 'casual', color: 'pink', points: 10 },
            { id: 't2', type: 'tops', name: 'Blouse', style: 'formal', color: 'white', points: 15 },
            { id: 't3', type: 'tops', name: 'T-Shirt', style: 'casual', color: 'blue', points: 5 },
            { id: 't4', type: 'tops', name: 'Sweater', style: 'warm', color: 'yellow', points: 12 }
        ],
        bottom: [
            { id: 'b1', type: 'bottom', name: 'Jeans', style: 'casual', color: 'blue', points: 10 },
            { id: 'b2', type: 'bottom', name: 'Skirt', style: 'formal', color: 'black', points: 15 },
            { id: 'b3', type: 'bottom', name: 'Short', style: 'casual', color: 'denim', points: 5 },
            { id: 'b4', type: 'bottom', name: 'Leggings', style: 'sporty', color: 'gray', points: 12 }
        ],
        shoes: [
            { id: 's1', type: 'shoes', name: 'Sneakers', style: 'casual', color: 'white', points: 10 },
            { id: 's2', type: 'shoes', name: 'Heels', style: 'formal', color: 'black', points: 15 },
            { id: 's3', type: 'shoes', name: 'Boots', style: 'warm', color: 'brown', points: 12 },
            { id: 's4', type: 'shoes', name: 'Sandles', style: 'summer', color: 'gold', points: 8 }
        ],
        accessories: [
            { id: 'a1', type: 'accessories', name: 'Necklace', style: 'formal', color: 'silver', points: 15 },
            { id: 'a2', type: 'accessories', name: 'Sunglass', style: 'casual', color: 'black', points: 10 },
            { id: 'a3', type: 'accessories', name: 'Hat', style: 'summer', color: 'straw', points: 8 },
            { id: 'a4', type: 'accessories', name: 'Scarf', style: 'warm', color: 'patterned', points: 12 }
        ],
        dresses: [
            { id: 'd1', type: 'dresses', name: 'Summer Dress', style: 'summer', color: 'floral', points: 20 },
            { id: 'd2', type: 'dresses', name: 'Cocktail Dress', style: 'casual', color: 'red', points: 25 },
            { id: 'd3', type: 'dresses', name: 'Bikini', style: 'summer', color: 'pink', points: 18 },
            { id: 'd4', type: 'dresses', name: 'Office Dress', style: 'formal', color: 'black', points: 25 }
        ]
    }

    const playSelectedSound = () => {
        if (!muted) {
            const sound = new Howl({
                src: ['/public/sounds/click.wav'],
                volume: 0.4
            })
            sound.play()
        }
    }

    const isItemSelected = (item) => {
        return selectedItems.some(selected => selected.type === item.type && selected.id === item.id)
    }

    return (
        <div className="wardrobe-container">
            <div className="wardrobe-categories">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            <div className="wardrobe-items">
                {wardrobeItems[activeCategory].map(item => (
                    <motion.div
                        key={item.id}
                        className={`wardrobe-item ${isItemSelected(item) ? 'selected' : ''}`}
                        onClick={() => {
                            playSelectedSound()
                            addItem()
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                    >
                        <div className={`item-icon ${item.type} ${item.color}`}></div>
                        <div className="item-info">
                            <h4>{item.name}</h4>
                            <p>Style: {item.style}</p>
                            <p>+{item.points} pts</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Wardrobe