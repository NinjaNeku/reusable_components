import Modal from "../Components/Modal";
import Button from "../Components/Button";
import { useEffect, useState } from "react";

function ModalPage(){
    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    },[])

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(!showModal);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = <Button primary onClick={handleClose}>I accept</Button>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>

    return <div>
        <Button primary onClick={handleClick}>Toggle Modal</Button>
        {showModal && modal}
    </div>
}

export default ModalPage;