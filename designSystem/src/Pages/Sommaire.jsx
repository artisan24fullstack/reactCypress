import { MainContent } from "../Components/ContentDisplay/TableOfContent/MainContent.jsx";
import { TableOfContent } from "../Components/ContentDisplay/TableOfContent/TableOfContent.jsx";
export function Sommaire() {

  return <div>
    <h1>Table Of Content</h1>
    <div>
      <TableOfContent />
    </div>
    <MainContent />

  </div>
}