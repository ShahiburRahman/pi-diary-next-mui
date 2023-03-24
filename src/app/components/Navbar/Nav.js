
export default function Navbar(params) {

    return (
        <div className="flex items-center justify-evenly bg-blue-500 shadow-lg h-12 font-bold text-white sticky top-0 z-30">
            <div className="flex justify-evenly w-full cursor-pointer">
                <p>HOME</p>
                <p>PROFILE</p>
                <p>Hi</p>
            </div>
        </div>
    )
}