import {Modal} from "antd";


//@ts-ignore
import styles from './MyModal.module.scss'

const MyModal = ({modalOpen, setModalOpen, children, onOk}) => {


    return (
        <>
            <Modal
                title="Vertically centered modal dialog"
                centered
                open={modalOpen}
                onOk={onOk}
                onCancel={() => setModalOpen(false)}
            >
                {children}
            </Modal>
        </>
    );
};

export default MyModal;