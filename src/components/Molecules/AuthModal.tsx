import {
  Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure
} from "@chakra-ui/react"

export const AuthModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen} variant="with-shadow">Trigger modal</Button>

      <Modal onClose={onClose} size={'xl'} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Scrap Book</ModalHeader>
          <ModalBody>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
