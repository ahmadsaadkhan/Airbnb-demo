import Image from "next/image";

const Header = () => {
    return ( 
        <header className="sticky z-10">
            <div className="relative flex items-center h-10 cursor-pointer">
                <Image
                src="https://links.papareact.com/qd3"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                />
            </div>
            <div></div>
            <div></div>
        </header>
     );
}
 
export default Header;