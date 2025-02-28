import "./LewisModal.css";

export function openModal() {
   document.getElementById("validationModal").style.display = "block";
}
export function closeModal() {
   document.getElementById("validationModal").style.display = "none";
}

export default function LewisModal() {
   return (
      <>
         <div id="validationModal">
            <div id="positionModal">
               <button id="closeValidationModal" onClick={closeModal}></button>
               <div id="confirmationModal">Employee Created !</div>
            </div>
         </div>
      </>
   );
}
