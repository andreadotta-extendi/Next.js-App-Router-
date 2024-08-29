import { useState, useCallback } from "react";

const useModal = (): [boolean, () => void] => {
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModalOpen = useCallback(() => {
    setModalOpen((prevState) => !prevState);
  }, []);
  return [isModalOpen, toggleModalOpen];
};

export default useModal;
