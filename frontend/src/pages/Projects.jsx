export default function Projects() {
    return(
        <div className="min-h-screen p-20">
            <h1 className="text-3xl text-center font-bold text-gray-300">My Projects</h1>
            <p className="text-center mt-5 font-bold text-xl text-gray-500">A showcase of my web development journey, featuring full-stack<br />
                applications, mini projects, and landing pages.</p>
            <div className="grid grid-cols-3 gap-5 mt-10">
                <a href="https://task-master-lime.vercel.app/" target="_blank"><div className="bg-gray-500 h-50 rounded-xl overflow-hidden relative group">
                    <img 
                        src="./images/task-master.png" 
                        alt="Task Master Project Screenshot"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 backdrop-blur-xs bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-gray-500 text-xl font-bold">Task Manager App 🔗</p>
                    </div>
                </div></a>

                    {/* <div className="bg-gray-300 h-50 rounded-xl">CSS</div>
                    <div className="bg-gray-300 h-50 rounded-xl">JavaScript</div> */}
            </div>
        </div>
    )
}