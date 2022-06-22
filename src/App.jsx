import { useEffect, useRef, useState } from "react"
import ReactMarkdown from 'react-markdown'
import Sidebar from "./Sidebar"
import defaultMD from "./defaultMD"

function App() {
  const mdeditor = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [md, setmd] = useState(defaultMD)
  useEffect(()=>{
    const mdeLength = mdeditor.current.value.length
    mdeditor.current.setSelectionRange(mdeLength, mdeLength)
    mdeditor.current.focus()
  },[])
  return (
    <div className={`w-screen m-auto h-screen pr-8 py-8 items-center text-sm overflow-hidden lg:flex ${isVisible && "lg:space-x-4 pl-4"}`}>
      <Sidebar isVisible={isVisible} setIsVisible={setIsVisible}/>
      <section className="h-full w-full rounded-lg border flex flex-col min-w-[70vw] mx-auto overflow-y-hidden">
        <header className="bg-stone-200 rounded-t-lg p-1 text-center relative">
          <div className="flex items-center absolute bottom-1/2 translate-y-1/2 left-4">
            <span className="bg-red-500 inline-block w-1 h-1 rounded-full p-1 mr-1"></span>
            <span className="bg-yellow-500 inline-block w-1 h-1 rounded-full p-1 mr-1"></span>
            <span className="bg-green-500 inline-block w-1 h-1 rounded-full p-1"></span>
          </div>
          <div className="text-sm font-bold font-mono">MarkDownEditor</div>
        </header>
        <main className="flex h-full">
          <article className="w-1/2 border-r">
            <textarea 
              spellCheck="false"
              ref={mdeditor} 
              className="py-4 px-6 w-full h-full resize-none outline-none caret-indigo-500" 
              value={md} 
              onChange={(e)=>{setmd(e.target.value)}} />
          </article>
          <article className="w-1/2 overflow-y-scroll">
            <ReactMarkdown className="py-4 px-6">{md}</ReactMarkdown>
          </article>
        </main>
      </section>
    </div>
  )
}

export default App
