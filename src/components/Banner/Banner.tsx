

export default function Banner(){
    return(
        <div className="relative">
            <img 
                src="./Jordan.png" 
                alt="Imagem do banner" 
            />
            <div className="absolute flex justify-between w-[30%] text-white top-[30%] right-[35%]">
                <div className="flex flex-col items-center gap-2">
                    <img 
                        src="./Lakers.png" 
                        alt="Logo do time" 
                    />
                    <h1 className="text-xl font-medium">Lakers</h1>
                    <div className="bg-white text-black text-center font-medium w-12 rounded-xl">60%</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                <img 
                    src="./bulls.png" 
                    alt="Logo do time" 
                />
                <h1 className="text-xl font-medium">Bulls</h1>
                <div className="bg-white text-black text-center font-medium w-12 rounded-xl">40%</div>
                </div>
            </div>

            <div className="absolute bg-[#B52532] right-[46%] top-[75%] w-[150px] rounded-3xl p-2">
                <p className="text-center text-white font-medium">JOGO 5: LAK 3-1</p>
            </div>

        </div>
    );
}