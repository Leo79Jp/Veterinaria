import CaninoInfo from "./CaninoInfo";

export default function Veterinaria({state}) {
  return (
    <div>
        <ul>
            {state.map(i => 
                <CaninoInfo canino={i} key={i.id} />
            )}
        </ul>
    </div>
  )
}

