import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'
import Button from "../Components/Button";

function ButtonPage(){
    const handleClick = () => {
    };

    return <div>
        <div>
            <Button success rounded outline onClick={handleClick} > <GoBell /> First</Button>
        </div>
        <div>
            <Button danger outline> <GoCloudDownload /> Second</Button>
        </div>
        <div>
            <Button warning> <GoDatabase /> Third</Button>
        </div>
        <div>
            <Button secondary outline>Fourth</Button>
        </div>
        <div>
            <Button primary rounded>Fifth</Button>
        </div>
    </div>
}

export default ButtonPage;