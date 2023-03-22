import React, { useState } from 'react'

function Tooted() {
  const [tooted, uuendaTooted] = useState(["Nobe", "BMW", "Tesla"]);

  return (
    <div>
      <div>Tooteid kokku: {tooted.length} tk</div>
      {tooted.map(el => <div>{el}</div> )}
    </div>
  )
}

export default Tooted