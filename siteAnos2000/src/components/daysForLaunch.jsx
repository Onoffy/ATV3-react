import { useState } from "react";

function DaysForLaunch () {

    const [daysLeft, setDaysLeft] = useState(115);

    const launchDay = () => {

        if (daysLeft == 0) {
            return <div>
                <h3 id="launchDay">Lançou!!!</h3>
            </div>
        }

    }
    return <div>
        <h3>Dias para o lançamento: {daysLeft}</h3>
        <button onClick={() => setDaysLeft(Math.max (0, daysLeft - 1))}>Clique para diminuir</button>
        {launchDay ()}
    </div>
}

export default DaysForLaunch;