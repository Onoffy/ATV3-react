import { useState } from "react";

function DaysForLaunch () {

    const [daysLeft, setDaysLeft] = useState(116);
    
    return <div>
        <h3>Dias para o lançamento: {daysLeft}</h3>
        <button onClick={() => setDaysLeft(daysLeft - 1)}>Clique para diminuir</button>
    </div>

}

export default DaysForLaunch;