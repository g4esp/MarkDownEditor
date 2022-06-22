import { useState } from "react"
import mde from "./mde.svg"
import info from "./info.gif"
import close from "./close.gif"

const Sidebar = ({isVisible, setIsVisible}) => {
  return(
    <>
      <div className={`transition-all duration-300 ${!isVisible ? "-translate-x-[200%] opacity-0 w-0" : "translate-x-0 opacity-100 w-[22vw]"}`}>
        <img src={mde} alt="mde" className="mx-auto max-w-[60px] h-auto mb-3" />
        <div className="rounded-lg border">
          <table className="table-fixed text-xs w-full text-center mr-2">
            <thead>
              <tr>
                <th className="border-b p-1 border-r text-left">Element</th>
                <th className="border-b p-1 text-left">MD Syntax</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b p-1 border-r text-left">{"<h*>"}</td>
                <td className="border-b p-1 text-left"># H1<br/>## H2<br/>### H3</td>
              </tr>
              <tr>
                <td className="border-b p-1 border-r text-left">{"<b>"}</td>
                <td className="border-b p-1 text-left">**text**</td>
              </tr>
              <tr>
                <td className="border-b p-1 border-r text-left">{"<em>"}</td>
                <td className="border-b p-1 text-left">_text_</td>
              </tr>
              <tr>
                <td className="border-b p-1 border-r text-left">{"“"}</td>
                <td className="border-b p-1 text-left">{">text"}</td>
              </tr>
              <tr>
                <td className="border-b p-1 border-r text-left">{"<ol>"}</td>
                <td className="border-b p-1 text-left">1. First<br/>2. Second<br/>3. Third</td>
              </tr>
              <tr>
                <td className="border-b p-1 border-r text-left">{"<ul>"}</td>
                <td className="border-b p-1 text-left">- Item<br/>- Item<br/>- Item</td>
              </tr>
              <tr>
                <td className="border-b p-1 border-r text-left">{"<hr>"}</td>
                <td className="border-b p-1 text-left">{"---"}</td>
              </tr>
              <tr>
                <td className="border-b p-1 border-r text-left">{"<code>"}</td>
                <td className="border-b p-1 text-left">`code`</td>
              </tr>
              <tr>
                <td className="border-b p-1 border-r text-left">{"<a>"}</td>
                <td className="border-b p-1 text-left">{"[title](href)"}</td>
              </tr>
              <tr>
                <td className="p-1 border-r text-left">{"<img>"}</td>
                <td className="p-1 text-left">{"![alt](src)"}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-center mt-4 mx-auto text-xs uppercase font-bold max-w-[180px]">Made with ❤️ and a bit of 🧠 by <a href="https://github.com/g4esp" target="_blank">g4esp</a></div>
      </div>
      <div className="w-[5vw] h-full flex items-center justify-center cursor-pointer" onClick={()=>{setIsVisible(!isVisible)}}>
        <img src={isVisible ? close : info} alt="About" className="w-1/3 cursor-pointer" />
      </div>
    </>
  )
}
export default Sidebar