interface ChainConnectorProps {
    /** Number of links. Each link is roughly 24px tall, so 4 links ≈ 96px. */
    links?: number;
    /** Positioning / rotation classes supplied by the parent. */
    className?: string;
}

/** A link seen face-on (hollow oval). */
const FACE_LINK = "-mt-1.5 h-8 w-[18px] rounded-full border-[4px] border-[#9a9aa6] first:mt-0";
/** A link seen edge-on (narrow solid oval). Alternating the two looks like a real chain. */
const SIDE_LINK = "-mt-1.5 h-7 w-2 rounded-full bg-[#6f6f7a] first:mt-0";

/** Decorative vertical chain made of alternating links. Hidden from screen readers. */
export default function ChainConnector({ links = 4, className = "" }: ChainConnectorProps) {
    return (
        <div aria-hidden="true" className={`flex flex-col items-center ${className}`}>
            {Array.from({ length: links }, (_, index) => (
                <span key={index} className={index % 2 === 0 ? FACE_LINK : SIDE_LINK} />
            ))}
        </div>
    );
}