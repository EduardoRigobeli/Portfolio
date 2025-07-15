export default function Sobre() {
    return (
        <div className="flex items-center justify-center h-[300px]">
            <section className="text-white flex items-center gap-5">
                <p>TEXTO</p>
                <img src="/Perfil.jpg" 
                     alt="Eduardo Rigobeli"
                     title="Eduardo Rigobeli"
                     className="w-[200px] h-[40px] object-cover"
                     />
            </section>
        </div>
    )
}