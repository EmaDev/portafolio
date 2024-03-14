import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

type Card = {
    id: number;
    content: JSX.Element | React.ReactNode | string;
    className: string;
    thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
    const [selected, setSelected] = useState<Card | null>(null);
    const [lastSelected, setLastSelected] = useState<Card | null>(null);

    const handleClick = (card: Card) => {
        setLastSelected(selected);
        setSelected(card);
    };

    const handleOutsideClick = () => {
        setLastSelected(selected);
        setSelected(null);
    };

    return (
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-2 p-2 bg-white rounded-xl drop-shadow-xl border">
            {cards.map((card, i) => (
                <div key={i} className={cn(card.className, "")}>
                    <motion.div
                        onClick={() => handleClick(card)}
                        className={cn(
                            card.className,
                            "relative overflow-hidden",
                            selected?.id === card.id
                                ? "rounded-xl cursor-pointer absolute inset-0 h-1/2 w-[85%] h-[85%] m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                                : lastSelected?.id === card.id
                                    ? "z-40 bg-white rounded-xl h-full w-full"
                                    : "bg-white rounded-xl h-full w-full"
                        )}
                        layout
                    >
                        {selected?.id === card.id && <SelectedCard selected={selected} />}
                        <BlurImage card={card} />
                    </motion.div>
                </div>
            ))}
            <motion.div
                onClick={handleOutsideClick}
                className={cn(
                    "absolute h-full w-full left-0 top-0 opacity-0 z-10",
                    selected?.id ? "pointer-events-auto" : "pointer-events-none"
                )}
                animate={{ opacity: selected?.id ? 0.3 : 0 }}
            />
        </div>
    );
};

const BlurImage = ({ card }: { card: Card }) => {
    const [loaded, setLoaded] = useState(false);
    return (
        <img
            src={card.thumbnail}
            onLoad={() => setLoaded(true)}
            className={cn(
                "object-cover object-top absolute inset-0 h-full w-full transition duration-200 drop-shadow-lg",
                loaded ? "blur-none" : "blur-md"
            )}
            alt="thumbnail"
        />
    );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
    return (
        <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 0.6,
                }}
                className="absolute h-full w-full bg-[rgba(0,0,0,0.3)] "
            />
            <motion.div
                initial={{
                    opacity: 0,
                    y: 100,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
                className="relative px-8 pb-4 z-[70]"
            >
                {selected?.content}
            </motion.div>
        </div>
    );
};
