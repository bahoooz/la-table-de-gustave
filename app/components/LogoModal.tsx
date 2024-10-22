import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
} from "@nextui-org/react";

interface LogoModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

const LogoModal: React.FC<LogoModalProps> = ({ isOpen, onOpenChange }) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="flex justify-center items-center fixed inset-0 border-none outline-none"
      hideCloseButton={true}
      isDismissable={true}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <div className="h-[80vh] lg:h-[600px] w-[90%] lg:w-[800px] bg-bgColor px-9 md:px-16 py-12 flex flex-col md:justify-center gap-8 md:gap-16 border-2 border-titleColor overflow-y-scroll scrollbar-hide">
              <ModalHeader className="flex justify-center">
                <h2 className="text-2xl font-bold font-cinzel text-titleColor">
                  Informations :
                </h2>
              </ModalHeader>
              <ModalBody>
                <p>
                  Bienvenue sur La Table de Gustave, un restaurant gastronomique
                  parisien à l'élégance raffinée. Ce site, que j'ai entièrement
                  designé et développé, reflète l'ambiance luxueuse et
                  chaleureuse d'un établissement fictif situé à deux pas de la
                  Tour Eiffel.
                </p>
                <p>
                  La particularité de ce projet est que 100% du contenu a été
                  généré par l'Intelligence Artificielle. Des textes aux images,
                  chaque élément a été conçu avec soin grâce à l'IA. Il est
                  important de noter que La Table de Gustave est un site concept
                  fictif et que l'établissement n'existe pas.
                </p>
                <p>
                  Plongez dans cet univers gastronomique imaginaire, où
                  l'innovation culinaire rencontre la technologie pour offrir
                  une expérience virtuelle unique.
                </p>
              </ModalBody>
              <Button
                onPress={onClose}
                className="uppercase font-dm-sans border py-3 min-h-12 flex justify-center items-center text-xl w-fit px-12 mx-auto"
              >
                Ok
              </Button>
            </div>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default LogoModal;
