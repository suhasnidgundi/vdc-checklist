const ModalManager = ({ show, handleClose, title, body, actions }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
                {actions || (
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    );
};