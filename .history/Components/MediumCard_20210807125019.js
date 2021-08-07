import Image from "next/image"

const MediumCard = ({ image, title }) => {
    return (
        <div>
            <div className="relative h-80 w-80">
                <Image src={image} layout="fill" />
            </div>
            <h3>{title}</h3>
        </div>
    );
}

export default MediumCard;